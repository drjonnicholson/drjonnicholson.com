import type { LinkConfig, ProfileConfig, PublicationConfig, SiteConfig } from "@/types"

export const SITE: SiteConfig = {
  title: "Jon Nicholson, PhD",
  description: "Architecture Leader | Digital Transformation | API Strategy | Customer Platforms",
  sourceCode: "https://github.com/drjonnicholson/drjonnicholson.com",
  gtmVerificationId: "d_RxvspQFwZ0PTH84-7cv4femXW7nGjBckRAJrqRM7M",
  gtmId: "GTM-NJJMQXPK",
  href: "https://www.drjonnicholson.com",
  author: "Jon Nicholson",
  dir: "ltr",
  defaultSiteImage: "/img/social-preview.webp",

  locale: {
    lang: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  // Table of contents depth for project detail pages.
  tocMaxDepth: 3,

  home: {
    careerHighlightCount: 3,
    updateCount: 3,
    publicationCount: 3,
  },

  favicon: "/favicon.ico",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",

  license: {
    label: "CC-BY-4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
  },
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  tagline: "Connecting Strategy, Architecture & Delivery",
  email: "me@drjonnicholson.com",
  location: "Bexhill, East Sussex",
  pronouns: "he/him",
  links: {
    github: "https://github.com/drjonnicholson",
    linkedin: "https://www.linkedin.com/in/drjonnicholson",
    googleScholar: "https://scholar.google.com/citations?user=ZAgWGpAAAAAJ&hl=en",
    buymeacoffee: "https://buymeacoffee.com/drjonnicholson",
  },
  highlightLinks: ["github"],
  linksPlacement: {
    header: ["email", "linkedin", "github", "googleScholar", "buymeacoffee"],
    about: true,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Alex",
    lastName: "Morgan",
    aliases: ["A. Morgan"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const { ProfileConfigSchema, PublicationConfigSchema, SiteConfigSchema } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
