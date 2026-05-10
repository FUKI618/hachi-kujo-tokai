/**
 * 料金表 SSOT
 * 5種類×（基本料金 / 想定価格帯 / 作業条件）
 */

export type Rate = {
  beeType: string;
  basicPrice: string;
  rangePrice: string;
  workCondition: string;
};

export const rates: Rate[] = [
  {
    beeType: "アシナガバチ",
    basicPrice: "¥3,300〜",
    rangePrice: "¥8,800〜¥38,000",
    workCondition: "巣のサイズ・高さ・場所による",
  },
  {
    beeType: "スズメバチ",
    basicPrice: "¥3,300〜",
    rangePrice: "¥18,000〜¥58,000",
    workCondition: "巣のサイズ・高さ・場所による",
  },
  {
    beeType: "ミツバチ",
    basicPrice: "¥3,300〜",
    rangePrice: "¥18,000〜¥58,000",
    workCondition: "取り出し難度・蜜量による",
  },
  {
    beeType: "オオスズメバチ",
    basicPrice: "¥3,300〜",
    rangePrice: "¥28,000〜¥88,000",
    workCondition: "土中・樹洞・難所は要現地調査",
  },
  {
    beeType: "クマバチ・その他",
    basicPrice: "¥3,300〜",
    rangePrice: "¥8,800〜¥38,000",
    workCondition: "巣のサイズ・場所による",
  },
];
