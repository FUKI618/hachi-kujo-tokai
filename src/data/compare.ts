/**
 * 他社との違い 比較表 SSOT
 * 8項目 × 3列（当社推奨 / 一般業者 / 仲介サイト）
 */

export type CompareCellState = "us-ok" | "warn" | "bad";

export type CompareRow = {
  label: string;
  us: { state: CompareCellState; text: string };
  general: { state: CompareCellState; text: string };
  intermediary: { state: CompareCellState; text: string };
};

export const compareRows: CompareRow[] = [
  {
    label: "到着までの時間",
    us: { state: "us-ok", text: "最短30分" },
    general: { state: "warn", text: "1〜2時間" },
    intermediary: { state: "bad", text: "翌日以降" },
  },
  {
    label: "ハチ駆除料金（標準）",
    us: { state: "us-ok", text: "¥3,300〜・見積厳守" },
    general: { state: "warn", text: "2〜6万円" },
    intermediary: { state: "bad", text: "3〜8万円" },
  },
  {
    label: "追加料金の有無",
    us: { state: "us-ok", text: "一切なし" },
    general: { state: "warn", text: "高所・夜間で発生" },
    intermediary: { state: "bad", text: "仲介手数料を上乗せ" },
  },
  {
    label: "見積り・キャンセル料",
    us: { state: "us-ok", text: "完全無料" },
    general: { state: "warn", text: "出張費発生あり" },
    intermediary: { state: "bad", text: "キャンセル料あり" },
  },
  {
    label: "再発保証",
    us: { state: "us-ok", text: "1年保証" },
    general: { state: "warn", text: "業者により異なる" },
    intermediary: { state: "bad", text: "保証なし／別料金" },
  },
  {
    label: "夜間・深夜対応",
    us: { state: "us-ok", text: "追加料金なし" },
    general: { state: "warn", text: "割増あり" },
    intermediary: { state: "bad", text: "対応不可が多い" },
  },
  {
    label: "損害賠償保険",
    us: { state: "us-ok", text: "1億円加入" },
    general: { state: "warn", text: "未加入の業者も" },
    intermediary: { state: "bad", text: "仲介先による" },
  },
  {
    label: "担当者の固定",
    us: { state: "us-ok", text: "自社スタッフ直行" },
    general: { state: "warn", text: "外注の場合あり" },
    intermediary: { state: "bad", text: "毎回変わる" },
  },
];
