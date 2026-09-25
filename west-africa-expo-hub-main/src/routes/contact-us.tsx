import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Globe, MapPin, CalendarDays } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/waae-content";
import hallImage from "@/assets/expo-hall.jpeg";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | WAAEE Expo 2027, Lagos" },
      {
        name: "description",
        content:
          "Contact the WAAEE Expo organising team: +234 706 365 0022, +234 703 569 7549, waaeenig@gmail.com. Blue Roof Event Centre, Alausa Ikeja, Lagos.",
      },
      { property: "og:title", content: "Contact WAAEE Expo 2027" },
      {
        property: "og:description",
        content: "Speak to the WAAEE Expo organising team about stands, sponsorship and visitor access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const CONTACTS = [
  { Icon: Phone, label: "Telephone", value: "234 806 614 3724", href: "tel:2348066143724" },
  { Icon: Phone, label: "Telephone", value: "+234 703 569 7549", href: "tel:+2347035697549" },
  { Icon: Mail, label: "Email", value: "waaeenig@gmail.com", href: "mailto:waaeenig@gmail.com" },
  { Icon: Globe, label: "Website", value: "www.waaee.com.ng", href: "https://www.waaee.com.ng" },
];

function ContactPage() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Contact Us"
          intro="The organising team can advise on stand sizes, demonstration areas, pavilion participation, sponsorship packages and visitor registration."
          image={hallImage}
          imageAlt="Visitors walking the aisles of an agricultural machinery trade fair"
        />

        <section className="bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-10">
            <div>
              <Reveal>
                <p className="eyebrow text-white/70">Organising Team</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)]">
                  Talk to the Expo Team
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
                  Enquiries are answered by telephone, email and WhatsApp during Lagos business hours.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center gap-3 bg-white px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary transition-transform duration-400 hover:-translate-y-1"
                >
                  Chat on WhatsApp
                </a>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <ul className="divide-y divide-white/15 border-y border-white/15">
                {CONTACTS.map(({ Icon, label, value, href }) => (
                  <li key={value}>
                    <a
                      href={href}
                      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 py-7 transition-colors duration-300 hover:text-white"
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

        <section className="bg-stone py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 lg:grid-cols-2 lg:px-10">
            <Reveal>
              <div className="h-full border-t-2 border-primary bg-card p-10">
                <MapPin className="h-7 w-7 text-primary" aria-hidden />
                <h2 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Venue
                </h2>
                <address className="mt-4 space-y-1 font-display text-xl font-bold uppercase leading-snug tracking-tight text-charcoal not-italic lg:text-2xl">
                  <p>Blue Roof Event Centre</p>
                  <p>LTV 8 Premises</p>
                  <p>Lateef Jakande Road</p>
                  <p>Alausa Ikeja</p>
                  <p>Lagos, Nigeria</p>
                </address>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full border-t-2 border-primary bg-card p-10">
                <CalendarDays className="h-7 w-7 text-primary" aria-hidden />
                <h2 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Dates
                </h2>
                <p className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-charcoal lg:text-4xl">
                  17–19 March 2027
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Three trade days at Blue Roof Event Centre, Alausa Ikeja, Lagos.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
