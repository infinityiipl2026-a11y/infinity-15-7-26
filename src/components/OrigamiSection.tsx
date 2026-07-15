import React from "react";
import Link from "next/link";
import DifficultyCard from "./DifficultyCard";
import {
  difficultyMeta,
  countByDifficulty,
  getOrigamiByDifficulty,
} from "../data/origami";

export default function OrigamiSection() {
  const levels = (["Easy", "Medium", "Hard"] as const).map((difficulty) => {
    const meta = difficultyMeta[difficulty];
    const items = getOrigamiByDifficulty(difficulty);
    return {
      difficulty,
      accent: meta.accent,
      description: meta.description,
      count: countByDifficulty(difficulty),
      illustrationSrc: items[0]?.thumbnail ?? "/images/origami/steps/paper-crane-1.svg",
      href: `/origami/${difficulty.toLowerCase()}`,
    };
  });

  return (
    <section className="py-16">
      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end animate-fade-in-up">
        <div>
          <h2 className="section-heading !text-left !mb-2">Origami DIY</h2>
          <p className="max-w-2xl text-slate">
            Learn beautiful paper folding with step-by-step illustrated
            tutorials suitable for every skill level.
          </p>
        </div>

        <Link href="/origami" className="btn-secondary whitespace-nowrap">
          View All Tutorials
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((level) => (
          <DifficultyCard key={level.difficulty} {...level} />
        ))}
      </div>
    </section>
  );
}
