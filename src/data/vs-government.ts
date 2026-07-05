/**
 * 「市役所では無料駆除してもらえる？」比較セクション SSOT
 * 根拠KW: 蜂の巣駆除 市役所 無料 (vol 3,900) / 蜂の巣駆除 市役所 (500)
 *         蜂の巣駆除 補助金 (300) / 蜂駆除 市役所 (150)
 * 合計 vol ≈ 4,850（市役所系の最大需要KW群）
 *
 * 結論: 「市役所は原則無料じゃない」を冷静に提示し、業者依頼の合理性を可視化する
 */

export type VsGovState = "us-ok" | "warn" | "bad";

export type VsGovRow = {
  label: string;
  government: { state: VsGovState; text: string };
  us: { state: VsGovState; text: string };
};

export const vsGovernmentRows: VsGovRow[] = [
  {
    label: "駆除費用",
    government: {
      state: "warn",
      text: "原則として自己負担（一部市町村でアシナガ等に補助金あり）",
    },
    us: { state: "us-ok", text: "基本¥1,680〜・事前見積金額厳守" },
  },
  {
    label: "出動速度",
    government: { state: "bad", text: "平日日中のみ・申請から数日〜数週間" },
    us: { state: "us-ok", text: "最短30分・土日祝も出動" },
  },
  {
    label: "サービス内容",
    government: {
      state: "bad",
      text: "相談・業者紹介・スプレー貸出が中心、駆除作業は対象外が多い",
    },
    us: { state: "us-ok", text: "自社スタッフが駆除作業まで完遂" },
  },
  {
    label: "対応種類",
    government: {
      state: "warn",
      text: "スズメバチに限定する市町村が多い",
    },
    us: {
      state: "us-ok",
      text: "スズメバチ・アシナガバチ・ミツバチ全種",
    },
  },
  {
    label: "土日・夜間",
    government: { state: "bad", text: "対応不可" },
    us: { state: "us-ok", text: "追加料金なしで対応" },
  },
  {
    label: "見積・キャンセル",
    government: { state: "warn", text: "相談は無料だが日程確保が困難" },
    us: { state: "us-ok", text: "出張・見積・キャンセル料すべて無料" },
  },
];

/** 主要市町村の補助金事情（要事実確認・2026-05 時点の一般情報） */
export const subsidyNote = {
  text: "対応エリア（愛知・岐阜・三重）の補助金事情の概要（2026年5月時点）",
  bullets: [
    "名古屋市など主要都市は、原則として駆除費用への補助金制度なし",
    "岐阜県・三重県の一部市町村でスズメバチ・アシナガバチに数千円〜1万円程度の助成あり",
    "申請手続きに数日〜数週間を要するため、即日駆除を求めるなら専門業者が最短",
    "正確な金額・要件はお住まいの市町村の環境課にご確認ください",
  ],
};
