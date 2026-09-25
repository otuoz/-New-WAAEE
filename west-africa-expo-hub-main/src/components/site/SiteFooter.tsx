import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Twitter, Instagram, Phone, Mail, Globe, MapPin } from "lucide-react";

const QUICK = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Book A Stand", to: "/book-a-stand" },
  { label: "Register To Visit", to: "/register-to-visit" },
  { label: "Become A Partner", to: "/become-a-partner" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "About the Organizer", to: "/about-organizer" },
] as const;

const SOCIAL = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Facebook", Icon: Facebook },
  { label: "X", Icon: Twitter },
  { label: "Instagram", Icon: Instagram },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white">
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/waae-emblem.png"
                alt="WAAEE Expo emblem"
                loading="lazy"
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 object-contain"
              />
              <span>
                <span className="block font-display text-lg font-extrabold uppercase tracking-tight">
                  WAAEE
                </span>
                <span className="block font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  West Africa Agricultural &amp; Energy Expo
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              A regional trade platform connecting agriculture, energy, technology and investment
              across West Africa.
            </p>
            <div className="mt-8 space-y-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              <p>17–19 March 2027</p>
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <span className="normal-case tracking-normal">
                  Blue Roof Event Centre, LTV 8 Premises, Lateef Jakande Road, Alausa Ikeja, Lagos,
                  Nigeria
                </span>
              </p>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Navigation
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {QUICK.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/65 transition-colors duration-300 hover:text-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Contact
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href="tel:+2347063650022" className="hover:text-secondary">
                  +234 706 365 0022
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href="tel:+2347035697549" className="hover:text-secondary">
                  +234 703 569 7549
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href="mailto:waaeenig@gmail.com" className="break-all hover:text-secondary">
                  waaeenig@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href="https://www.waaee.com.ng" className="hover:text-secondary">
                  www.waaee.com.ng
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {SOCIAL.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="https://www.waaee.com.ng"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center border border-white/20 text-white/70 transition-colors duration-300 hover:border-secondary hover:text-secondary"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt 4 border-t border-white/10">
            <p className="text-xs text-white/40">
              Website crafted by {" "}
              <a
                href="https://otuoze.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors duration-200 hover:text-primary-light"
              >
                Otuoze
              </a>
            </p>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 West Africa Agricultural &amp; Energy Expo</p>
          <p>Lagos · Nigeria · 17–19 March 2027</p>
        </div>
      </div>
    </footer>
  );
}
