"use client";

import { Clock, Download } from "lucide-react";
import type { OrigamiItem } from "../data/origami";

const difficultyBadge: Record<OrigamiItem["difficulty"], string> = {
  Easy: "bg-forest/10 text-forest",
  Medium: "bg-gold/20 text-forest-dark",
  Hard: "bg-clay/10 text-clay",
};

export default function TutorialHeader({ item }: { item: OrigamiItem }) {
  return (
    <div className="animate-fade-in-up">
      <span
        className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] ${difficultyBadge[item.difficulty]}`}
      >
        {item.difficulty}
      </span>

      <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
        {item.title}
      </h1>

      <p className="mt-4 max-w-2xl text-slate leading-relaxed">{item.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-paper border border-mist px-3 py-1.5">
          <Clock className="h-4 w-4" /> {item.estimatedTime}
        </span>
        <span className="rounded-full bg-paper border border-mist px-3 py-1.5">
          {item.paperSize.split("—")[0].trim()}
        </span>
        <span className="italic">{item.category}</span>
      </div>

      <div className="mt-6">
        <a
          href={item.downloadPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-md bg-gradient-to-r from-forest to-forest-dark px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream shadow-[0_8px_24px_rgba(44,74,62,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(44,74,62,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
