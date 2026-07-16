/**
 * 駆除事例 SSOT（6件）
 * main LP 上位6件は実際の蜂駆除写真を使用。
 * 金額・詳細住所は未確認のため、LP上では価格表示せず「現場写真」として扱う。
 */

export type Case = {
  id: string;
  imageBase: string;
  beeType: string;
  area: string;
  location: string;
  title: string;
  priceJpy: number;
  priceFactors: string; // なぜこの金額か（巣サイズ/高さ/難所/緊急などの価格決定要因）
  priceBreakdown: string[]; // 金額要因のバッジ（例: ["巣25cm","高所2.5m","即日"]）
};

export const cases: Case[] = [
  {
    id: "case-01",
    imageBase: "real-case-01",
    beeType: "スズメバチ",
    area: "実対応写真",
    location: "庭木・植栽",
    title: "庭木の中にできた大型の蜂の巣を確認",
    priceJpy: 25000,
    priceFactors:
      "実際の駆除現場写真。庭木・植栽の中に巣があり、接近時の刺傷リスクが高いケースです。",
    priceBreakdown: ["実写真", "庭木・植栽", "大型巣", "現地確認"],
  },
  {
    id: "case-02",
    imageBase: "real-case-02",
    beeType: "スズメバチ",
    area: "実対応写真",
    location: "軒下・外壁まわり",
    title: "外壁まわりの巣を高所確認して撤去",
    priceJpy: 9800,
    priceFactors:
      "実際の駆除現場写真。軒下・外壁まわりは生活動線に近く、早期対応が必要なケースです。",
    priceBreakdown: ["実写真", "軒下", "外壁まわり", "高所確認"],
  },
  {
    id: "case-03",
    imageBase: "real-case-03",
    beeType: "スズメバチ",
    area: "実対応写真",
    location: "配管・設備まわり",
    title: "配管近くの蜂の巣を安全確認して対応",
    priceJpy: 28000,
    priceFactors:
      "実際の駆除現場写真。配管・設備まわりは足場や作業姿勢の確認が必要です。",
    priceBreakdown: ["実写真", "配管まわり", "設備付近", "安全確認"],
  },
  {
    id: "case-04",
    imageBase: "real-case-04",
    beeType: "アシナガバチ",
    area: "実対応写真",
    location: "屋根・軒下",
    title: "軒下にできた初期巣を早めに撤去",
    priceJpy: 35000,
    priceFactors:
      "実際の駆除現場写真。小さく見えても巣に近づくと刺される可能性があり、早期対応が有効です。",
    priceBreakdown: ["実写真", "軒下", "初期巣", "早期対応"],
  },
  {
    id: "case-05",
    imageBase: "real-case-05",
    beeType: "スズメバチ",
    area: "実対応写真",
    location: "ベランダ・窓まわり",
    title: "生活動線に近い場所の巣を確認",
    priceJpy: 7500,
    priceFactors:
      "実際の駆除現場写真。窓・ベランダ付近は洗濯物や出入りの動線と近く、早めの確認が必要です。",
    priceBreakdown: ["実写真", "窓まわり", "生活動線", "現地確認"],
  },
  {
    id: "case-06",
    imageBase: "real-case-after",
    beeType: "撤去後",
    area: "実対応写真",
    location: "巣の撤去",
    title: "撤去した巣を回収し、戻り蜂対策へ",
    priceJpy: 29800,
    priceFactors:
      "実際の撤去後写真。巣の回収後、戻り蜂や同じ場所への再営巣を抑える処理を行います。",
    priceBreakdown: ["実写真", "撤去後", "巣の回収", "戻り蜂対策"],
  },
];
