import { CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { EVENT } from "@/lib/waae-content";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-charcoal pb-16 pt-36 lg:pb-20">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.2016_0_0/0.94)_0%,oklch(0.2016_0_0/0.8)_45%,oklch(0.2016_0_0/0.35)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines-dark opacity-40" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow text-primary-light">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="section-title mt-6 text-[clamp(2.25rem,6vw,4.5rem)] text-white">{title}</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">{intro}</p>
        </Reveal>
        <Reveal delay={200}>
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
      </div>
    </section>
  );
}
