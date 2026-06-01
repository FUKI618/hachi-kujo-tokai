/**
 * 蜂の種類 SSOT
 * 6種。蜂種別カードと比較表の両方で使用
 */

export type DangerLevel = "high" | "highest" | "medium" | "low";

export type BeeType = {
  id: string;
  name: string;
  imageBase: string; // public/images/bee-types/{id}.webp
  dangerLevel: DangerLevel;
  dangerLabel: string;
  dangerBars: 1 | 2 | 3 | 4 | 5;
  description: string;
  activeMonths: string;
  nestLocation: string;
  nestAppearance: string;
  priceRange: string;
};

export const beeTypes: BeeType[] = [
  {
    id: "suzumebachi",
    name: "スズメバチ",
    imageBase: "suzumebachi",
    dangerLevel: "high",
    dangerLabel: "攻撃性 大",
    dangerBars: 4,
    description:
      "7〜10月に活動活発化、特に9月中旬〜10月中旬は新女王誕生で攻撃性が極大化。日本の蜂刺傷死亡者の主因（年15〜21人）。見つけたら近づかずすぐご連絡を。",
    activeMonths: "4〜11月",
    nestLocation: "軒下・木の枝・屋根裏",
    nestAppearance: "マーブル模様の球状",
    priceRange: "¥2,680〜",
  },
  {
    id: "oosuzumebachi",
    name: "オオスズメバチ",
    imageBase: "oosuzumebachi",
    dangerLevel: "highest",
    dangerLabel: "極めて高い危険性",
    dangerBars: 5,
    description:
      "日本最大のハチ（女王40〜50mm）、毒性LD50 4.1mg/kgで通常のスズメバチの約2倍。土中・樹洞に大型巣を作り、自力駆除はほぼ不可能。専門業者の対応が必須です。",
    activeMonths: "4〜11月",
    nestLocation: "土中・樹洞",
    nestAppearance: "地中に隠れる大型巣",
    priceRange: "¥2,680〜",
  },
  {
    id: "ashinagabachi",
    name: "アシナガバチ",
    imageBase: "ashinagabachi",
    dangerLevel: "medium",
    dangerLabel: "攻撃性 中",
    dangerBars: 3,
    description:
      "軒下・ベランダで多く見られる種。刺激しなければ大人しいが、巣に近づくと危険です。",
    activeMonths: "4〜10月",
    nestLocation: "軒下・ベランダ・庭木",
    nestAppearance: "シャワー状の小ぶり巣",
    priceRange: "¥1,680〜",
  },
  {
    id: "mitsubachi",
    name: "ミツバチ",
    imageBase: "mitsubachi",
    dangerLevel: "low",
    dangerLabel: "攻撃性 小",
    dangerBars: 2,
    description:
      "屋根裏や壁内に大規模な巣を作ることがあり、放置すると蜜の流出で住宅被害が発生します。",
    activeMonths: "3〜11月",
    nestLocation: "屋根裏・壁内・床下",
    nestAppearance: "蜜入りの大規模巣",
    priceRange: "¥1,680〜",
  },
  {
    id: "kumabachi",
    name: "クマバチ",
    imageBase: "kumabachi",
    dangerLevel: "low",
    dangerLabel: "攻撃性 小",
    dangerBars: 1,
    description:
      "木材に穴を開けて営巣する大型ハチ。ウッドデッキや軒先の柱を好む傾向があります。",
    activeMonths: "5〜9月",
    nestLocation: "木材の穴",
    nestAppearance: "木材に開いた穴",
    priceRange: "¥1,680〜",
  },
  {
    id: "dorobachi",
    name: "ドロバチ・その他",
    imageBase: "dorobachi",
    dangerLevel: "low",
    dangerLabel: "攻撃性 小",
    dangerBars: 1,
    description:
      "泥で巣を作る種や、小型のハチ全般に対応。種類が分からなくても判別から承ります。",
    activeMonths: "5〜10月",
    nestLocation: "外壁・換気口",
    nestAppearance: "泥で固めた小型巣",
    priceRange: "¥1,680〜",
  },
];
