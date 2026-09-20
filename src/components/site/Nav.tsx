import avatar from "@/assets/hero-portrait.jpg";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-2 rounded-full border border-border bg-card/80 p-2 pl-3 shadow-pill backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 pr-3">
          <img
            src={avatar}
            alt="Alson Chong"
            width={1280}
            height={1600}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium">alsonchong</span>
        </a>
        <div className="hidden items-center sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
