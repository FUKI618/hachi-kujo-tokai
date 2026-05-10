/**
 * お客様の声 SSOT（4件）
 * DIFF-POINT: 屋号確定後に同意取得済みのリアル声に差し替え
 */

export type Voice = {
  initial: string;
  area: string;
  ageBracket: string;
  service: string;
  rating: 5;
  comment: string;
};

export const voices: Voice[] = [
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
    initial: "T",
    area: "岐阜市",
    ageBracket: "50代",
    service: "スズメバチ駆除",
    rating: 5,
    comment:
      "他社では4万円と言われた巣が、こちらでは2万円台で済みました。子どもがいるので即日対応してもらえて助かりました。",
  },
  {
    initial: "M",
    area: "浜松市",
    ageBracket: "30代",
    service: "ミツバチ駆除",
    rating: 5,
    comment:
      "屋根裏のミツバチが何度も戻ってきて困っていましたが、再発防止までしっかりやっていただき感謝しています。",
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
];
