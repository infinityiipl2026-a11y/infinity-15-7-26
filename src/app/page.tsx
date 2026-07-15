import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { History, Globe, Award, Factory, Users } from "lucide-react";
import OrigamiSection from "../components/OrigamiSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "India's trusted partner for paper & packaging solutions. Infinity Industries Pvt. Ltd. delivers premium paper, packaging and industrial paper through global sourcing and reliable supply chains.",
  alternates: { canonical: "/" },
};

const heroFeatures = [
  "50+ Years Industry Experience",
  "Global Sourcing Network",
  "Reliable Supply Chain",
  "FSC Certified Operations",
];

const productCategoryLinks = [
  {
    href: "/products#writing-printing",
    image: "/images/copier-paper.jpg",
    title: "Writing & Printing Grade",
  },
  {
    href: "/products#packaging",
    image: "/images/food-grade.jpg",
    title: "Packaging Grade",
  },
  {
    href: "/products#industrial",
    image: "/images/release-paper.jpg",
    title: "Industrial Grade",
  },
  {
    href: "/products#speciality",
    image: "/images/sticker-sheet.jpg",
    title: "Speciality Grade",
  },
];

const whyChooseUs = [
  { Icon: History, title: "50+ Years of Expertise" },
  { Icon: Globe, title: "Global Reach" },
  { Icon: Award, title: "Certified Excellence" },
  { Icon: Factory, title: "End-to-End Reliability" },
  { Icon: Users, title: "Client-Centric Approach" },
];

export default function HomePage() {
  return (
    <div className="page-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px] pt-16 pb-16">
        {/* HERO */}
        <section className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center py-8">
          <div>
            <h1 className="font-display font-extrabold text-forest text-4xl sm:text-5xl leading-[1.12] tracking-tight mb-6 max-w-xl">
              India&rsquo;s Trusted Partner for Paper &amp; Packaging Solutions
            </h1>
            <p className="text-slate text-lg leading-relaxed max-w-lg mb-8">
              Delivering premium paper, packaging and industrial paper
              solutions through global sourcing, reliable supply chains and
              decades of industry expertise.
            </p>

            <ul className="mb-9 space-y-3">
              {heroFeatures.map((feature) => (
                <li
                  key={feature}
                  className="text-forest font-semibold text-[15px]"
                >
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/CAM00853.jpg"
              alt="Paper roll in production"
              width={400}
              height={220}
              className="w-full h-[160px] sm:h-[220px] object-cover rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
            />
            <Image
              src="/images/paper-roll.jpg"
              alt="Infinity Industries warehouse"
              width={400}
              height={220}
              className="w-full h-[160px] sm:h-[220px] object-cover rounded-md shadow-lg mt-8 transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
            />
            <Image
              src="/images/container.jpg"
              alt="Shipping container for paper exports"
              width={400}
              height={220}
              className="w-full h-[160px] sm:h-[220px] object-cover rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
            />
            <Image
              src="/images/packaging-board.jpg"
              alt="Packaging board stock"
              width={400}
              height={220}
              className="w-full h-[160px] sm:h-[220px] object-cover rounded-md shadow-lg mt-8 transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
            />
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="card-surface max-w-[900px] mx-auto my-20 p-8 sm:p-12 text-center">
          <h2 className="font-display font-bold text-forest text-3xl sm:text-4xl lg:text-[48px] mb-6">
            Who We Are
          </h2>
          <p className="text-base lg:text-[17px] leading-9 text-justify mb-4">              
            Infinity Industries Pvt. Ltd. is a trusted paper supplier and
            distributor in India, specializing in writing &amp; printing
            paper, packaging paper, industrial paper, and speciality grades.
            With decades of experience, we provide high-quality paper
            solutions through global sourcing, efficient logistics, and
            reliable supply chain management.
          </p>
          <p className="text-base lg:text-[17px] leading-9 text-justify mb-8">            
            We cater to industries across packaging, printing, manufacturing,
            and commercial sectors, ensuring consistent quality and timely
            delivery. Our expertise in imported and domestic paper makes us a
            preferred partner for businesses across India.
          </p>
          <Link
            href="/about"
            className="inline-block bg-forest text-white rounded-md px-8 py-3.5 font-semibold transition-colors duration-300 hover:bg-forest-dark"
          >
            Learn More About Us
          </Link>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section className="py-16">
          <h2 className="section-heading">Our Product Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategoryLinks.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-paper rounded-lg overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={400}
                  height={250}
                  className="w-full h-[220px] object-cover"
                />
                <h3 className="text-center text-forest font-semibold p-5">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* ORIGAMI DIY */}
        <OrigamiSection />

        {/* WHY CHOOSE US */}
        <section className="py-16">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="relative flex flex-wrap justify-between items-start gap-6 before:content-[''] before:absolute before:top-[75px] before:left-[8%] before:right-[8%] before:h-[3px] before:bg-gradient-to-r before:from-forest before:via-gold before:to-forest before:rounded before:-z-10">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex-1 min-w-[140px] text-center group"
              >
                <div className="mx-auto flex h-[130px] w-[130px] items-center justify-center rounded-full border-4 border-forest bg-paper shadow-[0_8px_24px_rgba(44,74,62,0.16)] transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-forest">
                  <item.Icon
                    className="h-12 w-12 text-forest transition-colors duration-300 group-hover:text-gold"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mt-5 font-bold text-ink text-[17px] leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
