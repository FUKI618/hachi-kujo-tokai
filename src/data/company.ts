/**
 * 会社情報 SSOT
 * DIFF-POINT: 屋号・住所・電話番号・代表者は確定後に差し替え
 */

export const company = {
  name: "蜂の巣駆除ファクトリー東海",
  legalName: "{{LEGAL_ENTITY}}",
  representative: "{{REPRESENTATIVE}}",
  phone: "000-0000-0000",
  phoneDisplay: "000-0000-0000",
  phoneTelLink: "tel:0000000000",
  lineUrl: "https://line.me/R/ti/p/{{LINE_ID}}",
  address: {
    postal: "000-0000",
    region: "愛知県",
    city: "{{CITY}}",
    street: "{{STREET_ADDRESS}}",
  },
  hours: "24時間365日 受付",
  businessType: "蜂・蜂の巣駆除／害虫駆除／再発防止施工",
  serviceArea: "愛知県・岐阜県・三重県・静岡県（東海4県全域）",
  payment: ["現金", "銀行振込", "クレジットカード", "PayPay", "後払い"],
  insurance: "請負業者賠償責任保険（補償額1億円）",
  yearsInBusiness: 15,
  totalCases: 12800,
  satisfactionRate: 4.9,
  sameDayRate: 98,
  liabilityCoverage: "1億円",
  guaranteeYears: 1,
  fastestArrival: "30分",
  basicPrice: 3300,
  geo: {
    lat: 35.1815,
    lng: 136.9066,
  },
  social: {} as Record<string, string>,
} as const;
