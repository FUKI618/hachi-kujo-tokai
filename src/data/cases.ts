/**
 * 駆除事例 SSOT（6件）
 * DIFF-POINT: 屋号確定後にリアル事例へ差し替え
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
    imageBase: "case-01",
    beeType: "スズメバチ",
    area: "名古屋市瑞穂区",
    location: "軒下 2.5m",
    title: "軒下のスズメバチ巣（25cm）を即日撤去",
    priceJpy: 25000,
    priceFactors:
      "スズメバチ＋巣径25cmの成熟巣＋脚立を要する高さ2.5m。攻撃性が高く防護装備での慎重作業が必要なため、基本2,680円〜にサイズ・高所分が加算されています。",
    priceBreakdown: ["スズメバチ", "巣径25cm", "高所2.5m", "即日対応"],
  },
  {
    id: "case-02",
    imageBase: "case-02",
    beeType: "アシナガバチ",
    area: "岐阜市",
    location: "ベランダ 2m",
    title: "ベランダ手すりのアシナガ巣を駆除",
    priceJpy: 9800,
    priceFactors:
      "比較的おとなしいアシナガバチで、手が届く高さ2mのベランダ手すり。短時間で安全に撤去でき、基本1,980円〜に巣の規模分のみ加算した事例です。",
    priceBreakdown: ["アシナガバチ", "高さ2m", "短時間作業"],
  },
  {
    id: "case-03",
    imageBase: "case-03",
    beeType: "ミツバチ",
    area: "浜松市中央区",
    location: "屋根裏",
    title: "屋根裏のミツバチ大規模巣を撤去",
    priceJpy: 28000,
    priceFactors:
      "屋根裏内部に作られた大規模巣。蜜と巣板の撤去・清掃まで含む難所作業で、放置すると蜜漏れによる住宅被害につながるため、回収量と作業範囲に応じた金額です。",
    priceBreakdown: ["ミツバチ", "屋根裏", "大規模巣", "蜜・巣板撤去"],
  },
  {
    id: "case-04",
    imageBase: "case-04",
    beeType: "オオスズメバチ",
    area: "四日市市",
    location: "土中営巣",
    title: "庭先土中のオオスズメバチ駆除",
    priceJpy: 35000,
    priceFactors:
      "日本最大・最も危険なオオスズメバチの土中営巣。掘削装備と専用薬剤を要し自力駆除はほぼ不可能。危険度・難所性が最も高い区分のため、当社事例で最高額帯となっています。",
    priceBreakdown: ["オオスズメバチ", "土中営巣", "掘削・専用薬剤", "高難度"],
  },
  {
    id: "case-05",
    imageBase: "case-05",
    beeType: "アシナガバチ",
    area: "一宮市",
    location: "庭木 1.5m",
    title: "庭木のアシナガバチを早期発見・駆除",
    priceJpy: 7500,
    priceFactors:
      "働き蜂が増える前に早期発見できた、手の届く庭木1.5mの小さな巣。短時間で安全に駆除でき、基本1,980円〜に近い金額で収まった事例です。早く相談するほど安くなる典型例。",
    priceBreakdown: ["アシナガバチ", "庭木1.5m", "早期発見", "小規模巣"],
  },
  {
    id: "case-06",
    imageBase: "case-06",
    beeType: "スズメバチ",
    area: "桑名市",
    location: "庭茂み",
    title: "庭の茂みに隠れた25cmスズメバチ巣",
    priceJpy: 29800,
    priceFactors:
      "茂みに隠れ巣の全容確認に手間がかかった25cmのスズメバチ巣。視界が悪く刺傷リスクの高い環境での慎重作業のため、サイズ＋難所性分が加算された金額です。",
    priceBreakdown: ["スズメバチ", "巣径25cm", "茂み・難所", "慎重作業"],
  },
];
