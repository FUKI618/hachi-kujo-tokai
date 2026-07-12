/**
 * 料金表 SSOT
 * 5種類×（基本料金 / 想定価格帯 / 作業条件）
 *
 * 価格戦略（2026-07改定・標準ケース上限つきモデル）:
 * - 料金相場（当社調べ）: アシナガバチ 8,000〜20,000円 / スズメバチ 15,000〜30,000円が中心。
 * - 標準ケース上限: アシナガ 19,800円 / スズメ 29,800円（その他・難所は現地見積で確定）。
 * - 確定見積の範囲内で作業し追加請求なし。下限のみを主役化した釣り表示はしない方針。
 *   rangePrice は「現地確認後の確定見積でご提示」に統一（可視コピーで下限を主役化しない）。
 * - basicPrice/basicPriceNum は JSON-LD Offer 用の「標準ケース上限」（アシナガ19,800/スズメ29,800）。
 *   下限額（¥1,680/¥2,680）は撤去。可視コピーも機械層も上限主役。その他・難所は現地見積。
 */

export type Rate = {
  beeType: string;
  basicPrice: string;
  basicPriceNum: number; // JSON-LD Offer price 用の数値（種別の下限額）
  rangePrice: string;
  workCondition: string;
};

const QUOTE_NOTE = "現地で確定見積";

export const rates: Rate[] = [
  {
    beeType: "アシナガバチ",
    basicPrice: "上限19,800円",
    basicPriceNum: 19800,
    rangePrice: QUOTE_NOTE,
    workCondition: "標準ケース上限19,800円／巣のサイズ・場所により変動・現地で確定見積",
  },
  {
    beeType: "スズメバチ",
    basicPrice: "上限29,800円",
    basicPriceNum: 29800,
    rangePrice: QUOTE_NOTE,
    workCondition: "標準ケース上限29,800円／巣のサイズ・場所により変動・現地で確定見積",
  },
  {
    beeType: "ミツバチ",
    basicPrice: "現地見積",
    basicPriceNum: 29800,
    rangePrice: QUOTE_NOTE,
    workCondition: "屋根裏・壁内の大規模巣は現地見積／確定見積の範囲内で作業",
  },
  {
    beeType: "オオスズメバチ",
    basicPrice: "現地見積",
    basicPriceNum: 29800,
    rangePrice: QUOTE_NOTE,
    workCondition: "土中・樹洞・難所は上限外・現地見積／確定見積の範囲内で作業",
  },
  {
    beeType: "クマバチ・その他",
    basicPrice: "現地見積",
    basicPriceNum: 19800,
    rangePrice: QUOTE_NOTE,
    workCondition: "種類・巣の場所により変動／現地で確定見積",
  },
];
