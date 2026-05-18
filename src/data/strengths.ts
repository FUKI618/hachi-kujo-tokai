/**
 * 強み3点 SSOT
 */

export type Strength = {
  num: string;
  iconId: string;
  title: string;
  highlight: string;
  description: string;
  featured?: boolean;
};

export const strengths: Strength[] = [
  {
    num: "01",
    iconId: "lightning",
    title: "最短<hl>30分</hl>で現地到着",
    highlight: "30分",
    description:
      "東海4県にハチ駆除スタッフが常駐。お電話受付から最短30分で出動し、当日中にハチ駆除を完了します。24時間対応で夜間・早朝でも追加料金なし。",
  },
  {
    num: "02",
    iconId: "yen",
    title: "基本<hl>3,300円</hl>〜・<br>事前見積金額厳守",
    highlight: "3,300円",
    description:
      "ハチ駆除の基本料金3,300円〜。現場到着後にお伝えした金額が最終金額で、作業後の追加請求は1円もありません。他社見積より高ければご相談ください。",
    featured: true,
  },
  {
    num: "03",
    iconId: "shield",
    title: "<hl>1年間</hl>の再発保証付き",
    highlight: "1年間",
    description:
      "ハチ駆除後1年以内に同一箇所で再営巣した場合は無料で再駆除。忌避剤散布で再発予防までフォローし、戻ってくるリスクも最小化。1億円の損害賠償保険にも加入済みです。",
  },
];
