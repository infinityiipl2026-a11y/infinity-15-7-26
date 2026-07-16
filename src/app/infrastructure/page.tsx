import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Warehouse,
  CheckCircle2,
  Factory,
  Truck,
  ArrowRight,
} from "lucide-react";
import { certifications } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Infrastructure & Operations",
  description:
    "Infinity Industries operates a robust supply chain network with strategically located warehouses, quality control systems, and efficient logistics for consistent delivery.",
  alternates: { canonical: "/infrastructure" },
};

const supplySteps = [
  {
    Icon: Globe,
    title: "Global Sourcing",
    body: "Premium paper sourced from trusted international mills.",
  },
  {
    Icon: Warehouse,
    title: "Warehousing",
    body: "Large inventory storage with organized stock management.",
  },
  {
    Icon: CheckCircle2,
    title: "Quality Control",
    body: "Rigorous inspection and certification compliance.",
  },
  {
    Icon: Factory,
    title: "Paper Conversion",
    body: "Custom cutting, finishing and packaging solutions.",
  },
  {
    Icon: Truck,
    title: "Delivery",
    body: "Reliable logistics ensuring timely dispatch nationwide.",
  },
];

const galleryImages = [
  { src: "/images/DSC_0082.JPG", alt: "Infinity Industries warehouse" },
  { src: "/images/DSC_0101.JPG", alt: "Paper roll storage" },
  { src: "/images/DSC_0077.JPG", alt: "Shipping container" },
  { src: "/images/paper-roll.jpg", alt: "Packaging board stock" },
];

export default function InfrastructurePage() {
  return (
    <div className="page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        <h1 className="section-heading text-3xl sm:text-5xl lg:text-6xl mb-16">
          Infrastructure &amp; Operations
        </h1>

        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <h2 className="font-display font-bold text-forest text-3xl sm:text-[42px] leading-tight mb-6">
              World-Class Infrastructure &amp; Global Supply Chain Excellence
            </h2>
            <p className="text-slate text-lg leading-loose">
              Infinity Industries operates with a robust supply
              chain network, strategically located warehouses, quality
              control systems and efficient logistics solutions to ensure
              consistent delivery and customer satisfaction.
            </p>
          </div>
          <Image
            src="/images/warehouse.jpg"
            alt="Infinity Industries warehouse facility"
            width={700}
            height={480}
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
        </section>

        {/* SUPPLY CHAIN PROCESS */}
        <section className="mb-28">
          <h2 className="section-heading text-4xl sm:text-5xl">
            Supply Chain Process
          </h2>
          <p className="max-w-3xl mx-auto text-center text-slate text-[17px] leading-loose mb-14">
            From global sourcing to final delivery, every stage is managed
            with precision, quality control, and operational excellence.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-3">
            {supplySteps.map((step, i) => (
              <div key={step.title} className="contents">
                <div className="flex-1 text-center max-w-[320px] group">
                  <div className="mx-auto flex h-[110px] w-[110px] sm:h-[130px] sm:w-[130px] items-center justify-center rounded-full border-4 border-forest bg-paper shadow-lg transition-all duration-300 group-hover:bg-forest group-hover:-translate-y-2.5">
                    <step.Icon
                      className="h-10 w-10 sm:h-12 sm:w-12 text-forest transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-forest text-xl sm:text-2xl mt-5">
                    {step.title}
                  </h3>
                  <p className="text-slate leading-relaxed mt-2.5">
                    {step.body}
                  </p>
                </div>
                {i < supplySteps.length - 1 && (
                  <div className="text-gold rotate-90 lg:rotate-0 my-2 lg:mt-[50px]">
                    <ArrowRight className="h-7 w-7" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* WAREHOUSING */}
        <section className="mb-28">
          <h2 className="section-heading text-4xl sm:text-5xl">
            Warehousing Excellence
          </h2>
          <p className="text-slate text-lg leading-loose text-center max-w-3xl mx-auto mb-12">
            Our warehouses are designed to maintain large inventories while
            ensuring product safety, quality preservation and efficient
            dispatch operations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={300}
                height={260}
                className="w-full h-[220px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2 className="section-heading text-4xl sm:text-5xl">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-7">
            {certifications.map((cert) => (
              <Link
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-lg bg-gradient-to-br from-forest to-[#3D6655] text-cream p-10 sm:p-12 text-center shadow-[0_12px_35px_rgba(44,74,62,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(44,74,62,0.4)]"
              >
                <h3 className="font-display font-bold text-2xl mb-3">
                  {cert.title}
                </h3>
                <p className="text-cream/90 leading-relaxed">
                  {cert.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
