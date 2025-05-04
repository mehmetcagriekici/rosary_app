import Link from "next/link";

export function PrayerCard({
  title,
  content,
  href,
}: {
  title: string;
  content: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-5 py-4 shadow hover:bg-accentGold/20"
    >
      <h2 className="font-macondo text-lg text-textMain leading-snug">
        {title}
      </h2>
      <p className="text-sm text-textSoft leading-relaxed opacity-80 line-clamp-3 hover:text-textMain">
        {content}
      </p>
    </Link>
  );
}
