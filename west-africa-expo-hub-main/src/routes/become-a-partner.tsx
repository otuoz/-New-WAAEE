import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Handshake, Landmark, Megaphone, Users, Globe2 } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ExpoForm } from "@/components/site/ExpoForm";
import { WHATSAPP_URL } from "@/lib/waae-content";
import solarImage from "@/assets/solar-farm.jpg";

export const Route = createFileRoute("/become-a-partner")({
  head: () => ({
    meta: [
      { title: "Become A Partner | Sponsorship at WAAEE Expo 2027" },
      {
        name: "description",
        content:
          "Sponsorship and partnership opportunities at WAAEE Expo 2027, Lagos. Align your organisation with agriculture, energy, technology and investment in West Africa.",
      },
      { property: "og:title", content: "Become A Partner | WAAEE Expo 2027" },
      {
        property: "og:description",
        content:
          "Sponsorship, pavilion and institutional partnership opportunities at WAAEE Expo, 17–19 March 2027, Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BecomeAPartnerPage,
});

const PARTNERSHIPS = [
  {
    Icon: Award,
    title: "Headline Sponsor",
    text: "Lead billing across the exhibition identity, opening ceremony, signage and delegate materials.",
  },
  {
    Icon: Megaphone,
    title: "Conference Partner",
    text: "Association with the policy and technical programme, including speaking positions and session branding.",
  },
  {
    Icon: Handshake,
    title: "Zone Sponsor",
    text: "Own a feature zone such as Agro Machinery, Renewable Energy, Smart Farming or Investment & Finance.",
  },
  {
    Icon: Landmark,
    title: "Government & Institutional Partner",
    text: "Ministries, agencies and development institutions supporting delegations, pavilions and policy dialogue.",
  },
  {
    Icon: Users,
    title: "Hosted Buyer Partner",
    text: "Support the hosted buyer and trade mission programme bringing qualified procurement teams to the floor.",
  },
  {
    Icon: Globe2,
    title: "Country Pavilion Partner",
    text: "Present a national group of suppliers under one coordinated pavilion identity.",
  },
];

function BecomeAPartnerPage() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Partnership & Sponsorship"
          title="Become A Partner"
          intro="Partner with WAAEE Expo to reach the buyers, financiers and public institutions shaping agricultural and energy investment across West Africa."
          image={solarImage}
          imageAlt="Engineers inspecting a solar array beside farmland"
        />

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Opportunities</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Partnership Packages
              </h2>
            </Reveal>
            <div className="stage mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PARTNERSHIPS.map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={(i % 3) * 90}>
                  <article className="depth-card h-full border-t-2 border-primary bg-card p-9 panel-shadow">
                    <Icon className="h-7 w-7 text-primary" aria-hidden />
                    <h3 className="mt-7 font-display text-base font-bold uppercase leading-snug tracking-tight text-charcoal">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <h2 className="section-title text-[clamp(1.8rem,4vw,3.25rem)]">
                Packages are tailored to your objectives and confirmed in order of commitment.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:waaeenig@gmail.com?subject=Sponsorship%20enquiry%20-%20WAAEE%20Expo%202027"
                  className="inline-flex items-center justify-center gap-3 bg-white px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary transition-transform duration-400 hover:-translate-y-1"
                >
                  Request the sponsorship pack <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/40 px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-400 hover:bg-white/10"
                >
                  Speak to the team
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="partner-form" className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Partnership Enquiry</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Register Your Interest
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Complete the form below and the partnership team will respond with the sponsorship
                pack and the options available for your objectives.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12">
                <ExpoForm
                  formType="partner"
                  nameFields={["fullName"]}
                  organizationField="company"
                  submitLabel="Submit partnership enquiry"
                  googleForm={{
                    action:
                      "https://docs.google.com/forms/d/e/1FAIpQLSdAjdrOlUWJb7ed16B5Qznj5B1itXDJe9qK9ujlw9d8ZoqBXg/formResponse",
                    fields: {
                      fullName: "entry.171967070",
                      company: "entry.732059369",
                      jobTitle: "entry.578712729",
                      email: "entry.444439408",
                      address: "entry.459071277",
                      phone: "entry.1431306795",
                      gender: "entry.462819584",
                      interest: "entry.1096042053",
                      comments: "entry.1948505773",
                    },
                  }}
                  fields={[
                    { name: "fullName", label: "Full Name", required: true },
                    { name: "company", label: "Company Name", required: true },
                    { name: "jobTitle", label: "Job Title", required: true },
                    { name: "email", label: "Email Address", type: "email", required: true },
                    { name: "phone", label: "Contact Number", type: "tel", required: true },
                    { name: "address", label: "Address" },
                    {
                      name: "gender",
                      label: "Sex",
                      type: "select",
                      options: ["Male", "Female"],
                    },
                    {
                      name: "interest",
                      label:
                        "Are you interested as a Partner or Branding a specific area of the Expo Arena? Please Specify",
                      type: "textarea",
                      full: true,
                    },
                    {
                      name: "comments",
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
      </main>
      <SiteFooter />
    </div>
  );
}
