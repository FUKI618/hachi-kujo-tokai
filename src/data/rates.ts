/**
 * 料金表 SSOT
 * 5種類×（基本料金 / 想定価格帯 / 作業条件）
 *
 * 価格戦略（2026-06-01改定）:
 * - 基本料金 ¥1,680〜（中間業者を挟まない自社直接価格のフロント表示）
 * - スズメバチ・オオスズメバチ ¥2,680〜 / それ以外のハチ ¥1,980〜
 * - 上限(MAX)は表示せず「現地見積で確定」で不透明感を打ち消す方針。
 *   rangePrice は「現地確認後の確定見積でご提示」に統一（具体上限額は出さない）。
 */

export type Rate = {
  beeType: string;
  basicPrice: string;
  basicPriceNum: number; // JSON-LD Offer price 用の数値（種別の下限額）
  rangePrice: string;
  workCondition: string;
};

const QUOTE_NOTE = "現地で確定見積";

export const rates: Rate[] = [
  {
    beeType: "アシナガバチ",
    basicPrice: "¥1,980〜",
    basicPriceNum: 1980,
    rangePrice: QUOTE_NOTE,
    workCondition: "巣のサイズ・高さ・場所により変動／現地で確定見積",
  },
  {
    beeType: "スズメバチ",
    basicPrice: "¥2,680〜",
    basicPriceNum: 2680,
    rangePrice: QUOTE_NOTE,
    workCondition: "巣のサイズ・高さ・場所により変動／現地で確定見積",
  },
  {
    beeType: "ミツバチ",
    basicPrice: "¥1,980〜",
    basicPriceNum: 1980,
    rangePrice: QUOTE_NOTE,
    workCondition: "取り出し難度・蜜量により変動／現地で確定見積",
  },
  {
    beeType: "オオスズメバチ",
    basicPrice: "¥2,680〜",
    basicPriceNum: 2680,
    rangePrice: QUOTE_NOTE,
    workCondition: "土中・樹洞・難所は要現地調査／現地で確定見積",
  },
  {
    beeType: "クマバチ・その他",
    basicPrice: "¥1,980〜",
    basicPriceNum: 1980,
    rangePrice: QUOTE_NOTE,
    workCondition: "巣のサイズ・場所により変動／現地で確定見積",
  },
];
