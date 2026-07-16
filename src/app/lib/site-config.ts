export const siteConfig = {
  name: "Infinity Industries Pvt. Ltd.",
  tagline: "Comprehensive Provider of End-to-End Paper Solutions",
  url: "https://www.einfinity.in",
  whatsappNumber: "919920542288",
  whatsappMessage:
    "Hello Infinity Industries, I would like to know more about your products.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/career", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

// Dropdown menu for the DIY Corner (origami tutorials) nav item.
export const diyCornerLinks = [
  { href: "/origami", label: "View All Tutorials" },
  { href: "/origami/easy", label: "Easy Tutorials" },
  { href: "/origami/medium", label: "Medium Tutorials" },
  { href: "/origami/hard", label: "Hard Tutorials" },
];

// "Other Ventures" — sibling businesses under the same group.
// Update the `url` fields below as real websites go live; everything else
// (nav dropdown card, mobile menu entry) reads from this single source.
export type Venture = {
  name: string;
  description: string;
  url: string;
  logo: string;
};

export const otherVentures: Venture[] = [
  {
    name: "Infinix",
    description: "Personal & Household Care Products.",
    url: "https://www.infinitycpd.in",
    logo: "/images/logo1.png",
  },
];

export const offices = [
  {
    name: "Head Office",
    address:
      "1st Floor, Haroon House, 294, Perin Nariman St, opposite Reserve Bank Of India, Fort, Mumbai, Maharashtra 400001",
    emails: ["infinity@galagroup.net"],
    phone: "+91-22-40462288",
    phoneHref: "+912240462288",
    mapSrc:
      "https://maps.google.com/maps?q=Infinity%20Industries%20Pvt%20Ltd%20Fort%20Mumbai&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Delhi Branch",
    address: "2nd floor, 79, Shyam Lal Rd, Daryaganj, New Delhi, Delhi, 110002",
    emails: ["delhi@galagroup.net"],
    phone: "+91-011-43752288",
    phoneHref: "+91-011-43752288",
    mapSrc:
      "https://maps.google.com/maps?q=INFINITY%20INDUSTRIES%20PVT%20LTD%20Delhi&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Bhawale Warehouse & Operations",
    address:
      "G-1, Infinity Compound, Pissa Dam Rd, next to All Saints High School, Bhawale, Maharashtra 421302",
    emails: [] as string[],
    phone: "",
    phoneHref: "",
    mapSrc:
 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2194416072894!2d73.12663847521141!3d19.31628178193839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797a1f20271cd%3A0xd67a67f4ca6a9129!2sInfinity%20Industries%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1783943951382!5m2!1sen!2sin",
  },
];

export const certifications = [
  {
    title: "FSC",
    description: "Forest Stewardship Council Certification",
    file: "/pdfs/fsc.pdf",
  },
  {
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    file: "/pdfs/iso9001.pdf",
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System Certification",
    file: "/pdfs/iso14001.pdf",
  },
  {
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety Certification",
    file: "/pdfs/iso45001.pdf",
  },
];
