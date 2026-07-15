"use client";

import React, { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import FilterBar, { type FilterState } from "./FilterBar";
import OrigamiGrid from "./OrigamiGrid";
import { origamiData, parseMinutes, type OrigamiDifficulty } from "../data/origami";

type Props = {
  /** Locks the difficulty filter to a fixed value (used by /origami/easy, /medium, /hard). */
  lockedDifficulty?: OrigamiDifficulty;
};

const timeBucketMatches = (minutes: number, bucket: string) => {
  if (!bucket) return true;
  if (bucket === "5") return minutes <= 7;
  if (bucket === "10") return minutes > 7 && minutes <= 15;
  if (bucket === "20") return minutes > 15 && minutes <= 25;
  if (bucket === "30") return minutes > 25;
  return true;
};

export default function OrigamiLibrary({ lockedDifficulty }: Props) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    difficulty: lockedDifficulty ?? "",
    sort: "Newest",
    time: "",
  });

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    let items = origamiData.filter((item) => {
      if (lockedDifficulty && item.difficulty !== lockedDifficulty) return false;
      if (filters.difficulty && item.difficulty !== filters.difficulty) return false;
      if (!timeBucketMatches(parseMinutes(item.estimatedTime), filters.time)) return false;
      if (
        q &&
        !(
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.difficulty.toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });

    items = [...items];
    switch (filters.sort) {
      case "Alphabetical":
        items.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Shortest Time":
        items.sort((a, b) => parseMinutes(a.estimatedTime) - parseMinutes(b.estimatedTime));
        break;
      case "Longest Time":
        items.sort((a, b) => parseMinutes(b.estimatedTime) - parseMinutes(a.estimatedTime));
        break;
      case "Popular":
        // Original catalog order approximates "classic / most-tried" tutorials first.
        break;
      case "Newest":
      default:
        items.reverse();
        break;
    }

    return items;
  }, [query, filters, lockedDifficulty]);

  return (
    <div>
      <div className="mb-6 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <FilterBar
        filters={filters}
        onChange={(next) =>
          setFilters(lockedDifficulty ? { ...next, difficulty: lockedDifficulty } : next)
        }
        hideDifficulty={Boolean(lockedDifficulty)}
      />

      <p className="mt-6 mb-4 text-sm text-slate">
        Showing <span className="font-semibold text-ink">{results.length}</span> tutorial
        {results.length === 1 ? "" : "s"}
      </p>

      <OrigamiGrid items={results} />
    </div>
  );
}
