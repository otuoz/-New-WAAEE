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
