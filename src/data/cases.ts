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
  },
  {
    id: "case-02",
    imageBase: "case-02",
    beeType: "アシナガバチ",
    area: "岐阜市",
    location: "ベランダ 2m",
    title: "ベランダ手すりのアシナガ巣を駆除",
    priceJpy: 9800,
  },
  {
    id: "case-03",
    imageBase: "case-03",
    beeType: "ミツバチ",
    area: "浜松市中央区",
    location: "屋根裏",
    title: "屋根裏のミツバチ大規模巣を撤去",
    priceJpy: 28000,
  },
  {
    id: "case-04",
    imageBase: "case-04",
    beeType: "オオスズメバチ",
    area: "四日市市",
    location: "土中営巣",
    title: "庭先土中のオオスズメバチ駆除",
    priceJpy: 35000,
  },
  {
    id: "case-05",
    imageBase: "case-05",
    beeType: "アシナガバチ",
    area: "一宮市",
    location: "庭木 1.5m",
    title: "庭木のアシナガバチを早期発見・駆除",
    priceJpy: 7500,
  },
  {
    id: "case-06",
    imageBase: "case-06",
    beeType: "スズメバチ",
    area: "桑名市",
    location: "庭茂み",
    title: "庭の茂みに隠れた25cmスズメバチ巣",
    priceJpy: 29800,
  },
];
