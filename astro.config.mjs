import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jearonwong.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("/theory-clusters/") &&
        !page.endsWith("/theory-clusters") &&
        !page.endsWith("/essays/projects-are-proof-not-portfolio/") &&
        !page.endsWith("/essays/projects-are-proof-not-portfolio")
    })
  ],
  server: {
    allowedHosts: true
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
