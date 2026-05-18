import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE = process.env.PUBLIC_SITE_ORIGIN ?? "https://hachi-factory.jp";
const BASE = process.env.PUBLIC_SITE_BASE ?? "";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [
    sitemap({
      serialize(item) {
        // @astrojs/sitemap が base を loc に含めない問題を回避し、
        // canonical URL と sitemap loc を一致させる
        const base = BASE.replace(/\/$/, "");
        if (base && !item.url.includes(base)) {
          item.url = item.url.replace(/(https?:\/\/[^/]+)/, `$1${base}`);
        }
        // 末尾スラッシュを統一（trailingSlash: "always" と整合）
        if (!item.url.endsWith("/")) {
          item.url += "/";
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
  },
});
