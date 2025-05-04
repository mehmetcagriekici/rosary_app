//imports
import prisma from "@/lib/prisma";
import { PrayerSearchList } from "@/components/PrayerSearchlist";
import { Prayer } from "@/utils/types";

export default async function PrayersPage() {
  //get all the prayers existing in the database
  const prayers: Prayer[] = await prisma.prayer.findMany({
    orderBy: { id: "asc" },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });

  return (
    <main className="min-h-screen bg-bgMain text-textMain px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-eagleLake tracking-wide">Prayers</h1>

          <p className="text-textSoft text-sm font-marcellus opacity-80">
            Browse the core prayers used throughout the Holy Rosary.
          </p>
        </div>
        <PrayerSearchList prayers={prayers} />
      </div>
    </main>
  );
}
