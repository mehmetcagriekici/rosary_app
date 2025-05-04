import Link from "next/link";

export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-textMain transition-colors duration-150"
    >
      {children}
    </Link>
  );
}
