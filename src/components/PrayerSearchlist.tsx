"use client";

//imports
import { useState } from "react";
import { PrayerCard } from "@/components/PrayerCard";
import { Prayer } from "@/utils/types";

export function PrayerSearchList({ prayers }: { prayers: Prayer[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? prayers.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.content.toLowerCase().includes(query.toLowerCase())
      )
    : prayers;

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search prayers..."
        className="w-full px-4 py-2 text-sm font-marcellus bg-bgAlt text-textMain placeholder-textFaint border border-[color:var(--color-borderSoft)] rounded-md shadow-inner focus:outline-none focus:ring-0"
      />

      {/*Displayed prayers*/}
      {filtered.length > 0 ? (
        <div className="space-y-5">
          {filtered.map((prayer) => (
            <PrayerCard
              key={prayer.id}
              title={prayer.title}
              content={prayer.content}
              href={`/prayer/${prayer.id}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm font-marcellus text-textSoft opacity-70 text-center">
          No prayers found.
        </p>
      )}
    </div>
  );
}
