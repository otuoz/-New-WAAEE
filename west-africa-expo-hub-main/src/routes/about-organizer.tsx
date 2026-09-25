import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import hallImage from "@/assets/expo-hall.jpeg";

export const Route = createFileRoute("/about-organizer")({
  head: () => ({
    meta: [
      { title: "About the Organizer | WAAEE Expo 2027" },
      {
        name: "description",
        content:
          "Leo Gladiolus Integrated Services & Exhibition Ltd, established 2016, organises world-class exhibitions and conferences across Nigeria and Africa.",
      },
      { property: "og:title", content: "About the Organizer | WAAEE Expo 2027" },
      {
        property: "og:description",
        content:
          "Meet Leo Gladiolus Integrated Services & Exhibition Ltd — exhibitions, booth construction, trade promotion, logistics and business support services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrganizerPage,
});

const SERVICES = [
  {
    no: "01",
    title: "Exhibition Booths Rental / Construction of Customized Booths",
    body: [
      "We offer premium exhibition booth rentals designed to elevate your presence at any trade show or event. Our booths are customizable to fit your brand's unique style, ensuring you stand out and attract attention. With top-quality materials and modern designs, we provide an efficient setup and takedown service, allowing you to focus on engaging with potential clients.",
      "Our team provides comprehensive support from design to installation, making the entire process seamless and stress-free. Choose our exhibition booth rentals for a professional and impactful presence at your next trade show or event. Partner with us for a hassle-free exhibition experience that maximizes your impact and visibility.",
    ],
  },
  {
    no: "02",
    title: "Trade Promotion & Facilitation",
    body: [
      "We offer comprehensive Trade Promotion & Facilitation services aimed at boosting your business's international reach and market presence. Our expert team provides strategic guidance, market research, and personalized support to navigate the complexities of global trade. From organizing trade missions to facilitating export documentation, we ensure a seamless experience that enhances your competitive edge. Partner with us to unlock new opportunities and drive growth in the global marketplace.",
    ],
  },
  {
    no: "03",
    title: "Haulage & Logistics Services",
    body: [
      "We offer quality haulage and logistics services towards ensuring our client products are delivered safely and in real time, efficiently and effectively. With a robust network of carriers and advanced logistics technology, we provide seamless and cost-effective transportation solutions. Partner with us to streamline your supply chain and enhance the reliability of your deliveries.",
    ],
  },
  {
    no: "04",
    title: "Manufacturers' Representative",
    body: [
      "We offer Manufacturers' Representative services dedicated to expanding your product's market reach and driving sales growth. Our experienced team acts as an extension of your company, leveraging strong industry connections and market knowledge to promote and sell your products effectively.",
      "We provide tailored sales strategies, market analysis, and continuous support to ensure your brand gains optimal exposure and achieves its sales targets. Partner with us to enhance your market presence and boost your business success.",
    ],
  },
  {
    no: "05",
    title: "Marketing & PR Services",
    body: [
      "We offer comprehensive Marketing & PR Services designed to elevate your brand and connect with your target audience effectively. Our expert team provides strategic campaign planning, creative content development, and media relations to ensure your message resonates and drives engagement.",
      "From digital marketing and social media management to public relations and event planning, we cover all aspects of your promotional needs. Partner with us to enhance your brand visibility, reputation, and overall market impact.",
    ],
  },
  {
    no: "06",
    title: "Research & Consultancy",
    body: [
      "We offer specialized Research & Consultancy services to empower your business with actionable insights and strategic guidance. Our expert team conducts thorough market research, competitive analysis, and feasibility studies tailored to your specific industry needs.",
      "We provide data-driven recommendations and customized solutions to help you make informed decisions and achieve your business objectives. Partner with us to gain a deeper understanding of your market and drive sustainable growth through expert consultancy.",
    ],
  },
  {
    no: "07",
    title: "Import & Export",
    body: [
      "We offer comprehensive Import & Export services to facilitate seamless global trade for your business. Our experienced team handles all aspects of the import and export process, from customs clearance and documentation to logistics and transportation.",
      "With a focus on compliance and efficiency, we ensure smooth operations and timely deliveries, allowing you to focus on growing your international business. Partner with us to navigate the complexities of cross-border trade and expand your global reach with confidence.",
    ],
  },
];

function OrganizerPage() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About the Organizer"
          title="Leo Gladiolus Integrated Services & Exhibition Ltd"
          intro="Meet the organization behind the expo and discover the expertise, services and platforms we provide across Nigeria and Africa."
          image={hallImage}
          imageAlt="Exhibition hall prepared for a large international trade fair"
        />

        <section className="bg-stone py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Who We Are</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 max-w-3xl text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Building Platforms That Connect Brands and Businesses
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal delay={140}>
                <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                  <p>
                    Leo Gladiolus Integrated Services &amp; Exhibition Ltd was established in 2016.
                  </p>
                  <p>
                    We are a Nigerian-based progressive organization focused on redefining brands and
                    building businesses by creating multiple dynamic platforms.
                  </p>
                  <p>
                    We deliver world-class exhibitions and conferences of repute across Nigeria and
                    Africa. Our expertise extends beyond event organization to exhibition booth
                    services, branding, 3D design, large-format printing and other business support
                    services.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <dl className="grid grid-cols-2 gap-6 border-y border-border py-8">
                  <div className="border-l-2 border-primary pl-4">
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Established
                    </dt>
                    <dd className="mt-2 font-display text-4xl font-extrabold text-primary">2016</dd>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Service Lines
                    </dt>
                    <dd className="mt-2 font-display text-4xl font-extrabold text-primary">07</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <Reveal>
              <p className="eyebrow text-primary">Our Capabilities</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-6 text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Services We Provide
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Beyond exhibitions and conferences, our organization provides a range of services
                designed to help businesses build visibility, reach new markets and operate more
                effectively.
              </p>
            </Reveal>

            <ul className="stage mt-14 grid gap-6 lg:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal as="li" key={s.no} delay={(i % 2) * 80}>
                  <div className="depth-tile h-full border-t-2 border-primary bg-card p-8 lg:p-10">
                    <span className="font-display text-2xl font-extrabold tabular-nums text-secondary">
                      {s.no}
                    </span>
                    <h3 className="mt-5 font-display text-base font-bold uppercase leading-snug tracking-[0.06em] text-charcoal">
                      {s.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                      {s.body.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </div>
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
