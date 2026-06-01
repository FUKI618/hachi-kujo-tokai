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
      "東海4県常駐スタッフが最短30分で出動。当日中にハチ駆除完了。24時間365日対応で夜間・早朝も追加料金なし。",
  },
  {
    num: "02",
    iconId: "yen",
    title: "基本<hl>1,680円</hl>〜・<br>事前見積金額厳守",
    highlight: "1,680円",
    description:
      "ハチ駆除の基本料金1,680円〜。中間業者を挟まない自社直接価格です。現地でお伝えした確定金額の範囲内で作業し、1円も追加請求しません。他社見積より高ければご相談ください。",
    featured: true,
  },
  {
    num: "03",
    iconId: "shield",
    title: "<hl>1年間</hl>の再発保証付き",
    highlight: "1年間",
    description:
      "1年以内に同一箇所で再営巣した場合は無料で再駆除。忌避剤散布で予防までフォローし、戻りバチのリスクも最小化します。",
  },
];
