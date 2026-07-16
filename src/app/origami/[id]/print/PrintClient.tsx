"use client";

import Image from "next/image";
import { Printer } from "lucide-react";
import type { OrigamiItem } from "../../../../data/origami";
import { siteConfig } from "../../../lib/site-config";

export default function PrintClient({ item }: { item: OrigamiItem }) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-mist/40 text-ink print:bg-white">
      {/* Toolbar — hidden when printing */}
      <div className="mx-auto flex max-w-[860px] items-center justify-between px-6 py-6 print:hidden">
        <p className="text-sm text-slate">
          Use your browser&apos;s print dialog and choose &ldquo;Save as PDF&rdquo; to download.
        </p>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors duration-300 hover:bg-forest-dark"
        >
          <Printer className="h-4 w-4" /> Print / Save as PDF
        </button>
      </div>

      {/* A4-proportioned document */}
      <div className="mx-auto max-w-[860px] bg-white px-10 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] print:max-w-none print:px-0 print:py-0 print:shadow-none">
        {/* Top section: company branding */}
        <header className="flex items-center justify-between gap-6 border-b-2 border-forest pb-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              width={72}
              height={72}
              className="h-14 w-14 object-contain"
            />
            <div>
              <p className="font-display text-lg font-bold text-forest">{siteConfig.name}</p>
              <p className="text-xs text-slate">{siteConfig.url.replace("https://", "")}</p>
            </div>
          </div>
          <span className="rounded-full bg-cream px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
            Origami
          </span>
        </header>

        {/* Tutorial information */}
        <section className="mt-8 break-inside-avoid">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {item.difficulty} · {item.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink">{item.title}</h1>
          <p className="mt-2 max-w-2xl text-slate">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate">
            <span>
              <strong className="text-ink">Estimated Time:</strong> {item.estimatedTime}
            </span>
            <span>
              <strong className="text-ink">Paper:</strong> {item.paperSize}
            </span>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-8 border-t-2 border-mist" />

        {/* Steps */}
        <section className="space-y-8">
          {item.steps.map((step) => (
            <div key={step.stepNumber} className="flex gap-6 break-inside-avoid">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-cream ring-1 ring-mist">
                <img src={step.svgImage} alt="" className="h-24 w-24 object-contain" />
              </div>
              <div>
                <h2 className="font-display font-bold text-ink">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest text-xs text-cream">
                    {step.stepNumber}
                  </span>
                  {step.title}
                </h2>
                <p className="mt-1 text-slate">{step.instruction}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Divider */}
        <hr className="my-8 border-t-2 border-mist" />

        {/* Finished origami image */}
        <section className="break-inside-avoid text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-forest">
            Finished Result
          </p>
          <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-lg bg-cream ring-1 ring-mist">
            <img
              src={item.finalImage}
              alt={`Finished ${item.title} origami`}
              className="h-44 w-44 object-contain"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center gap-2 border-t border-mist pt-6 text-center text-xs text-slate">
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} logo`}
            width={36}
            height={36}
            className="h-8 w-8 object-contain opacity-70"
          />
          <p>{siteConfig.url.replace("https://", "")}</p>
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="italic">Generated by {siteConfig.name}</p>
        </footer>
      </div>
    </div>
  );
}
