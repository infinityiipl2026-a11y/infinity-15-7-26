import type { Metadata } from "next";
import OrigamiLibrary from "../../../components/OrigamiLibrary";
import { countByDifficulty, difficultyMeta } from "../../../data/origami";

export const metadata: Metadata = {
  title: "Medium Origami Tutorials",
  description:
    "Medium-level origami tutorials with step-by-step illustrated instructions.",
  alternates: { canonical: "/origami/medium" },
};

export default function MediumOrigamiPage() {
  const count = countByDifficulty("Medium");

  return (
    <div className="page-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px] pt-16 pb-20">
        <header className="mb-10 text-center animate-fade-in-up">
          <h1 className="font-display font-bold text-forest text-4xl sm:text-5xl mb-4">
            Medium Origami Tutorials
          </h1>
          <p className="mx-auto max-w-2xl text-slate">
            {difficultyMeta.Medium.description} {count} tutorial{count === 1 ? "" : "s"} to explore.
          </p>
        </header>

        <OrigamiLibrary lockedDifficulty="Medium" />
      </div>
    </div>
  );
}
