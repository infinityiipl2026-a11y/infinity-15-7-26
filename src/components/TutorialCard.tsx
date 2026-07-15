"use client";

import Link from "next/link";
import { Clock, Ruler, ArrowRight } from "lucide-react";
import type { OrigamiItem } from "../data/origami";

const difficultyBadge: Record<OrigamiItem["difficulty"], string> = {
  Easy: "bg-forest/10 text-forest",
  Medium: "bg-gold/20 text-forest-dark",
  Hard: "bg-clay/10 text-clay",
};

type Props = { item: OrigamiItem };

export default function TutorialCard({ item }: Props) {
  return (
    <Link
      href={`/origami/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-paper shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(44,74,62,0.14)]"
    >
      <div className="flex h-40 items-center justify-center bg-cream">
        <img
          src={item.thumbnail}
          alt={`${item.title} diagram thumbnail`}
          className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${difficultyBadge[item.difficulty]}`}
          >
            {item.difficulty}
          </span>
          <span className="text-xs italic text-slate">{item.category}</span>
        </div>

        <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {item.estimatedTime}
          </span>
          <span className="inline-flex items-center gap-1">
            <Ruler className="h-3.5 w-3.5" /> {item.paperSize.split("—")[0].trim()}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate line-clamp-3">
          {item.description}
        </p>

        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-forest">
          Start Tutorial
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
