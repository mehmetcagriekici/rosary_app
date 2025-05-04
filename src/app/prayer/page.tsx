import prisma from "@/lib/prisma"; // Adjust path if needed
import { PrayerCard } from "@/components/PrayerCard";

export default async function PrayersPage() {
  const prayers = await prisma.prayer.findMany({
    orderBy: { title: "asc" },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });

  return (
    <main className="min-h-screen bg-bgMain text-textMain px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-1">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-eagleLake tracking-wide">Prayers</h1>
          <p className="text-textSoft text-sm font-marcellus opacity-80">
            Browse the core prayers used throughout the Holy Rosary.
          </p>
        </div>

        <div className="space-y-6">
          {prayers.map((prayer) => (
            <PrayerCard
              key={prayer.id}
              title={prayer.title}
              content={prayer.content}
              href={`/prayer/${prayer.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
