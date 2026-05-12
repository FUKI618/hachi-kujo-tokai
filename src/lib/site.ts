/**
 * サイト全体定数
 * デプロイ環境に依存しないパス処理ユーティリティを提供
 */

const RAW_BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

export const homePath = RAW_BASE === "" ? "/" : `${RAW_BASE}/`;

/**
 * 静的アセットへのパスを Astro の base を考慮して生成
 * 例: assetPath("images/hero/main.webp") → "/hachi-kujo-tokai/images/hero/main.webp"
 */
export function assetPath(rel: string): string {
  const trimmed = rel.replace(/^\//, "");
  return `${homePath}${trimmed}`;
}

export const siteConfig = {
  defaultTitle:
    "東海エリアの蜂駆除なら最短30分｜基本3,300円〜・1年保証｜東海ハチ救急隊",
  defaultDescription:
    "愛知・岐阜・三重・静岡の蜂駆除なら【東海ハチ救急隊】。最短30分で出動・基本3,300円〜・事前見積金額厳守・1年再発保証。24時間365日受付／見積り無料／キャンセル料0円。スズメバチ・アシナガバチ専門対応。",
  ogImage: "og-image.webp",
  themeColor: "#c81e1e",
} as const;
