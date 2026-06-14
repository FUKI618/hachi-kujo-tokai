import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE = process.env.PUBLIC_SITE_ORIGIN ?? "https://hachi-factory.jp";
const BASE = process.env.PUBLIC_SITE_BASE ?? "";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  // 現行トップLPは差し替え（使わない）。新LP本体を / に移設したため、
  // 旧 /pro/ URL（公開済み・privacy/legal の戻りリンク・広告等）は / へ送る。
  // 旧トップは src/pages/_index-old.astro に退避（_接頭辞でルート除外＝可逆）。
  redirects: {
    "/pro/": "/",
  },
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
