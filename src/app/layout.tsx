import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import OrganizationJsonLd from "@/app/components/OrganizationJsonLd";
import { siteConfig } from "./lib/site-config";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Paper Supplier & Distributor in India`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Infinity Industries Pvt. Ltd. is a leading paper supplier and distributor in India offering packaging, industrial, and speciality paper with 50+ years experience.",
  keywords: [
    "paper supplier India",
    "paper distributor Mumbai",
    "packaging paper",
    "industrial paper",
    "speciality paper",
    "writing and printing paper",
    "FSC certified paper",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Paper Supplier & Distributor in India`,
    description:
      "Premium paper, packaging and industrial paper solutions through global sourcing, reliable supply chains and 50+ years of industry expertise.",
    images: [{ url: "/images/logo.png", width: 821, height: 382 }],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Paper Supplier & Distributor in India`,
    description:
      "Premium paper, packaging and industrial paper solutions through global sourcing, reliable supply chains and 50+ years of industry expertise.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="font-body antialiased overflow-x-hidden">
        <OrganizationJsonLd />
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}