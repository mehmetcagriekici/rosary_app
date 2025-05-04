import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bgMain text-textMain flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center space-y-10">
        {/* Symbolic cross ornament */}

        {/* Title */}
        <h1 className="text-4xl font-eagleLake tracking-wide text-textMain">
          Pray the Holy Rosary
        </h1>

        {/* Subtitle */}
        <p className="text-base font-macondo text-textSoft leading-relaxed">
          A guided journey through the sacred mysteries of Christ and His
          Blessed Mother.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/rosary/start"
            className="block w-full bg-bgSub text-textSoft font-medium font-work py-3 px-6 rounded-2xl shadow hover:bg-bgMain hover:text-accentStone transition-all"
          >
            Start Today&apos;s Rosary
          </Link>

          <Link
            href="/mystery-set"
            className="block w-full bg-bgSub text-textSoft font-medium font-work py-3 px-6 rounded-2xl shadow hover:bg-bgMain hover:text-accentStone transition-all"
          >
            Browse Mystery Sets
          </Link>

          <Link
            href="/prayer"
            className="block w-full bg-bgSub text-textSoft font-medium font-work py-3 px-6 rounded-2xl shadow hover:bg-bgMain hover:text-accentStone transition-all"
          >
            Browse All Prayers
          </Link>
        </div>

        {/* Optional spiritual quote */}
        <div className="pt-6 text-sm text-gray-500 italic font-marcellus">
          “Blessed is the fruit of thy womb.” — Luke 1:42
        </div>
      </div>
    </main>
  );
}
