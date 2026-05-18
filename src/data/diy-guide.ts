/**
 * 「自分で駆除する前に」セクション SSOT
 * 根拠KW: 蜂の巣 駆除 小さい 自分で (vol 6,100) / 蜂の巣 駆除 自分で (600)
 *         蜂の巣駆除 スプレー (200) / 蜂の巣駆除 やり方 (70)
 *
 * 戦略: DIY検索層を「正しい判断軸」で受け止め、業者依頼が必要な層を自然に引き込む
 */

export type DiyCondition = {
  iconId: string; // SVG sprite id (i-*)
  label: string;
  description: string;
};

export const diyOkConditions: DiyCondition[] = [
  {
    iconId: "check-circle",
    label: "アシナガバチの小さい初期巣（直径5cm未満）",
    description:
      "5〜6月の女王蜂が単独で営巣中の段階。小さい巣で働き蜂が誕生する前なら市販の蜂用スプレーで対応できる場合があります。",
  },
  {
    iconId: "check-circle",
    label: "巣全体が目視できる位置にある",
    description:
      "軒下・庭木など、距離2〜3mから巣の入口がはっきり見える状態。退路の確保と複数人での作業が前提です。",
  },
  {
    iconId: "check-circle",
    label: "日没後・早朝の作業時間が取れる",
    description:
      "蜂は夜間活動が落ち着くため、薬剤散布の成功率が上がります。厚手の長袖・長ズボン・首回り保護が最低限の装備です。",
  },
];

export const diyNgConditions: DiyCondition[] = [
  {
    iconId: "warning",
    label: "スズメバチ・オオスズメバチ",
    description:
      "攻撃性と毒性が桁違いで、刺傷からアナフィラキシーで毎年15〜21人が死亡（厚労省人口動態統計）。種類が分からない場合も含め必ず業者へ。",
  },
  {
    iconId: "warning",
    label: "巣のサイズが10cm以上・働き蜂が見える",
    description:
      "働き蜂が数十匹以上いる規模で、市販スプレーでは制御不能です。集団攻撃で刺傷リスクが急上昇します。",
  },
  {
    iconId: "warning",
    label: "屋根裏・壁内・土中・高所の営巣",
    description:
      "巣の全容が見えず、薬剤が届かない位置にあります。専用機材（ファイバースコープ・薬剤噴霧器）が必須で、自力作業は二次被害につながります。",
  },
  {
    iconId: "warning",
    label: "蜂アレルギーの方が同居している",
    description:
      "万一の刺傷でアナフィラキシーのリスクがあるため、最初から24時間体制の専門業者に依頼するのが最も安全です。",
  },
];
