import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type PrayerPageProps = {
  params: { id: number };
};

export default async function PrayerPage({ params }: PrayerPageProps) {
  const prayer = await prisma.prayer.findUnique({
    where: { id: +params.id },
  });

  if (!prayer) return notFound();

  return (
    <main className="min-h-screen bg-bgMain text-textMain px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-eagleLake tracking-wide text-center">
          {prayer.title}
        </h1>
        <div className="space-y-5 text-lg font-marcellus leading-relaxed text-textMain whitespace-pre-line">
          {prayer.content}
        </div>
      </div>
    </main>
  );
}
