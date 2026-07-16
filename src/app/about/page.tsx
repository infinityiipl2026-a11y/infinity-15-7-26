import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Infinity Industries is a leading paper solutions company with over 50+ years of industry expertise, offering global sourcing, paper conversion, warehousing, logistics, and distribution services across India.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Integrity",
    body: "Building trust through transparent, ethical, and honest dealings in every transaction.",
  },
  {
    title: "Commitment",
    body: "Dedicated to excellence and the long-term success of our partners and clients.",
  },
  {
    title: "Sustainability",
    body: "Promoting responsible paper sourcing and eco-friendly practices through our certifications.",
  },
];

const people = [
  {
    image: "/images/founder2.png",
    role: "Founder & Chairman",
    name: "Mr. Lakhamshi J. Gala",
    bio: "Mr. Lakhamshi J. Gala founded Reliable Paper in 1974 and later established Infinity Industries in 2001. With over five decades of industry experience, his vision, integrity, and leadership have built a strong foundation of trust, excellence, and long-term partnerships in the paper industry.",
  },
  {
    image: "/images/md.jpg",
    role: "Managing Director",
    name: "Mr. Bhavesh L. Gala",
    bio: "Mr. Bhavesh L. Gala brings over 30+ years of experience in the paper industry and leads Infinity Industries with a focus on growth, innovation, and global partnerships. His commitment to quality, operational excellence, and customer satisfaction continues to strengthen the company's position in the market, while his involvement with the Federation of Paper Traders Association (FPTA) reflects his dedication to the industry.",
  },
];

const affiliations = [
  { image: "/images/fpta.png", title: "Federation of Paper Traders Association" },
  { image: "/images/pta.png", title: "PTA Mumbai" },
];

export default function AboutPage() {
  return (
    <div className="page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        <h1 className="section-heading text-3xl sm:text-5xl lg:text-6xl mb-16">About Us</h1>

        <div className="max-w-[900px] mx-auto text-center mb-16">
          <p className="text-slate text-lg leading-relaxed">
            Infinity Industries is a leading paper solutions company
            with over 50+ years of industry expertise, offering global
            sourcing, paper conversion, warehousing, logistics, and
            distribution services across India.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid sm:grid-cols-2 gap-8 mb-24">
          <div className="card-surface border-t-4 border-t-forest p-10 flex flex-col justify-center min-h-[280px]">
            <h2 className="font-display font-bold text-forest text-3xl text-center mb-5">
              Our Mission
            </h2>
            <p className="text-slate text-center leading-loose">
              We empower the global paper industry by providing seamless,
              end-to-end supply chain solutions built on premium quality,
              integrity-driven partnerships, and a commitment to operational
              and sustainable excellence.
            </p>
          </div>

          <div className="card-surface border-t-4 border-t-forest p-10 flex flex-col justify-center min-h-[280px]">
            <h2 className="font-display font-bold text-forest text-3xl text-center mb-5">
              Our Vision
            </h2>
            <p className="text-slate text-center leading-loose">
              To be the most trusted partner in global paper trade by setting
              benchmarks for excellence, innovation, and ethics while bridging
              global suppliers with the evolving needs of the Indian market.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <section className="mb-24">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-7">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-surface relative overflow-hidden p-9 text-center min-h-[240px] flex flex-col justify-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-forest before:to-gold"
              >
                <h3 className="font-display font-bold text-forest text-2xl mb-4">
                  {value.title}
                </h3>
                <p className="text-slate leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="grid sm:grid-cols-2 gap-8 mb-24">
          {people.map((person) => (
            <div
              key={person.name}
              className="card-surface border-t-4 border-t-gold p-9 flex flex-col items-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={190}
                height={190}
                className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full object-cover object-top border-[5px] border-forest shadow-lg bg-white mb-6"
              />
              <h3 className="font-display font-bold text-forest text-2xl text-center mb-1">
                {person.role}
              </h3>
              <h4 className="font-display font-bold text-forest text-2xl text-center mb-5">
                {person.name}
              </h4>
              <div className="bio-scroll max-h-[280px] overflow-y-auto pr-2.5">
                <p className="text-slate leading-loose text-justify text-[15px] sm:text-base">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* AFFILIATIONS */}
        <section className="mb-24">
          <h2 className="section-heading">Our Affiliations</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {affiliations.map((item) => (
              <div
                key={item.title}
                className="card-surface p-10 text-center hover:border-forest"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mx-auto w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] object-contain bg-cream p-5 rounded-lg mb-5"
                />
                <h3 className="font-display font-bold text-forest text-xl">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* QUALITY PROMISE */}
        <section className="bg-forest rounded-lg px-8 sm:px-16 py-14 shadow-[0_15px_40px_rgba(44,74,62,0.25)]">
          <h2 className="font-display font-bold text-cream text-3xl sm:text-4xl text-center mb-7">
            Our Promise of Quality
          </h2>
          <p className="text-cream/85 text-lg leading-loose text-center max-w-3xl mx-auto">
            At Infinity Industries, quality is our culture. We uphold global
            excellence through ISO-certified operations and FSC-accredited
            sustainability. Partnering with us ensures a supply chain defined
            by precision, safety, environmental responsibility, and
            unwavering reliability.
          </p>
        </section>
      </div>
    </div>
  );
}
