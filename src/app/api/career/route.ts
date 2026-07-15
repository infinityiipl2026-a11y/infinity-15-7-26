import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const NAME_RE = /^[A-Za-z ]{3,50}$/;
const EMAIL_RE = /^[a-z0-9._%+-]+@gmail\.com$/;
const PHONE_RE = /^[6-9][0-9]{9}$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullname = String(formData.get("fullname") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const experience = String(formData.get("experience") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const resume = formData.get("resume");

    // ── Server-side validation (mirrors the client-side rules) ──
    if (!NAME_RE.test(fullname)) {
      return NextResponse.json(
        { error: "Full Name should contain only alphabets and spaces." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid lowercase Gmail address." },
        { status: 400 }
      );
    }
    if (!PHONE_RE.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }
    if (!position || !location) {
      return NextResponse.json(
        { error: "Position and location are required." },
        { status: 400 }
      );
    }
    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: "Please attach your resume." },
        { status: 400 }
      );
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume file is too large (max 5MB)." },
        { status: 400 }
      );
    }
    const ext = resume.name.slice(resume.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { error: "Resume must be a PDF, DOC, or DOCX file." },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
      CAREERS_TO_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CAREERS_TO_EMAIL) {
      console.error("Missing SMTP environment variables for /api/career");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const safe = {
      fullname: escapeHtml(fullname),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      position: escapeHtml(position),
      experience: escapeHtml(experience || "Not specified"),
      location: escapeHtml(location),
      message: escapeHtml(message || "—"),
    };

    await transporter.sendMail({
      from: `"Infinity Industries Careers" <${SMTP_USER}>`,
      to: CAREERS_TO_EMAIL,
      replyTo: `"${safe.fullname}" <${email}>`,
      subject: `New Career Application - ${fullname}`,
      html: `
        <h2>New Career Application</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;font-family:Arial;">
          <tr><td><strong>Full Name</strong></td><td>${safe.fullname}</td></tr>
          <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${safe.phone}</td></tr>
          <tr><td><strong>Position Applied For</strong></td><td>${safe.position}</td></tr>
          <tr><td><strong>Experience</strong></td><td>${safe.experience}</td></tr>
          <tr><td><strong>Location</strong></td><td>${safe.location}</td></tr>
          <tr><td><strong>Message</strong></td><td>${safe.message}</td></tr>
        </table>
        <br>
        <p><strong>Resume:</strong> Please find the applicant's resume attached with this email.</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Career form submission failed:", err);
    return NextResponse.json(
      { error: "Application could not be submitted. Please try again later." },
      { status: 500 }
    );
  }
}
