//imports
import Image from "next/image";
import Link from "next/link";
import rosaryImage from "../../public/freepick-rosary.jpg";

export default function HomePage() {
  return (
    <main className="min-h-screen text-textMain flex flex-col items-center justify-center gap-10">
      {/*Image on larger screens*/}
      <div className="hidden md:flex w-44 bg-bgMain flex-col gap-4">
        <Image
          src={rosaryImage}
          alt="praying hands holding a rosary"
          className="opacity-80 rounded-full"
        />
      </div>

      <div className="text-sm text-gray-500 italic font-marcellus">
        “Blessed is the fruit of thy womb.” — Luke 1:42
      </div>

      <div className="w-4/5 max-w-xl text-center flex flex-col justify-center items-center gap-10">
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
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {/*Primary*/}
          <Link
            href="/rosary/start"
            className="block w-full bg-bgAlt text-textSoft font-medium font-work py-3 px-6 rounded-2xl border-2 border-redMuted hover:shadow hover:border-greenMuted hover:bg-bgOverlay hover:text-textMain transition-all duration-100 ease-out"
          >
            Start Today&apos;s Rosary
          </Link>
          {/*Secondary*/}
          <Link
            href="/mystery-set"
            className="block w-full bg-bgSub text-textSoft font-medium font-work py-3 px-6 rounded-2xl shadow hover:bg-blueFaded hover:text-textMain transition-all duration-75 ease-out"
          >
            Browse Mystery Sets
          </Link>
          {/*Secondary*/}
          <Link
            href="/prayer"
            className="block w-full bg-bgSub text-textSoft font-medium font-work py-3 px-6 rounded-2xl shadow hover:bg-blueFaded hover:text-textMain transition-all duration-75 ease-out"
          >
            Browse All Prayers
          </Link>
        </div>
      </div>

      <footer className="fixed bottom-3">
        <Link
          className="text-redMuted hover:text-indigoAsh"
          target="blank"
          href="https://www.freepik.com/free-vector/praying-hands-holding-rosary-beads_8135897.htm"
        >
          Image by dgim-studio on Freepik
        </Link>
      </footer>
    </main>
  );
}
