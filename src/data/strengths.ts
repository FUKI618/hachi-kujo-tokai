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
      "名古屋・近郊エリアに常駐するスタッフが最短30分で出動。当日中にハチ駆除完了。土日祝も同料金・追加なし。LINEは24時間受付。",
    featured: true,
  },
  {
    num: "02",
    iconId: "yen",
    title: "確定見積を<hl>厳守</hl>・<br>追加請求0円の明朗会計",
    highlight: "厳守",
    description:
      "「全国対応」をうたう業者の多くは、実際の作業を下請けに手配します。当社は名古屋・愛知の自社スタッフが直接施工。仲介手数料がのらないぶん適正価格（基本1,680円〜）で、確定見積の範囲内で作業し、1円も追加請求しません。",
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
