/**
 * Structured Data Schema for SEO
 * Generates JSON-LD structured data for better search engine understanding
 */

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string[];
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: string;
  serviceType: string;
}

export interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  potentialAction: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Konnections IMAG",
  description: "Strategic communications and integrated marketing solutions for businesses. Specializing in public relations, crisis management, digital media, and corporate communications.",
  url: "https://konnections.co.in",
  logo: "https://konnections.co.in/logo-big.png",
  image: "https://konnections.co.in/logo-big.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7032939360",
    contactType: "Customer Service",
    email: "info@konnections.co.in"
  },
  sameAs: [
    "https://www.facebook.com/Konnections/",
    "https://www.instagram.com/konnections.imag/",
    "https://www.linkedin.com/company/konnectionsimag/"
  ],
  foundingDate: "2010",
  numberOfEmployees: "10-50",
  industry: [
    "Public Relations",
    "Marketing Communications",
    "Crisis Management",
    "Digital Media",
    "Corporate Communications"
  ]
};

export const websiteSchema: WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Konnections IMAG",
  description: "Strategic communications and integrated marketing solutions",
  url: "https://konnections.co.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://konnections.co.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchemas: ServiceSchema[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Public Relations",
    description: "Strategic public relations services to build and maintain positive relationships with stakeholders.",
    provider: {
      "@type": "Organization",
      name: "Konnections IMAG"
    },
    areaServed: "India",
    serviceType: "Public Relations"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Crisis Management",
    description: "Professional crisis management and reputation protection services.",
    provider: {
      "@type": "Organization",
      name: "Konnections IMAG"
    },
    areaServed: "India",
    serviceType: "Crisis Management"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Media",
    description: "Comprehensive digital media and social media management services.",
    provider: {
      "@type": "Organization",
      name: "Konnections IMAG"
    },
    areaServed: "India",
    serviceType: "Digital Marketing"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Communications",
    description: "Strategic corporate communications and internal communications services.",
    provider: {
      "@type": "Organization",
      name: "Konnections IMAG"
    },
    areaServed: "India",
    serviceType: "Corporate Communications"
  }
];

export const generateSchemaMarkup = (schema: OrganizationSchema | ServiceSchema | WebsiteSchema | ServiceSchema[]): string => {
  return JSON.stringify(schema, null, 2);
};
