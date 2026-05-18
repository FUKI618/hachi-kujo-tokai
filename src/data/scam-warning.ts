/**
 * 「悪質業者の見抜き方」セクション SSOT
 * 根拠KW: 蜂の巣 駆除 ぼったくられた (vol 500) / ハチ駆除 悪徳 (450)
 *         ハチ駆除 トラブル (500) / 蜂駆除 高額請求 (0だがUSキャンセル意図)
 * 合計 vol ≈ 1,450（不安系巨大KW群）
 *
 * 戦略: 国民生活センター警告を冷静に提示し、当社の透明性を対比訴求
 */

export type ScamSign = {
  num: string;
  iconId: string;
  redFlag: string;
  description: string;
  ourCommitment: string;
};

export const scamSigns: ScamSign[] = [
  {
    num: "01",
    iconId: "warning",
    redFlag: "口頭でしか見積りを伝えない",
    description:
      "「だいたい○万円です」と曖昧に伝え、作業後に「現場で他の巣を発見した」「想定より大型だった」と追加請求する典型的な手口。国民生活センターには『4,000円見積→11万円請求』のような3倍超え事例が複数報告されています。",
    ourCommitment:
      "事前見積金額を書面または写真付きで明示。その範囲内で作業し、追加請求はいたしません（範囲外の作業は事前にご相談の上で再見積）。",
  },
  {
    num: "02",
    iconId: "warning",
    redFlag: "「今すぐやらないと危険」と煽る",
    description:
      "断りづらい状況を作り、相見積もりを取らせない常套句。実際にはアシナガバチの初期巣など、数日の猶予があるケースも多くあります。緊急性を盾に判断を急がせる業者は要警戒です。",
    ourCommitment:
      "蜂の種類・巣のサイズ・周辺環境を冷静にお伝えし、緊急性は事実ベースで判断。煽り営業は一切しません。",
  },
  {
    num: "03",
    iconId: "warning",
    redFlag: "出張費・キャンセル料を後から請求",
    description:
      "広告で「見積り無料」と訴求しつつ、断ると数千〜1万円の出張費・調査費を請求する事例が消費生活相談に多数寄せられています。契約前にキャンセル時の費用を明示しない業者は危険信号です。",
    ourCommitment:
      "出張費・現地調査費・見積り料・キャンセル料を書面で完全無料と保証。納得できなければその場でお断りいただけます。",
  },
];

export const scamWarningSource = {
  text: "国民生活センター『蜂の巣駆除に関する相談』",
  url: "https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen421.html",
};
