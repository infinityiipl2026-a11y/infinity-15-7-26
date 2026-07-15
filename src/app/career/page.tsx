import type { Metadata } from "next";
import CareerForm from "@/app/components/CareerForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with Infinity Industries Pvt. Ltd. Join a team driven by innovation, integrity, and over 50+ years of industry excellence.",
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return (
    <div className="page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        <div className="text-center mb-16">
          <span className="inline-block bg-forest text-cream px-6 py-2 rounded text-xs font-bold uppercase tracking-[0.15em] mb-6">
            Join Our Team
          </span>
          <h1 className="font-display font-extrabold text-forest text-4xl sm:text-6xl leading-tight mb-5">
            Build Your Career With Infinity
          </h1>
          <p className="text-slate text-lg leading-relaxed max-w-2xl mx-auto">
            Join a team driven by innovation, integrity, and over 50+ years of
            industry excellence.
          </p>
        </div>

        <CareerForm />
      </div>
    </div>
  );
}
