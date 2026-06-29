import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * 記事（コラム）コレクション。
 * 構造化パーツ（結論/30秒まとめ/FAQ）は frontmatter、本文セクションは Markdown 本体。
 * → ArticleLayout（案C：AEO構造デザイン）がレンダリング。会社情報は src/data/company.ts を参照。
 */
const column = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/column" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    keywords: z.array(z.string()).default([]),
    category: z.string().default("蜂の知識"),
    heroImage: z.string(),
    heroAlt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.string().default("約4分"),
    /** 結論（答え先出し・AEO）。1〜3文 */
    answer: z.string(),
    /** 30秒まとめ（箇条書き） */
    tldr: z.array(z.string()).default([]),
    /** FAQ（FAQPage 構造化データにも使用） */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { column };
