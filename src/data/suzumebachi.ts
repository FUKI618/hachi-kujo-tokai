/**
 * スズメバチ特化LP (/suzumebachi) データ SSOT
 * AG7-スズメバチ特化（スズメバチ 駆除 系KW）の着地用。main LP / nagoya / ashinagabachi を汚さない独立データ。
 * 型は cases.ts / voices.ts と共通。エリアは ashinagabachi.ts と共有。
 * DIFF-POINT: 同意取得済みの実事例・実声に差し替え可（現時点は東海圏の代表的施工シーン）。
 * 画像は実案件をもとにプライバシー保護のため再現した生成画像（public/images/cases/suzume-0X.webp）。
 */
import type { Case } from "./cases";
import type { Voice } from "./voices";

export { ashinagaAreas as suzumeAreas, ashinagaAreaNote as suzumeAreaNote } from "./ashinagabachi";

/** スズメバチ4種の判別データ（既存記事 suzumebachi-tokushu と整合） */
export type BeeSpecies = {
  name: string;
  size: string;
  danger: number; // 1-5
  trait: string;
};

export const suzumeSpecies: BeeSpecies[] = [
  { name: "オオスズメバチ", size: "27〜45mm", danger: 5, trait: "世界最大級・毒量最多。土の中や木の根元に営巣。巣の半径10〜20mで警戒行動" },
  { name: "キイロスズメバチ", size: "17〜28mm", danger: 4, trait: "刺傷被害件数が最多。都市部の軒下・屋根裏に営巣し、巣は1,000匹規模まで拡大" },
  { name: "コガタスズメバチ", size: "22〜29mm", danger: 3, trait: "住宅街で最もよく見る。初期はとっくり型の巣。比較的温和だが巣を守る時は別" },
  { name: "モンスズメバチ", size: "21〜28mm", danger: 3, trait: "夜間も活動する数少ない種。屋根裏や壁の中など閉鎖空間を好む" },
];

/** プロの施工手順（専門性の証明・6ステップ） */
export type WorkStep = { step: string; detail: string };

export const suzumeSteps: WorkStep[] = [
  { step: "現地調査・種類の特定", detail: "巣の場所・大きさ・蜂の種類と動線を確認。ここで総額を確定します" },
  { step: "防護と薬剤の準備", detail: "専用防護服・機材を装着し、種類と巣の状態に合わせた薬剤を選定" },
  { step: "駆除", detail: "巣の中と周囲の蜂を薬剤で処理。蜂が残ったまま巣に触れることはありません" },
  { step: "巣の撤去", detail: "蜂がいなくなった巣を安全に取り外し、当社がそのまま回収・処分" },
  { step: "戻り蜂対策", detail: "駆除時に外出していた蜂が数日戻るため、薬剤処理とトラップで対処" },
  { step: "再発防止・1年保証", detail: "巣跡の処理と侵入口の封鎖まで実施。同じ場所の再発は無償対応" },
];

export const suzumeCases: Case[] = [
  {
    id: "suzume-01",
    imageBase: "suzume-01",
    beeType: "スズメバチ",
    area: "名古屋市守山区",
    location: "軒下 2.5m",
    title: "軒下のマーブル模様の巣（約25cm）を即日駆除",
    priceJpy: 24000,
    priceFactors:
      "働き蜂が増えた成熟巣。防護装備での慎重な作業と脚立を要する高さのため、サイズ・高所分を加算した事例です。",
    priceBreakdown: ["スズメバチ", "巣径25cm", "高所2.5m", "即日対応"],
  },
  {
    id: "suzume-02",
    imageBase: "suzume-02",
    beeType: "スズメバチ",
    area: "一宮市",
    location: "屋根裏",
    title: "屋根裏の奥のキイロスズメバチの巣を撤去（上限外・現地見積の難所例）",
    priceJpy: 38000,
    priceFactors:
      "「天井から羽音がする」とのご相談。点検口から届かない屋根裏の奥にあり、位置特定・狭所作業・侵入口の封鎖まで必要だった難所です。標準ケースの上限（スズメバチ29,800円）を超える上限外・現地見積の事例で、作業前に総額を確定してから着手しています。",
    priceBreakdown: ["キイロスズメバチ", "屋根裏の奥", "侵入口封鎖", "上限外・現地見積"],
  },
  {
    id: "suzume-03",
    imageBase: "suzume-03",
    beeType: "スズメバチ",
    area: "岐阜市",
    location: "軒下（初期）",
    title: "とっくり型の作り始めの巣を早期駆除",
    priceJpy: 11000,
    priceFactors:
      "女王蜂のみの初期段階で発見いただけた事例。スズメバチは初期でも自力駆除は危険ですが、費用は最も抑えられる時期です。",
    priceBreakdown: ["スズメバチ", "とっくり型初期", "早期発見", "低価格"],
  },
  {
    id: "suzume-04",
    imageBase: "suzume-04",
    beeType: "スズメバチ",
    area: "春日井市",
    location: "庭木 2m",
    title: "庭木の枝に隠れた巣（約20cm）を駆除",
    priceJpy: 22000,
    priceFactors:
      "枝葉に隠れて全容が見えず、剪定しながらの慎重な作業が必要だった事例。視界の悪い環境での駆除は難所分を加算しています。",
    priceBreakdown: ["スズメバチ", "庭木2m", "難所", "慎重作業"],
  },
];

export const suzumeVoices: Voice[] = [
  {
    initial: "T",
    area: "岐阜市",
    ageBracket: "50代",
    service: "スズメバチ駆除",
    rating: 5,
    comment:
      "上限が決まっていて総額の見通しが立つのが安心でした。現地で2万円台と確定し、その金額どおりで追加もなし。子どもがいるので即日対応も助かりました。",
  },
  {
    initial: "I",
    area: "一宮市",
    ageBracket: "40代",
    service: "スズメバチ駆除（屋根裏）",
    rating: 5,
    comment:
      "天井裏からブーンという音がして眠れませんでした。電話で症状を伝えると屋根裏の巣の可能性と説明され、当日中に特定から撤去まで。侵入口も塞いでもらえて音が消えました。",
  },
  {
    initial: "K",
    area: "四日市市",
    ageBracket: "60代",
    service: "オオスズメバチ駆除",
    rating: 5,
    comment:
      "土の中にあった巣で難しい依頼だったと思いますが、丁寧に説明してから作業してくれて安心できました。",
  },
  {
    initial: "M",
    area: "名古屋市",
    ageBracket: "30代",
    service: "スズメバチ駆除（軒下）",
    rating: 5,
    comment:
      "玄関の真上に巣ができて子どもを外に出せず困っていました。到着後、蜂の種類と作業の流れを先に説明してくれて、金額も聞いた通り。作業後の戻り蜂の注意点まで教えてもらえました。",
  },
];
