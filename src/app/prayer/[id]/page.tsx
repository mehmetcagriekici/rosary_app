//imports
import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

type PrayerPageProps = {
  params: { id: string };
};

export default async function PrayerPage({ params }: PrayerPageProps) {
  const currentPrayer = await prisma.prayer.findUnique({
    where: { id: +params.id },
  });

  if (!currentPrayer) return notFound();

  const allPrayers = await prisma.prayer.findMany({
    orderBy: { id: "asc" },
    select: { id: true, title: true },
  });

  const currentIndex = allPrayers.findIndex((p) => p.id === +params.id);
  const prev = allPrayers[currentIndex - 1];
  const next = allPrayers[currentIndex + 1];

  return (
    <main className="min-h-screen bg-bgMain text-textMain px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-eagleLake tracking-wide text-center">
          {currentPrayer.title}
        </h1>

        <div className="space-y-5 text-lg font-marcellus leading-relaxed text-textMain whitespace-pre-line">
          {currentPrayer.content}
        </div>

        {/* Inner Navigation */}
        <div className="pt-12 border-t border-textSoft/10 text-sm flex justify-between text-textSoft font-work">
          {prev ? (
            <Link
              href={`/prayer/${prev.id}`}
              className="hover:text-textMain transition"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/prayer/${next.id}`}
              className="hover:text-textMain transition text-right"
            >
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}
