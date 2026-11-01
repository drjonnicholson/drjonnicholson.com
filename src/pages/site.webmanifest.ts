import type { APIRoute } from "astro"
import { PROFILE, SITE } from "@site-config"

// Primary color from --primary (light mode): oklch(0.68 0.1 235) ≈ #7080D0
const THEME_COLOR = "#7080D0"

export const GET: APIRoute = () => {
  const manifest = {
    name: PROFILE.name,
    short_name: SITE.title,
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: THEME_COLOR,
    background_color: THEME_COLOR,
    display: "standalone",
  }

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json" },
  })
}
