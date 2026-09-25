import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Book A Stand", to: "/book-a-stand" },
  { label: "Register To Visit", to: "/register-to-visit" },
  { label: "Become A Partner", to: "/become-a-partner" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "About the Organizer", to: "/about-organizer" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-charcoal/95 backdrop-blur"
          : "border-b border-white/10 bg-charcoal/40"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/waae-emblem.png"
            alt="WAAEE Expo emblem"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-extrabold uppercase tracking-tight text-white">
              WAAEE 
            </span>
            <span className="block truncate font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
              West Africa · 2027
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary-light" }}
              className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors duration-300 hover:text-primary-light"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book-a-stand"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book A Stand <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center border border-white/20 text-white xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-charcoal px-5 pb-6 pt-2 xl:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white/80"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book-a-stand"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-4 font-display text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground"
          >
            Exhibit Now <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </nav>
      )}
    </header>
  );
}
