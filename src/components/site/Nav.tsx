import avatar from "@/assets/hero-portrait.jpg";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="liquid-nav flex items-center gap-2 rounded-full p-2 pl-3">
        <Link to="/" hash="top" className="flex items-center gap-2 pr-3">
          <img
            src={avatar}
            alt="Alson Chong"
            width={1280}
            height={1600}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium">alsonchong</span>
        </Link>
        <div className="hidden items-center sm:flex">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="liquid-nav-link rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/"
          hash="contact"
          className="liquid-nav-cta rounded-full px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
