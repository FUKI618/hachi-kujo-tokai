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
      "現場到着後、その場で <strong>最終金額</strong> を提示します。お伝えした金額に <strong>1円も追加</strong> しません。",
  },
  {
    num: "②",
    iconId: "yen",
    title: "他社より高ければご相談",
    description:
      "他社見積より <strong>1円でも高い場合はご相談</strong> ください。中間業者を挟まない自社直接対応で <strong>業界相場より平均20〜30%お得</strong> な料金を実現しています。",
  },
  {
    num: "③",
    iconId: "check-circle",
    title: "納得できなければ無料",
    description:
      "出張費・見積り・キャンセル料は<strong>全て無料</strong>。金額にご納得いただけなければ、その場でお断りいただけます。",
  },
];
