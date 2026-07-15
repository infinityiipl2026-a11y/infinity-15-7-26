"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Search tutorials, categories, or difficulty..."}
        className="w-full rounded-full border border-mist bg-paper py-3.5 pl-12 pr-5 text-ink shadow-sm transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-forest"
      />
    </div>
  );
}
