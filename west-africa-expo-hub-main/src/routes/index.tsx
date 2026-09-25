import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, CalendarDays, MapPin, Sun, Phone, Mail, Globe } from "lucide-react";
import {
  EVENT,
  SECTORS,
  ZONES,
  VISITORS,
  WHY_EXHIBIT,
  OBJECTIVES,
} from "@/lib/waae-content";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Counter } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-harvest.jpeg";
import solarImage from "@/assets/solar-farm.jpeg";
import hallImage from "@/assets/expo-hall.jpeg";
import logisticsImage from "@/assets/logistics.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WAAEE Expo 2027 | West Africa Agricultural & Energy Expo, Lagos" },
      {
        name: "description",
        content:
          "WAAEE Expo, 17–19 March 2027, Lagos, Nigeria. West Africa's trade platform for agriculture, energy, technology and investment. Exhibit, sponsor or visit.",
      },
      { property: "og:title", content: "WAAEE Expo 2027 | West Africa Agricultural & Energy Expo" },
      {
        property: "og:description",
        content:
          "Where agriculture meets energy, technology and investment. 17–19 March 2027, Blue Roof Event Centre, Alausa Ikeja, Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});


function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setOffset(window.scrollY);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="top" className="bg-background">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-charcoal pb-16 pt-36 lg:min-h-screen lg:pb-24">
          <div
            className="absolute inset-0 -z-20 will-change-transform"
            style={{ transform: `translate3d(0, ${offset * 0.18}px, 0) scale(1.08)` }}
            aria-hidden
          >
            <img
              src={heroImage}
              alt="Combine harvester working a grain field at sunset in West Africa"
              width={1920}
              height={1088}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.2016_0_0/0.94)_0%,oklch(0.2016_0_0/0.78)_42%,oklch(0.2016_0_0/0.25)_100%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 -z-10 grid-lines-dark opacity-40" aria-hidden />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary-light">West Africa Agricultural &amp; Energy Expo</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="section-title mt-6 text-[clamp(2.75rem,9vw,7rem)] text-white">
                WAAEE
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl font-display text-[clamp(1.15rem,2.6vw,2rem)] font-semibold leading-tight text-white/90">
                Where Agriculture Meets Energy, Technology &amp; Investment
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-l-2 border-primary-light pl-5">
                <p className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
                  <CalendarDays className="h-5 w-5 text-primary-light" aria-hidden />
                  {EVENT.heroDates}
                </p>
                <p className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
                  <MapPin className="h-5 w-5 text-primary-light" aria-hidden />
                  {EVENT.heroLocation}
                </p>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/book-a-stand"
                  className="inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-400 hover:-translate-y-1"
                >
                  Book A Stand <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/become-a-partner"
                  className="inline-flex items-center justify-center gap-3 border border-white/35 px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-400 hover:border-primary-light hover:text-primary-light"
                >
                  Become A Partner
                </Link>
              </div>
            </Reveal>
            <Reveal delay={420}>
              <a
                href="#about"
                className="mt-14 inline-flex items-center gap-4 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-primary-light"
              >
                <span className="grid h-10 w-10 place-items-center border border-white/25">
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </span>
                Explore the exhibition
              </a>
            </Reveal>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="about" className="bg-stone py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div>
              <Reveal>
                <p className="eyebrow text-primary">The Expo</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                  A Regional Platform for Productive Growth
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  WAAEE Expo brings together the complete agricultural and energy value chains to
                  accelerate trade, investment and industrial cooperation across West Africa. It is a
                  focused marketplace for technology providers, producers, financiers and public
                  institutions.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Over three trade days in Lagos, exhibitors present machinery, inputs, processing
                  systems and energy infrastructure to buyers responsible for procurement across the
                  region.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <dl className="mt-12 grid grid-cols-3 gap-6 border-y border-border py-8">
                  {[
                    { v: 15, l: "Industry Sectors" },
                    { v: 8, l: "Feature Zones" },
                    { v: 3, l: "Trade Days" },
                  ].map((s) => (
                    <div key={s.l} className="border-l-2 border-primary pl-4">
                      <dt className="sr-only">{s.l}</dt>
                      <dd>
                        <Counter
                          value={s.v}
                          className="block font-display text-4xl font-extrabold text-primary lg:text-5xl"
                        />
                        <span className="mt-2 block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {s.l}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="stage">
                <div className="relative depth-tile">
                  <img
                    src={solarImage}
                    alt="Engineers inspecting a solar array beside farmland"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="panel-shadow w-full object-cover"
                  />
                  <div className="relative z-10 -mt-16 ml-0 w-[86%] border-t-4 border-secondary bg-primary p-8 panel-shadow sm:-mt-24 sm:ml-[-2rem] lg:w-[78%]">
                    <Sun className="h-7 w-7 text-secondary" aria-hidden />
                    <p className="mt-5 font-display text-lg font-bold uppercase leading-snug tracking-tight text-primary-foreground">
                      Energy access is essential infrastructure for modern agriculture.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTORS */}
        <section id="sectors" className="relative bg-background py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow text-primary">Exhibition Profile</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                  Scope of Exhibit
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  The exhibition floor is organised by sector so buyers can locate technology,
                  equipment and services with precision.
                </p>
              </Reveal>
            </div>

            <ul className="stage mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map(({ Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={(i % 3) * 90} className="bg-background">
                  <article className="depth-card group h-full border border-transparent bg-card p-8 hover:border-primary/20 lg:p-10">
                    <span className="grid h-14 w-14 place-items-center bg-stone text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-7 font-display text-base font-bold uppercase leading-snug tracking-tight text-charcoal">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                    <span className="mt-6 block h-0.5 w-10 bg-secondary transition-[width] duration-500 group-hover:w-20" />
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* FEATURE ZONES */}
        <section id="zones" className="relative overflow-hidden bg-charcoal py-24 text-white lg:py-32">
          <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute -right-24 top-0 hidden h-full w-1/3 bg-primary/20 lg:block"
            style={{ transform: `translate3d(0, ${Math.min(offset * 0.02, 80)}px, 0) skewX(-8deg)` }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow text-secondary">On the Floor</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)]">
                  Special Feature Zones
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-base leading-relaxed text-white/65 lg:text-lg">
                  Eight curated zones group exhibitors by theme, giving delegations and buyers a clear
                  route through the halls.
                </p>
              </Reveal>
            </div>

            <ul className="stage mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ZONES.map(({ Icon, name, text }, i) => (
                <Reveal as="li" key={name} delay={(i % 4) * 80}>
                  <div className="depth-tile h-full border-t-2 border-secondary bg-white/[0.045] p-8">
                    <Icon className="h-7 w-7 text-secondary" aria-hidden />
                    <h3 className="mt-8 font-display text-sm font-bold uppercase leading-snug tracking-[0.06em]">
                      {name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY EXHIBIT */}
        <section id="why-exhibit" className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
              <div>
                <Reveal>
                  <p className="eyebrow text-primary">Exhibitors</p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                    Why Exhibit at WAAEE
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={140}>
                <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Exhibitors include equipment manufacturers, input suppliers, processors, energy
                  developers, technology firms, financial institutions, trade bodies and government
                  agencies.
                </p>
              </Reveal>
            </div>

            <div className="stage mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WHY_EXHIBIT.map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={(i % 3) * 90}>
                  <article className="depth-card h-full bg-card p-9 panel-shadow">
                    <div className="flex items-start gap-5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center bg-primary text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="min-w-0 font-display text-base font-bold uppercase leading-snug tracking-tight text-charcoal">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-16 grid items-stretch gap-px bg-border md:grid-cols-[1.2fr_1fr]">
                <img
                  src={hallImage}
                  alt="Visitors walking the aisles of an agricultural machinery trade fair"
                  loading="lazy"
                  width={1600}
                  height={912}
                  className="h-full w-full object-cover"
                />
                <div className="flex flex-col justify-center bg-primary p-10 lg:p-14">
                  <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-primary-foreground lg:text-2xl">
                    Stand space, demonstration areas and sponsorship packages are allocated on a
                    first-confirmed basis.
                  </p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex w-fit items-center gap-3 bg-secondary px-7 py-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground transition-transform duration-400 hover:-translate-y-1"
                  >
                    Request the exhibitor pack <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VISITORS */}
        <section id="visitors" className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow text-primary">Trade Audience</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                  Who Visits the Expo
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Attendance is trade-focused. Scroll through the visitor groups invited through
                  associations, state delegations and international buyer programmes.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="stage no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 lg:px-10">
            {VISITORS.map(({ Icon, name, text }, i) => (
              <article
                key={name}
                className="depth-tile w-[260px] shrink-0 snap-start border border-border bg-card p-8 sm:w-[300px]"
              >
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-7 h-7 w-7 text-primary" aria-hidden />
                <h3 className="mt-6 font-display text-base font-bold uppercase leading-snug tracking-tight text-charcoal">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
            <div className="w-1 shrink-0" aria-hidden />
          </div>
        </section>

        {/* OBJECTIVES */}
        <section id="objectives" className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow text-primary">Mandate</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                  Key Objectives
                </h2>
              </Reveal>
            </div>

            <ol className="mt-16 border-l-2 border-primary/25">
              {OBJECTIVES.map((item, i) => (
                <Reveal as="li" key={item} delay={(i % 4) * 60}>
                  <div className="group relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-6 pl-6 transition-colors duration-500 hover:bg-card sm:gap-8 sm:pl-10">
                    <span
                      className="absolute -left-[7px] top-9 h-3 w-3 bg-primary transition-transform duration-500 group-hover:scale-125"
                      aria-hidden
                    />
                    <span className="font-display text-2xl font-extrabold tabular-nums text-secondary sm:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 self-center text-base leading-relaxed text-charcoal lg:text-lg">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="relative isolate overflow-hidden bg-charcoal py-28 lg:py-40">
          <div
            className="absolute inset-0 -z-20 will-change-transform"
            style={{ transform: `translate3d(0, ${(offset % 4000) * -0.03}px, 0) scale(1.12)` }}
            aria-hidden
          >
            <img
              src={logisticsImage}
              alt=""
              loading="lazy"
              width={1280}
              height={864}
              className="h-full w-full object-cover opacity-35"
            />
          </div>
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.2016_0_0/0.92),oklch(0.2016_0_0/0.78))]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 -z-10 grid-lines-dark opacity-40" aria-hidden />

          <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="stage">
              <Reveal>
                <div className="depth-tile relative mx-auto max-w-4xl border-t-4 border-secondary bg-charcoal/80 p-10 text-center panel-shadow lg:p-20">
                  <p className="eyebrow justify-center text-secondary">Strategic Positioning</p>
                  <p className="section-title mt-8 text-[clamp(1.7rem,4.6vw,3.75rem)] text-white">
                    Powering Agriculture.
                    <span className="block text-secondary">Energizing Industry.</span>
                    Growing West Africa.
                  </p>
                  <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/65">
                    WAAEE Expo is positioned as the meeting point where productive agriculture,
                    reliable energy and long-term capital are brought into the same room.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EVENT INFO */}
        <section id="event-info" className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Event Information</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Dates, Venue &amp; Access
              </h2>
            </Reveal>

            <div className="stage mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <Reveal delay={100}>
                <div className="depth-tile h-full border-t-2 border-primary bg-stone p-10">
                  <CalendarDays className="h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Dates
                  </h3>
                  <p className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-charcoal lg:text-4xl">
                    17–19 March 2027
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    Three trade days. Registration opens ahead of the exhibition for exhibitors,
                    delegations and trade visitors.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="depth-tile h-full border-t-2 border-secondary bg-stone p-10">
                  <MapPin className="h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Venue
                  </h3>
                  <address className="mt-4 space-y-1 font-display text-xl font-bold uppercase leading-snug tracking-tight text-charcoal not-italic lg:text-2xl">
                    <p>Blue Roof Event Centre</p>
                    <p>LTV 8 Premises</p>
                    <p>Lateef Jakande Road</p>
                    <p>Alausa Ikeja</p>
                    <p>Lagos, Nigeria</p>
                  </address>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-10">
            <div>
              <Reveal>
                <p className="eyebrow text-secondary">Contact &amp; Sponsorship</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)]">
                  Secure Your Stand or Sponsorship
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
                  The organising team can advise on stand sizes, demonstration areas, pavilion
                  participation and sponsorship packages across the three trade days.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:waaeenig@gmail.com?subject=Exhibitor%20enquiry%20-%20WAAEE%20Expo%202027"
                    className="inline-flex items-center justify-center gap-3 bg-secondary px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground transition-transform duration-400 hover:-translate-y-1"
                  >
                    Become an Exhibitor <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href="mailto:waaeenig@gmail.com?subject=Sponsorship%20enquiry%20-%20WAAEE%20Expo%202027"
                    className="inline-flex items-center justify-center gap-3 border border-white/40 px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-400 hover:border-secondary hover:text-secondary"
                  >
                    Sponsorship Opportunities
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <ul className="divide-y divide-white/15 border-y border-white/15">
                {[
                  { Icon: Phone, label: "Telephone", value: "+234 706 365 0022", href: "tel:+2347063650022" },
                  { Icon: Phone, label: "Telephone", value: "+234 703 569 7549", href: "tel:+2347035697549" },
                  { Icon: Mail, label: "Email", value: "waaeenig@gmail.com", href: "mailto:waaeenig@gmail.com" },
                  { Icon: Globe, label: "Website", value: "www.waaee.com.ng", href: "https://www.waaee.com.ng" },
                ].map(({ Icon, label, value, href }) => (
                  <li key={value}>
                    <a
                      href={href}
                      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 py-7 transition-colors duration-300 hover:text-secondary"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/25">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60">
                          {label}
                        </span>
                        <span className="mt-1 block truncate font-display text-lg font-bold tracking-tight">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
