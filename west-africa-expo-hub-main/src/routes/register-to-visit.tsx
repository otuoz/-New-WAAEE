import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ExpoForm } from "@/components/site/ExpoForm";
import { VISITORS, WHATSAPP_URL } from "@/lib/waae-content";
import logisticsImage from "@/assets/logistics.jpeg";

export const Route = createFileRoute("/register-to-visit")({
  head: () => ({
    meta: [
      { title: "Register To Visit | WAAEE Expo 2027, Lagos" },
      {
        name: "description",
        content:
          "Register to visit WAAEE Expo, 17–19 March 2027 at Blue Roof Event Centre, Alausa Ikeja, Lagos. Trade visitor access for buyers, investors and delegations.",
      },
      { property: "og:title", content: "Register To Visit WAAEE Expo 2027" },
      {
        property: "og:description",
        content:
          "Trade visitor registration for WAAEE Expo, 17–19 March 2027, Blue Roof Event Centre, Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterToVisitPage,
});

function RegisterToVisitPage() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Trade Visitors"
          title="Register To Visit"
          intro="Attendance is trade-focused. Visitor passes are issued to buyers, delegations and professionals working across the agricultural and energy value chains."
          image={logisticsImage}
          imageAlt="Cargo trucks and refrigerated containers at a logistics depot"
        />

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Trade Audience</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Who Visits the Expo
              </h2>
            </Reveal>
          </div>

          <div className="stage no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 lg:px-10">
            {VISITORS.map(({ Icon, name, text }, i) => (
              <article
                key={name}
                className="depth-tile w-[260px] shrink-0 snap-start border border-border bg-card p-8 sm:w-[300px]"
              >
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
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

        <section className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Plan Your Visit</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Dates, Venue &amp; Access
              </h2>
            </Reveal>

            <div className="stage mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <Reveal delay={100}>
                <div className="depth-tile h-full border-t-2 border-primary bg-card p-10">
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
                <div className="depth-tile h-full border-t-2 border-primary bg-card p-10">
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

            <Reveal delay={140}>
              <div className="mt-14 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:waaeenig@gmail.com?subject=Visitor%20registration%20-%20WAAEE%20Expo%202027"
                  className="inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-400 hover:-translate-y-1"
                >
                  Register your attendance <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-charcoal/25 px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition-colors duration-400 hover:border-primary hover:text-primary"
                >
                  Register a delegation
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="visitor-form" className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Visitor Registration</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Register Your Attendance
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Complete the form below and the registration team will confirm your visitor pass and
                send the visit details ahead of the exhibition.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12">
                <ExpoForm
                  formType="visitor"
                  nameFields={["fullName"]}
                  submitLabel="Submit visitor registration"
                  googleForm={{
                    action:
                      "https://docs.google.com/forms/d/e/1FAIpQLSeEf_vakImidheyZ8cVl4RPTdI0EihyrWtySMFnYar7ESwfjg/formResponse",
                    fields: {
                      fullName: "entry.49880690",
                      phone: "entry.1017019530",
                      email: "entry.1805441645",
                      address: "entry.1532769774",
                      jobTitle: "entry.473453394",
                      products: "entry.1504830164",
                      visitedBefore: "entry.306355377",
                      attendance: "entry.473131501",
                      visaInvitation: "entry.579133561",
                      reason: "entry.1856521670",
                    },
                  }}
                  fields={[
                    { name: "fullName", label: "Full Name", required: true },
                    {
                      name: "phone",
                      label: "Contact Number (Preferably WhatsApp)",
                      type: "tel",
                      required: true,
                    },
                    { name: "email", label: "Email Address", type: "email", required: true },
                    { name: "address", label: "Address", required: true, full: true },
                    { name: "jobTitle", label: "Job Title", required: true },
                    {
                      name: "products",
                      label: "What type of products do you want to purchase?",
                      full: true,
                    },
                    {
                      name: "visitedBefore",
                      label: "Have you visited WAAEE before?",
                      type: "select",
                      required: true,
                      options: ["Yes", "No"],
                    },
                    {
                      name: "attendance",
                      label: "Would you be attending?",
                      type: "select",
                      required: true,
                      options: ["Yes", "No"],
                    },
                    {
                      name: "visaInvitation",
                      label: "Would you require an invitation letter for Visa to attend?",
                      type: "select",
                      options: ["Yes", "No"],
                    },
                    {
                      name: "reason",
                      label: "Reason for attending?",
                      type: "textarea",
                      full: true,
                    },
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
