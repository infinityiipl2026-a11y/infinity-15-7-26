import type { Metadata } from "next";
import OrigamiLibrary from "../../components/OrigamiLibrary";

export const metadata: Metadata = {
  title: "Origami Tutorials",
  description:
    "Browse illustrated, step-by-step origami tutorials for every skill level — search, filter by category, and sort to find your next fold.",
  alternates: { canonical: "/origami" },
};

export default function OrigamiPage() {
  return (
    <div className="page-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px] pt-16 pb-20">
        <header className="mb-10 text-center animate-fade-in-up">
          <h1 className="font-display font-bold text-forest text-4xl sm:text-5xl mb-4">
            Origami Tutorial Library
          </h1>
          <p className="mx-auto max-w-2xl text-slate">
            Illustrated, step-by-step folding guides for every skill level —
            search, filter, and sort to find your next project.
          </p>
        </header>

        <OrigamiLibrary />
      </div>
    </div>
  );
}
