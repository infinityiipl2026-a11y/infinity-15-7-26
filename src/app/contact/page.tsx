import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { offices } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Infinity Industries Pvt. Ltd. — our Head Office in Mumbai, Delhi branch, and Bhawale warehouse. Email, call, or visit us.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        <h1 className="section-heading text-3xl sm:text-5xl lg:text-6xl mb-16">
          Connect With Us
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {offices.map((office) => (
            <div
              key={office.name}
              className="card-surface border-l-4 border-l-forest p-8"
            >
              <h3 className="font-display font-bold text-forest text-2xl mb-4">
                {office.name}
              </h3>
              <p className="text-slate leading-relaxed mb-4">
                {office.address}
              </p>

              {office.emails.map((email) => (
                <p key={email} className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4 text-forest shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-forest hover:text-gold transition-colors"
                  >
                    {email}
                  </a>
                </p>
              ))}

              {office.phone && (
                <p className="flex items-center gap-2 mb-5">
                  <Phone className="h-4 w-4 text-forest shrink-0" />
                  <a
                    href={`tel:${office.phoneHref}`}
                    className="text-forest hover:text-gold transition-colors"
                  >
                    {office.phone}
                  </a>
                </p>
              )}

              <div className="rounded-lg overflow-hidden border-2 border-mist shadow-md">
                <iframe
                  src={office.mapSrc}
                  className="w-full h-[260px] border-0"
                  loading="lazy"
                  title={`Map to ${office.name}`}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
