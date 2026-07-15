import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { OrigamiDifficulty } from "../data/origami";

type Accent = "green" | "orange" | "red";

const accentClasses: Record<
  Accent,
  { border: string; bg: string; text: string; badgeBg: string; button: string }
> = {
  green: {
    border: "border-forest/15 hover:border-forest/40",
    bg: "bg-white/10",
    text: "text-forest",
    badgeBg: "bg-forest",
    button: "bg-forest text-cream group-hover:bg-forest-dark",
  },
  orange: {
    border: "border-gold/25 hover:border-gold/50",
    bg: "bg-white/15",
    text: "text-gold-light",
    badgeBg: "bg-gold",
    button: "bg-gold text-ink group-hover:bg-gold-light",
  },
  red: {
    border: "border-clay/20 hover:border-clay/45",
    bg: "bg-white/10",
    text: "text-clay",
    badgeBg: "bg-clay",
    button: "bg-clay text-cream group-hover:bg-clay-dark",
  },
};

type Props = {
  difficulty: OrigamiDifficulty;
  accent: Accent;
  description: string;
  count: number;
  illustrationSrc: string;
  href: string;
};

export default function DifficultyCard({
  difficulty,
  accent,
  description,
  count,
  illustrationSrc,
  href,
}: Props) {
  const c = accentClasses[accent];

  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-2xl border-2 ${c.border} bg-paper p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]`}
    >
      <span
        className={`inline-flex w-fit items-center rounded-full ${c.badgeBg} px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cream`}
      >
        {difficulty}
      </span>

      <p className="mt-4 text-slate leading-relaxed">{description}</p>

      <div className={`mt-6 flex h-36 items-center justify-center rounded-xl ${c.bg}`}>
        <img
          src={illustrationSrc}
          alt={`${difficulty} origami illustration`}
          className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-6 text-sm text-slate">
        <span className={`font-display text-2xl font-bold ${c.text}`}>{count}</span>{" "}
        tutorial{count === 1 ? "" : "s"}
      </p>

      <div
        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${c.button}`}
      >
        Explore
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
