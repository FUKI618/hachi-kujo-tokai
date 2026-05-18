/**
 * 料金にまつわる3つの約束 SSOT
 */

export type Promise = {
  num: string;
  iconId: string;
  title: string;
  description: string;
};

export const promises: Promise[] = [
  {
    num: "①",
    iconId: "shield",
    title: "作業前に確定見積",
    description:
      "現場到着後、その場で <strong>最終金額</strong> を提示します。お伝えした金額の範囲内で作業し、<strong>追加請求はいたしません</strong>（範囲変更時は事前にご相談）。",
  },
  {
    num: "②",
    iconId: "yen",
    title: "他社より高ければご相談",
    description:
      "他社見積より <strong>高い場合はご相談</strong> ください。中間業者を挟まない自社直接対応で <strong>業界相場より平均20〜30%お得</strong> な料金を実現しています<small style=\"font-size:.85em;opacity:.75;\">（※自社調べ・2026年5月時点）</small>。",
  },
  {
    num: "③",
    iconId: "check-circle",
    title: "納得できなければ無料",
    description:
      "出張費・見積り・キャンセル料は<strong>全て無料</strong>。金額にご納得いただけなければ、その場でお断りいただけます。",
  },
];
