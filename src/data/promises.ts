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
    title: "基本1,680円〜・他社より高ければご相談",
    description:
      "基本料金 <strong>1,680円〜</strong>。<strong>広告代理店も中間業者も挟まない自社直接対応</strong>だから、品質はそのままに相場より大幅に抑えた価格を実現できます。他社見積より <strong>高い場合はご相談</strong> ください。",
  },
  {
    num: "③",
    iconId: "check-circle",
    title: "納得できなければ無料",
    description:
      "出張費・見積り・キャンセル料は<strong>全て無料</strong>。金額にご納得いただけなければ、その場でお断りいただけます。",
  },
];
