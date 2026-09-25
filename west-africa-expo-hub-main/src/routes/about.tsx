import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Counter } from "@/components/site/Reveal";
import { OBJECTIVES, ZONES } from "@/lib/waae-content";
import solarImage from "@/assets/solar-farm.jpg";
import hallImage from "@/assets/expo-hall.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WAAEE Expo 2027 | West Africa Agricultural & Energy Expo" },
      {
        name: "description",
        content:
          "About WAAEE Expo: a regional trade platform in Lagos connecting agriculture, energy, technology and investment across West Africa, 17–19 March 2027.",
      },
      { property: "og:title", content: "About WAAEE Expo 2027" },
      {
        property: "og:description",
        content:
          "A regional trade platform connecting agriculture, energy, technology and investment across West Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About the Expo"
          title="A Regional Platform for Productive Growth"
          intro="WAAEE Expo brings together the complete agricultural and energy value chains to accelerate trade, investment and industrial cooperation across West Africa."
          image={hallImage}
          imageAlt="Visitors walking the aisles of an agricultural machinery trade fair"
        />

        <section className="bg-stone py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div>
              <Reveal>
                <p className="eyebrow text-primary">The Expo</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                  Three Trade Days in Lagos
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Over three trade days, exhibitors present machinery, inputs, processing systems and
                  energy infrastructure to buyers responsible for procurement across the region. It is
                  a focused marketplace for technology providers, producers, financiers and public
                  institutions.
                </p>
              </Reveal>
              <Reveal delay={200}>
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
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-charcoal py-24 text-white lg:py-32">
          <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary-light">On the Floor</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)]">
                Special Feature Zones
              </h2>
            </Reveal>
            <ul className="stage mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ZONES.map(({ Icon, name, text }, i) => (
                <Reveal as="li" key={name} delay={(i % 4) * 80}>
                  <div className="depth-tile h-full border-t-2 border-primary-light bg-white/[0.045] p-8">
                    <Icon className="h-7 w-7 text-primary-light" aria-hidden />
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

        <section className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Mandate</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Key Objectives
              </h2>
            </Reveal>
            <ol className="mt-14 border-l-2 border-primary/25">
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
      </main>
      <SiteFooter />
    </div>
  );
}
