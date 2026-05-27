/**
 * 会社情報 SSOT
 * DIFF-POINT: 屋号・住所・電話番号・代表者は確定後に差し替え
 *
 * 計測ID: tracking 内の空文字を取得後の実IDに差し替え。
 * gtmId 未設定でも ga4Id 単体で計測動作する。
 * 形式: GTM-xxxxxxx / G-xxxxxxxxxx / AW-xxxxxxxxx
 */

export const tracking = {
  gtmId: "",                       // Google Tag Manager コンテナID
  ga4Id: "",                       // GA4 Measurement ID (gtag直接送信用)
  gadsConversionId: "AW-1832578807", // Google Ads コンバージョンID (conversion linker)
  /**
   * Google Ads コンバージョンラベル (CV action 作成後に貼付)
   * Google Ads UI → ツール → コンバージョン → 新規アクション作成
   *   各アクションごとに `AW-XXXXX/LABEL` 形式の送信先が発行される
   * 該当アクションの LABEL 部分のみをここに記載
   */
  gadsConversionLabels: {
    phoneClick: "",   // 電話発信 CV (推奨カテゴリ: Phone calls)
    lineClick: "",    // LINE 友だち追加クリック (推奨カテゴリ: Submit lead form)
    formSubmit: "",   // フォーム送信 (将来用・推奨: Submit lead form)
  },
} as const;

export const company = {
  name: "蜂の巣駆除ファクトリー東海",
  legalName: "株式会社LIV",
  representative: "水谷虎毅",
  phone: "0120-46-8434",
  phoneDisplay: "0120-46-8434",
  phoneTelLink: "tel:0120468434",
  lineUrl: "https://line.me/R/ti/p/@318yzauf",
  address: {
    postal: "460-0002",
    region: "愛知県",
    city: "名古屋市中区",
    street: "丸の内3丁目6-11",
  },
  hours: "24時間365日 受付",
  businessType: "蜂・蜂の巣駆除／害虫駆除／再発防止施工",
  serviceArea: "愛知県・岐阜県・三重県・静岡県（東海4県全域）",
  payment: ["現金", "銀行振込", "クレジットカード", "PayPay", "後払い"],
  insurance: "",
  yearsInBusiness: 15,
  totalCases: 12800,
  satisfactionRate: 4.9,
  sameDayRate: 98,
  liabilityCoverage: "",
  guaranteeYears: 1,
  fastestArrival: "30分",
  basicPrice: 3300,
  geo: {
    lat: 35.1798,
    lng: 136.8979,
  },
  social: {} as Record<string, string>,
} as const;
