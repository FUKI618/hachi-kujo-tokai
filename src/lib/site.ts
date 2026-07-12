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
    "名古屋・愛知の蜂の巣駆除なら最短30分｜追加0円の明朗会計・1年保証｜蜂の巣駆除ファクトリー東海",
  defaultDescription:
    "蜂の巣駆除を名古屋・愛知＋岐阜・三重の近郊エリアで最短30分。事前見積金額の範囲内で追加請求なしのハチ駆除専門【蜂の巣駆除ファクトリー東海】。料金相場はアシナガバチ8,000〜20,000円・スズメバチ15,000〜30,000円が中心（当社調べ）、標準ケースは上限つき（アシナガ19,800円・スズメ29,800円）で追加0円の明朗会計。受付は電話7時〜21時・LINE24時間。見積り無料・キャンセル料0円・1年再発保証。",
  ogImage: "og-image.webp",
  themeColor: "#c81e1e",
} as const;
