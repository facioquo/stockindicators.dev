import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Production-only output (indexing) is opt-in. Either deployer can enable it:
// the GitHub deploy workflow sets PUBLIC_SITE_ENV=production for main, and
// Cloudflare Pages' own Git builds set CF_PAGES_BRANCH.
if (process.env.CF_PAGES_BRANCH === "main") {
  process.env.PUBLIC_SITE_ENV ??= "production";
}

export default defineConfig({
  site: "https://stockindicators.dev",
  integrations: [sitemap()],
  output: "static"
});
