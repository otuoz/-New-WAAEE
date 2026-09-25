import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ExpoForm } from "@/components/site/ExpoForm";
import { SECTORS, WHY_EXHIBIT, WHATSAPP_URL } from "@/lib/waae-content";
import heroImage from "@/assets/hero-harvest.jpeg";

export const Route = createFileRoute("/book-a-stand")({
  head: () => ({
    meta: [
      { title: "Book A Stand | WAAEE Expo 2027, Lagos" },
      {
        name: "description",
        content:
          "Book exhibition stand space at WAAEE Expo 2027, Lagos. Stand sizes, demonstration areas and pavilion participation across 15 industry sectors.",
      },
      { property: "og:title", content: "Book A Stand at WAAEE Expo 2027" },
      {
        property: "og:description",
        content:
          "Secure stand space, demonstration areas and pavilion participation at WAAEE Expo, 17–19 March 2027, Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookAStandPage,
});

const STEPS = [
  {
    n: "01",
    title: "Select Your Sector",
    text: "Confirm the sector and feature zone that matches your product range so your stand sits beside the right buyers.",
  },
  {
    n: "02",
    title: "Choose Stand Space",
    text: "Shell scheme, space-only and outdoor demonstration plots are available in multiples of nine square metres.",
  },
  {
    n: "03",
    title: "Confirm Allocation",
    text: "Stand space, demonstration areas and sponsorship packages are allocated on a first-confirmed basis.",
  },
];

function BookAStandPage() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Exhibitors"
          title="Book A Stand"
          intro="Exhibit to farmers, processors, distributors, engineers, financiers and government buyers from across West Africa over three trade days in Lagos."
          image={heroImage}
          imageAlt="Combine harvester working a grain field at sunset in West Africa"
        />

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">How to Book</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Three Steps to Confirm
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-px bg-border md:grid-cols-3">
              {STEPS.map(({ n, title, text }, i) => (
                <Reveal as="li" key={n} delay={i * 90} className="bg-card">
                  <div className="h-full border-t-2 border-primary p-9">
                    <span className="font-display text-3xl font-extrabold tabular-nums text-primary">
                      {n}
                    </span>
                    <h3 className="mt-6 font-display text-base font-bold uppercase leading-snug tracking-tight text-charcoal">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="stand-form" className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Exhibitor Application</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Reserve Your Stand Space
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Complete the form below and the exhibition team will respond with the floor plan,
                stand rates and allocation details for your sector.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12">
                <ExpoForm
                  formType="exhibitor"
                  nameFields={["fullName"]}
                  organizationField="company"
                  submitLabel="Submit stand application"
                  googleForm={{
                    action:
                      "https://docs.google.com/forms/d/e/1FAIpQLScEK2AXpxeIOEePTp0i9JS1dqViJm5F_Ia6Kj012YqGnaGHjQ/formResponse",
                    fields: {
                      fullName: "entry.1158702114",
                      company: "entry.384098655",
                      jobTitle: "entry.2057227570",
                      gender: "entry.577401186",
                      email: "entry.1474498231",
                      phone: "entry.1632117888",
                      address: "entry.850705682",
                      squareMetres: "entry.848055130",
                      message: "entry.254170167",
                    },
                  }}
                  fields={[
                    { name: "fullName", label: "Full Name", required: true },
                    { name: "company", label: "Company Name", required: true },
                    { name: "jobTitle", label: "Job Title", required: true },
                    {
                      name: "gender",
                      label: "Sex",
                      type: "select",
                      required: true,
                      options: ["Male", "Female"],
                    },
                    { name: "email", label: "Email Address", type: "email", required: true },
                    { name: "phone", label: "Contact Number", type: "tel", required: true },
                    { name: "address", label: "Address", required: true, full: true },
                    {
                      name: "squareMetres",
                      label: "How many square metres you would expect?",
                      required: true,
                      placeholder: "e.g. 18 sqm",
                    },
                    {
                      name: "message",
                      label: "If you have notes/comments you may use this field",
                      type: "textarea",
                      full: true,
                    },
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </section>


        <section className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Exhibition Profile</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Scope of Exhibit
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map(({ Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={(i % 3) * 70} className="bg-card">
                  <article className="h-full p-8">
                    <span className="grid h-12 w-12 place-items-center bg-stone text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-display text-base font-bold uppercase leading-snug tracking-tight text-charcoal">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
