/**
 * 広告専用 地域着地ページ SSOT（src/pages/area/[slug].astro が getStaticPaths で生成）
 *
 * 目的: 広告のメッセージマッチ／LP体験QSを地域意図で引き上げる。検索需要が実証された市のみ。
 * honest厳守: 捏造の実績件数・口コミ・「この市で○件駆除」は載せない。
 *   各ページの固有性は「実在の市名＋実在の近隣自治体（地理的事実）＋全社共通の正直な料金/保証」で担保。
 * noindex運用: これらは広告着地専用（SEO doorway回避のため検索インデックスはしない。広告QSはnoindexでも評価される）。
 * nearby: 実在の隣接・近郊自治体（地理的事実のみ）。
 */

export type LandingArea = {
  slug: string;       // URL: /area/{slug}/
  city: string;       // 市名（見出し・タイトルに使用）
  prefecture: string; // 県
  nearby: string[];   // 実在の近隣自治体（事実）
};

export const landingAreas: LandingArea[] = [
  { slug: "nagoya",        city: "名古屋市",   prefecture: "愛知県", nearby: ["千種区", "名東区", "守山区", "緑区", "天白区", "春日井市", "日進市", "東海市"] },
  { slug: "toyota",        city: "豊田市",     prefecture: "愛知県", nearby: ["みよし市", "岡崎市", "瀬戸市", "長久手市", "日進市"] },
  { slug: "okazaki",       city: "岡崎市",     prefecture: "愛知県", nearby: ["豊田市", "安城市", "西尾市", "幸田町"] },
  { slug: "ichinomiya",    city: "一宮市",     prefecture: "愛知県", nearby: ["稲沢市", "江南市", "岐阜市", "各務原市"] },
  { slug: "kasugai",       city: "春日井市",   prefecture: "愛知県", nearby: ["名古屋市守山区", "小牧市", "瀬戸市", "多治見市"] },
  { slug: "anjo",          city: "安城市",     prefecture: "愛知県", nearby: ["岡崎市", "刈谷市", "西尾市", "知立市"] },
  { slug: "seto",          city: "瀬戸市",     prefecture: "愛知県", nearby: ["尾張旭市", "春日井市", "長久手市", "多治見市"] },
  { slug: "gifu",          city: "岐阜市",     prefecture: "岐阜県", nearby: ["各務原市", "羽島市", "瑞穂市", "一宮市"] },
  { slug: "ogaki",         city: "大垣市",     prefecture: "岐阜県", nearby: ["海津市", "瑞穂市", "羽島市", "養老町"] },
  { slug: "kakamigahara",  city: "各務原市",   prefecture: "岐阜県", nearby: ["岐阜市", "一宮市", "犬山市", "坂祝町"] },
  { slug: "yokkaichi",     city: "四日市市",   prefecture: "三重県", nearby: ["桑名市", "鈴鹿市", "菰野町", "川越町"] },
  { slug: "kuwana",        city: "桑名市",     prefecture: "三重県", nearby: ["四日市市", "いなべ市", "木曽岬町", "愛西市"] },
];
