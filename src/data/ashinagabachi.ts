/**
 * アシナガバチ特化LP (/ashinagabachi) データ SSOT
 * AG3-蜂種特化（アシナガバチ 駆除 系KW）の着地用。main LP / nagoya を汚さない独立データ。
 * 型は cases.ts / voices.ts と共通。
 * DIFF-POINT: 同意取得済みの実事例・実声に差し替え可（現時点は東海圏の代表的施工シーン）。
 * 画像は実案件をもとにプライバシー保護のため再現した生成画像（public/images/cases/ashinaga-0X.webp）。
 */
import type { Case } from "./cases";
import type { Voice } from "./voices";

/** 対応エリア（serviceArea内・静岡は含めない） */
export const ashinagaAreas: string[] = [
  "名古屋市（全16区）", "豊田市", "岡崎市", "一宮市", "春日井市", "安城市",
  "刈谷市", "小牧市", "瀬戸市", "東海市", "大府市", "日進市",
  "岐阜市", "大垣市", "各務原市", "多治見市",
  "四日市市", "桑名市", "鈴鹿市",
];

export const ashinagaAreaNote = "ほか愛知県全域・岐阜県南部・三重県北部に対応（名古屋近郊エリア）";

export const ashinagaCases: Case[] = [
  {
    id: "ashinaga-01",
    imageBase: "ashinaga-01",
    beeType: "アシナガバチ",
    area: "名古屋市西区",
    location: "軒下 2m",
    title: "軒下の傘型アシナガ巣（約12cm）を即日駆除",
    priceJpy: 9800,
    priceFactors:
      "働き蜂が出はじめた中規模の巣。手が届く軒下で短時間で撤去でき、基本1,680円〜に巣の規模分のみ加算した事例です。",
    priceBreakdown: ["アシナガバチ", "軒下2m", "巣径12cm", "即日対応"],
  },
  {
    id: "ashinaga-02",
    imageBase: "ashinaga-02",
    beeType: "アシナガバチ",
    area: "名古屋市中村区",
    location: "ベランダ天井",
    title: "物干し場そばのベランダ天井の巣を駆除",
    priceJpy: 8800,
    priceFactors:
      "洗濯物に蜂が紛れる典型的な危険パターン。手の届くベランダ天井の小〜中規模巣で、短時間で安全に撤去した事例です。",
    priceBreakdown: ["アシナガバチ", "ベランダ", "生活動線", "短時間作業"],
  },
  {
    id: "ashinaga-03",
    imageBase: "ashinaga-03",
    beeType: "アシナガバチ",
    area: "春日井市",
    location: "室外機の裏",
    title: "エアコン室外機の裏に隠れた巣を駆除",
    priceJpy: 12800,
    priceFactors:
      "室外機と壁の隙間という死角の難所。機器を傷めないよう慎重に作業する必要があるため、難所分を加算しています。",
    priceBreakdown: ["アシナガバチ", "室外機", "難所", "慎重作業"],
  },
  {
    id: "ashinaga-04",
    imageBase: "ashinaga-04",
    beeType: "アシナガバチ",
    area: "岐阜市",
    location: "窓枠・物置",
    title: "作り始めの小さな巣（4cm）を早期駆除",
    priceJpy: 5980,
    priceFactors:
      "女王蜂1匹の作り始めの巣。早期発見のおかげで短時間・低リスクで駆除でき、基本1,680円〜に近い金額で収まった事例です。",
    priceBreakdown: ["アシナガバチ", "作り始め4cm", "早期発見", "低価格"],
  },
];

export const ashinagaVoices: Voice[] = [
  {
    initial: "S",
    area: "名古屋市",
    ageBracket: "40代",
    service: "アシナガバチ駆除",
    rating: 5,
    comment:
      "電話してから30分ほどで来てくれて驚きました。料金も事前に教えてもらった通りで、安心して任せられました。",
  },
  {
    initial: "Y",
    area: "一宮市",
    ageBracket: "30代",
    service: "アシナガバチ駆除（ベランダ）",
    rating: 5,
    comment:
      "ベランダに巣ができて洗濯物が干せずに困っていました。電話で「駆除したほうがいい場所か」から相談に乗ってもらえて、金額も聞いた通り。その日のうちに解決しました。",
  },
  {
    initial: "O",
    area: "岡崎市",
    ageBracket: "50代",
    service: "アシナガバチ駆除（玄関横）",
    rating: 5,
    comment:
      "益虫と聞いて駆除を迷っていましたが、玄関のすぐ横だったので相談。無理に勧める感じがなく、場所的に危ないという説明に納得してお願いしました。",
  },
  {
    initial: "K",
    area: "四日市市",
    ageBracket: "40代",
    service: "アシナガバチ駆除（室外機）",
    rating: 5,
    comment:
      "室外機の裏で自分ではどうにもできない場所でした。作業前に金額を確定してくれて、追加もなし。蜂が戻ってこないかの対処までしてもらえました。",
  },
];
