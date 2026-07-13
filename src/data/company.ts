/**
 * 会社情報 SSOT
 * DIFF-POINT: 屋号・住所・電話番号・代表者は確定後に差し替え
 *
 * 計測ID: tracking 内の空文字を取得後の実IDに差し替え。
 * gtmId 未設定でも ga4Id 単体で計測動作する。
 * 形式: GTM-xxxxxxx / G-xxxxxxxxxx / AW-xxxxxxxxx
 */

export const tracking = {
  gtmId: "",                          // Google Tag Manager コンテナID (未取得)
  ga4Id: "G-J7KDB57HSR",              // GA4 Measurement ID (Property: hachi-factory.jp)
  gadsConversionId: "AW-18192398472", // Google Ads コンバージョンID (Customer 988-017-7192)
  clarityProjectId: "wxq8w9y6xv",     // Microsoft Clarity Project ID
  /**
   * Google Ads コンバージョンラベル
   * Action ID は Google Ads アカウント (988-017-7192) で発行済
   * - LP_電話タップ:    PHONE_CALL_LEAD / Primary
   * - LP_LINE_クリック: SUBMIT_LEAD_FORM / Primary
   * - LP_フォーム送信:   未作成 (現状LPにフォームなし)
   */
  gadsConversionLabels: {
    phoneClick: "IrFkCMiIqrQcEIjx5-JD",  // LP_電話タップ
    lineClick: "dR_YCK-yqrQcEIjx5-JD",   // LP_LINE_クリック
    formSubmit: "",                       // 未作成
  },
} as const;

export const company = {
  name: "蜂の巣駆除ファクトリー東海",
  legalName: "株式会社LIV",
  representative: "水谷虎毅",
  phone: "0120-468-434",
  phoneDisplay: "0120-468-434",
  phoneTelLink: "tel:0120468434",
  lineUrl: "https://line.me/R/ti/p/@318yzauf",
  address: {
    postal: "460-0002",
    region: "愛知県",
    city: "名古屋市中区",
    street: "丸の内3丁目6-11",
  },
  hours: "お電話 7:00〜21:00／LINEは24時間受付",
  phoneHours: "7:00〜21:00",
  businessType: "蜂・蜂の巣駆除／害虫駆除／再発防止施工",
  serviceArea: "愛知県全域＋岐阜県南部・三重県北部（名古屋近郊エリア）",
  payment: ["現金", "銀行振込", "クレジットカード", "PayPay", "後払い"],
  insurance: "",
  // ⚠️ 未確定値は 0 にしてある。広告コピー化前に必ず実数を user に確認すること
  yearsInBusiness: 0,   // 未確定 (旧:15は placeholder)
  totalCases: 0,        // 未確定 (旧:12800は placeholder)
  satisfactionRate: 0,  // 未確定 (旧:4.9 は placeholder)
  sameDayRate: 98,      // 確定済
  liabilityCoverage: "",
  guaranteeYears: 1,
  fastestArrival: "30分",
  // 料金モデル（標準ケース上限つき：アシナガ19,800円・スズメ29,800円／その他の蜂種・難所は現地見積）は
  // src/data/rates.ts が SSOT。相場（当社調べ）はアシナガ8,000〜20,000円・スズメ15,000〜30,000円が中心。
  // 下限額を主役化する釣り表示はしない方針のため、旧 basicPrice:1680（休眠値）は撤去。
  geo: {
    lat: 35.1798,
    lng: 136.8979,
  },
  social: {} as Record<string, string>,
} as const;
