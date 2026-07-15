"use client";

import { useState, type FormEvent } from "react";

const POSITIONS = ["Sales Executive", "Accounts Executive", "Logistics Executive"];

type Status = "idle" | "submitting" | "success" | "error";

export default function CareerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const fullname = String(data.get("fullname") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const location = String(data.get("location") || "").trim();

    if (!/^[A-Za-z ]{3,50}$/.test(fullname)) {
      setStatus("error");
      setErrorMsg("Full Name should contain only alphabets and spaces.");
      return;
    }
    if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid lowercase Gmail address.");
      return;
    }
    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      setStatus("error");
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!location) {
      setStatus("error");
      setErrorMsg("Please enter your current location.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="card-surface max-w-[700px] mx-auto p-8 sm:p-14 border-t-4 border-t-forest">
      <h2 className="font-display font-bold text-forest text-3xl text-center mb-8">
        Start Your Journey With Us
      </h2>

      {status === "success" ? (
        <p
          role="status"
          className="text-center text-forest font-semibold text-lg py-6"
        >
          Application submitted successfully. We&rsquo;ll be in touch soon!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          noValidate
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            pattern="[A-Za-z ]{3,50}"
            title="Enter only alphabets and spaces."
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address (Gmail only)"
            required
            pattern="[a-z0-9._%+-]+@gmail\.com"
            title="Enter a valid Gmail address (lowercase only)."
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="Enter a valid 10-digit mobile number."
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest"
          />

          <select
            name="position"
            required
            defaultValue=""
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest"
          >
            <option value="" disabled>
              Position Applying For
            </option>
            {POSITIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest"
          />

          <input
            type="text"
            name="location"
            placeholder="Current Location"
            required
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest"
          />

          <label className="text-sm font-semibold text-forest -mb-2">
            Upload Resume (PDF / DOC / DOCX)
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3 text-sm file:mr-4 file:rounded file:border-0 file:bg-forest file:px-4 file:py-2 file:text-cream file:font-semibold"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Message (Optional)"
            className="w-full rounded-md border-2 border-mist bg-cream px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-forest resize-y"
          />

          {status === "error" && (
            <p role="alert" className="text-sm font-semibold text-red-600">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Submit Application"}
          </button>
        </form>
      )}
    </div>
  );
}
