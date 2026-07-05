/**
 * 駆除の流れ SSOT（5ステップ）
 */

export type FlowStep = {
  num: number;
  title: string;
  description: string;
};

export const flowSteps: FlowStep[] = [
  {
    num: 1,
    title: "電話・LINE相談",
    description: "電話7時〜21時・LINEは24時間受付。写真添付で見積精度UP。",
  },
  {
    num: 2,
    title: "現地到着",
    description: "最短30分で名古屋・近郊エリアに出動します。",
  },
  {
    num: 3,
    title: "確定見積り",
    description: "作業前に金額を確定。納得後に作業開始。",
  },
  {
    num: 4,
    title: "駆除作業",
    description: "専用薬剤と防護装備で安全に駆除。",
  },
  {
    num: 5,
    title: "完了・保証",
    description: "作業完了確認後にお支払い。1年保証付き。",
  },
];
