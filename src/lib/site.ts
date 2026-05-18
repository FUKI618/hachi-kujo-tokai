/**
 * サイト全体定数
 * デプロイ環境に依存しないパス処理ユーティリティを提供
 */

const RAW_BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

export const homePath = RAW_BASE === "" ? "/" : `${RAW_BASE}/`;

/**
 * 静的アセットへのパスを Astro の base を考慮して生成
 * 例: assetPath("images/hero/main.webp") → "/images/hero/main.webp"
 */
export function assetPath(rel: string): string {
  const trimmed = rel.replace(/^\//, "");
  return `${homePath}${trimmed}`;
}

/** 9月15日〜10月15日: スズメバチ攻撃性ピーク期（新女王誕生で防衛本能極大化） */
export function isHornetPeakSeason(date: Date = new Date()): boolean {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (month === 9 && day >= 15) || (month === 10 && day <= 15);
}

export const siteConfig = {
  defaultTitle:
    "東海の蜂の巣駆除なら最短30分｜基本3,300円〜・1年保証｜蜂の巣駆除ファクトリー東海",
  defaultDescription:
    "蜂の巣駆除を愛知・岐阜・三重・静岡で最短30分。事前見積金額の範囲内で追加請求なしのハチ駆除専門【蜂の巣駆除ファクトリー東海】。スズメバチ・アシナガバチに基本3,300円〜。24時間365日受付・見積り無料・キャンセル料0円・1年再発保証。",
  ogImage: "og-image.webp",
  themeColor: "#c81e1e",
} as const;
