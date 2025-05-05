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
    <main className="text-textMain flex flex-col justify-center items-center p-5 md:p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-eagleLake tracking-wide text-center">
          Prayers
        </h1>

        <p className="text-textSoft text-sm font-marcellus text-center opacity-80">
          Browse the core prayers used throughout the Holy Rosary.
        </p>
      </div>

      {/*Displays both the prayers list and the search filter*/}
      <PrayerSearchList prayers={prayers} />
    </main>
  );
}
