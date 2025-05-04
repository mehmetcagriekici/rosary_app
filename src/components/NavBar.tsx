import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav className="w-full bg-bgMain text-textSoft py-4 border-b border-[color:var(--accent-stone)]/10">
      <div className="max-w-4xl mx-auto px-4 flex justify-center gap-6 text-sm font-work">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/prayer">Prayers</NavItem>
        <NavItem href="/mystery-set">Mystery Sets</NavItem>
        <NavItem href="/rosary/start">Rosary</NavItem>
      </div>
    </nav>
  );
}
