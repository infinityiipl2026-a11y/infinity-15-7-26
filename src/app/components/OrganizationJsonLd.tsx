import { siteConfig } from "../lib/site-config";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description:
      "Infinity Industries Pvt. Ltd. is a leading paper supplier and distributor in India offering packaging, industrial, and speciality paper with 50+ years experience.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Haroon House, 294, Perin Nariman St, opposite Reserve Bank Of India",
      addressLocality: "Fort, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-22-40462288",
        contactType: "customer service",
        email: "infinity@galagroup.net",
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
