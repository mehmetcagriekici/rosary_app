"use client";

//imports
import { useState } from "react";
import { PrayerCard } from "@/components/PrayerCard";
import { Prayer } from "@/utils/types";

export function PrayerSearchList({ prayers }: { prayers: Prayer[] }) {
  //search query
  const [query, setQuery] = useState("");

  //search filter
  const filtered = query.trim()
    ? prayers.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.content.toLowerCase().includes(query.toLowerCase())
      )
    : prayers;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search prayers..."
        className="w-full p-1 text-md font-marcellus bg-bgAlt text-textMain placeholder-textFaint border border-borderSoft rounded-md focus:outline-none lg:w-3/5"
      />
      {/*Displayed prayers*/}
      <div className="w-full flex flex-col justify-center items-center gap-10 lg:w-3/5">
        {filtered.length > 0 ? (
          filtered.map((prayer) => (
            <PrayerCard
              key={prayer.id}
              title={prayer.title}
              content={prayer.content}
              href={`/prayer/${prayer.id}`}
            />
          ))
        ) : (
          <p className="text-sm font-marcellus text-textSoft opacity-70 text-center">
            No prayers found.
          </p>
        )}
      </div>
    </div>
  );
}
