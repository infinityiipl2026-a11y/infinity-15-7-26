"use client";

import React from "react";
import type { OrigamiDifficulty } from "../data/origami";

export type SortOption = "Newest" | "Popular" | "Alphabetical" | "Shortest Time" | "Longest Time";
export type TimeOption = "" | "5" | "10" | "20" | "30";

export type FilterState = {
  difficulty: OrigamiDifficulty | "";
  sort: SortOption;
  time: TimeOption;
};

type Props = {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  hideDifficulty?: boolean;
};

const difficulties: (OrigamiDifficulty | "")[] = ["", "Easy", "Medium", "Hard"];
const sortOptions: SortOption[] = ["Newest", "Popular", "Alphabetical", "Shortest Time", "Longest Time"];
const timeOptions: { label: string; value: TimeOption }[] = [
  { label: "Any time", value: "" },
  { label: "~5 mins", value: "5" },
  { label: "~10 mins", value: "10" },
  { label: "~20 mins", value: "20" },
  { label: "30+ mins", value: "30" },
];

const selectClasses =
  "rounded-md border border-mist bg-paper px-3 py-2 text-sm text-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-forest";

export default function FilterBar({ filters, onChange, hideDifficulty }: Props) {
  const set = (patch: Partial<FilterState>) => onChange({ ...filters, ...patch });

  return (
    <div className="flex flex-col gap-4">
      {!hideDifficulty && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold uppercase tracking-[0.18em] text-slate">Difficulty</span>
          {difficulties.map((d) => (
            <button
              key={d || "all"}
              onClick={() => set({ difficulty: d })}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                filters.difficulty === d
                  ? "border-forest bg-forest text-cream"
                  : "border-mist bg-paper text-slate hover:border-forest/40"
              }`}
            >
              {d || "All"}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate">
          <span className="text-xs font-bold uppercase tracking-[0.18em]">Sort</span>
          <select
            value={filters.sort}
            onChange={(e) => set({ sort: e.target.value as SortOption })}
            className={selectClasses}
          >
            {sortOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-slate">
          <span className="text-xs font-bold uppercase tracking-[0.18em]">Time</span>
          <select
            value={filters.time}
            onChange={(e) => set({ time: e.target.value as TimeOption })}
            className={selectClasses}
          >
            {timeOptions.map((t) => (
              <option key={t.value || "any"} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
