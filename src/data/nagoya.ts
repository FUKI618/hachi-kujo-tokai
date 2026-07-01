/**
 * 名古屋専用LP (/nagoya) データ SSOT
 * main LP を汚さないための独立データ。型は cases.ts / voices.ts と共通。
 * DIFF-POINT: 同意取得済みの実事例・実声に差し替え可（現時点は名古屋圏の代表的施工シーン）。
 * 画像は「※写真はイメージです」前提の生成画像（public/images/cases/nagoya-0X.webp）。
 */
import type { Case } from "./cases";
import type { Voice } from "./voices";

/** 名古屋市16区（対応エリア明示用） */
export const nagoyaWards: string[] = [
  "千種区", "東区", "北区", "西区", "中村区", "中区", "昭和区", "瑞穂区",
  "熱田区", "中川区", "港区", "南区", "守山区", "緑区", "名東区", "天白区",
];

/** 名古屋近郊（serviceArea内・静岡は含めない） */
export const nagoyaNearby: string[] = [
  "日進市", "長久手市", "尾張旭市", "春日井市", "清須市", "あま市", "大治町", "豊明市",
];

export const nagoyaCases: Case[] = [
  {
    id: "nagoya-01",
    imageBase: "nagoya-01",
    beeType: "スズメバチ",
    area: "名古屋市千種区",
    location: "軒下 2.5m",
    title: "軒下のスズメバチ巣（約25cm）を即日撤去",
    priceJpy: 24000,
    priceFactors:
      "攻撃性の高いスズメバチ＋脚立を要する軒下2.5m。防護装備での慎重作業のため、基本2,680円〜にサイズ・高所分を加算しています。",
    priceBreakdown: ["スズメバチ", "巣径25cm", "高所2.5m", "即日対応"],
  },
  {
    id: "nagoya-02",
    imageBase: "nagoya-02",
    beeType: "アシナガバチ",
    area: "名古屋市中区",
    location: "ベランダ手すり",
    title: "マンションのベランダ手すりのアシナガ巣を駆除",
    priceJpy: 8800,
    priceFactors:
      "手が届く高さのベランダ手すりの小〜中規模巣。短時間で安全に撤去でき、基本1,680円〜に巣の規模分のみ加算した事例です。",
    priceBreakdown: ["アシナガバチ", "ベランダ", "短時間作業"],
  },
  {
    id: "nagoya-03",
    imageBase: "nagoya-03",
    beeType: "スズメバチ",
    area: "名古屋市緑区",
    location: "庭木 2m",
    title: "庭木に隠れたスズメバチ巣を駆除",
    priceJpy: 22000,
    priceFactors:
      "枝葉に隠れ全容確認に手間がかかった庭木のスズメバチ巣。視界が悪く刺傷リスクの高い環境での慎重作業のため、サイズ・難所性分を加算しています。",
    priceBreakdown: ["スズメバチ", "庭木2m", "難所", "慎重作業"],
  },
  {
    id: "nagoya-04",
    imageBase: "nagoya-04",
    beeType: "アシナガバチ",
    area: "名古屋市名東区",
    location: "物置・軒",
    title: "物置の軒にできたアシナガ巣を早期駆除",
    priceJpy: 7800,
    priceFactors:
      "働き蜂が増える前に早期発見できた、手の届く物置の軒の小さな巣。短時間で安全に駆除でき、基本1,680円〜に近い金額で収まった事例です。",
    priceBreakdown: ["アシナガバチ", "物置", "早期発見", "小規模巣"],
  },
  {
    id: "nagoya-05",
    imageBase: "nagoya-05",
    beeType: "ミツバチ",
    area: "名古屋市天白区",
    location: "屋根裏",
    title: "屋根裏のミツバチ巣を撤去・再発防止",
    priceJpy: 28000,
    priceFactors:
      "屋根裏内部の巣。蜜と巣板の撤去・清掃まで含む難所作業で、放置すると蜜漏れによる住宅被害につながるため、回収量と作業範囲に応じた金額です。",
    priceBreakdown: ["ミツバチ", "屋根裏", "蜜・巣板撤去", "再発防止"],
  },
  {
    id: "nagoya-06",
    imageBase: "nagoya-06",
    beeType: "スズメバチ",
    area: "名古屋市守山区",
    location: "換気口まわり",
    title: "換気口まわりのスズメバチ巣を安全に撤去",
    priceJpy: 26000,
    priceFactors:
      "壁の換気口まわりに営巣し出入りが激しかったスズメバチ巣。狭所での慎重作業と再侵入対策のため、サイズ・難所性分を加算しています。",
    priceBreakdown: ["スズメバチ", "換気口", "狭所", "再侵入対策"],
  },
];

export const nagoyaVoices: Voice[] = [
  {
    initial: "S", area: "名古屋市中区", ageBracket: "40代", service: "アシナガバチ駆除", rating: 5,
    comment:
      "電話してから30分ほどで来てくれて驚きました。料金も事前に教えてもらった通りで、安心して任せられました。",
  },
  {
    initial: "H", area: "名古屋市千種区", ageBracket: "50代", service: "スズメバチ駆除", rating: 5,
    comment:
      "軒下の大きな巣で不安でしたが、現地で金額を提示してもらい、その金額から一切上がらず明朗でした。名古屋の会社ですぐ来てもらえて助かりました。",
  },
  {
    initial: "Y", area: "名古屋市緑区", ageBracket: "30代", service: "スズメバチ駆除", rating: 5,
    comment:
      "小さい子どもがいるので急いでいましたが、当日中に対応してもらえました。作業も丁寧で、追加請求もなく安心できました。",
  },
  {
    initial: "T", area: "名古屋市名東区", ageBracket: "60代", service: "アシナガバチ駆除", rating: 5,
    comment:
      "早めに相談したら小さいうちに安く駆除できました。地元の会社で顔が見えるので、また何かあればお願いしたいです。",
  },
];
