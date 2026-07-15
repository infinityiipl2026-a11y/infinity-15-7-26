"use client";

import React from "react";
import TutorialCard from "./TutorialCard";
import type { OrigamiItem } from "../data/origami";

type Props = { items: OrigamiItem[] };

export default function OrigamiGrid({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-mist bg-paper/60 py-16 text-center text-slate">
        No tutorials match your filters yet — try adjusting them.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <TutorialCard key={it.id} item={it} />
      ))}
    </div>
  );
}
