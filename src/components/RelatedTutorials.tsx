import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { OrigamiItem } from "../data/origami";

const difficultyBadge: Record<OrigamiItem["difficulty"], string> = {
  Easy: "bg-forest/10 text-forest",
  Medium: "bg-gold/20 text-forest-dark",
  Hard: "bg-clay/10 text-clay",
};

export default function RelatedTutorials({ items }: { items: OrigamiItem[] }) {
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-ink">Related Tutorials</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/origami/${item.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-mist bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(44,74,62,0.14)]"
          >
            <div className="flex h-28 items-center justify-center white">
              <img
                src={item.thumbnail}
                alt={`${item.title} thumbnail`}
                className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <span
                className={`w-fit rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${difficultyBadge[item.difficulty]}`}
              >
                {item.difficulty}
              </span>
              <h3 className="mt-2 font-display text-sm font-bold text-ink">{item.title}</h3>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate">
                <Clock className="h-3 w-3" /> {item.estimatedTime}
              </span>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold text-forest">
                Open Tutorial <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
