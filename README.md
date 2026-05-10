# 東海ハチ駆除LP（Astro）

東海4県（愛知・岐阜・三重・静岡）のハチ駆除事業者向け1ページLP。
徳丸商会LPと同じ品質基準・スタックで構築。

---

## スタック

- **Astro 6.x**（静的サイトジェネレーター）
- **Tailwind CSS 4.x**（@tailwindcss/vite）
- **Alpine.js 3.x**（FAQ・Floating CTA）
- **@astrojs/sitemap**（sitemap-index.xml 自動生成）
- **Sharp**（画像変換）

---

## ディレクトリ構成

```
制作物/
├── astro.config.mjs       # base / site の環境変数対応
├── package.json
├── tsconfig.json
├── public/                # 静的アセット（直接配信）
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.webp
│   ├── robots.txt
│   └── images/
│       ├── hero/          # 480/800/1400 srcset 3サイズ
│       ├── bee-types/     # 蜂6種 WebP
│       └── cases/         # 駆除事例6件 WebP
├── src/
│   ├── data/              # SSOT（Single Source of Truth）
│   │   ├── company.ts     # 会社情報
│   │   ├── faq.ts         # FAQ 10問
│   │   ├── bee-types.ts   # 蜂6種
│   │   ├── cases.ts       # 駆除事例6件
│   │   ├── voices.ts      # お客様の声4件
│   │   ├── rates.ts       # 料金表
│   │   ├── areas.ts       # 対応エリア
│   │   ├── strengths.ts   # 強み3点
│   │   ├── troubles.ts    # お悩み6件
│   │   ├── promises.ts    # 3つの約束
│   │   ├── compare.ts     # 他社比較
│   │   └── flow.ts        # 駆除の流れ
│   ├── layouts/
│   │   └── Layout.astro   # meta/OGP/CSP/構造化データ6種
│   ├── lib/
│   │   └── site.ts        # サイト全体定数・assetPath
│   ├── pages/
│   │   └── index.astro    # 13セクション本体
│   └── styles/
│       └── global.css     # デザイントークン+Tailwind 拡張
└── dist/                  # ビルド出力（git 管理外推奨）
```

---

## 開発・ビルド

```bash
# 依存関係インストール
bun install

# ローカル開発（http://localhost:4321/hachi-kujo-tokai/）
bun run dev

# ローカルビルド（base="/" でルート配信）
PUBLIC_SITE_BASE=/ bun run build
cd dist && python3 -m http.server 9875
# → http://localhost:9875/

# 本番ビルド（GitHub Pages 用）
bun run build  # base="/hachi-kujo-tokai" がデフォルト
```

---

## 公開前 DIFF-POINT 置換（必須）

| 場所 | 置換内容 |
|------|---------|
| `src/data/company.ts` | 屋号・法人名・代表者・住所・電話番号・LINE URL・geo |
| `src/data/voices.ts` | お客様の声を実レビューに |
| `src/data/cases.ts` | 駆除事例を実事例に |
| `src/layouts/Layout.astro` | `GTM-XXXXXXX` を実IDに（または削除） |
| `src/pages/index.astro` | 連絡フォームの `action="#"` を Formspree 等に |
| `astro.config.mjs` | `site` を本番ドメインに |

---

## デプロイ：GitHub Pages

```bash
# リポジトリ作成・初回 push
gh repo create hachi-kujo-tokai --public --source=. --push

# GitHub Actions 用ワークフロー（.github/workflows/deploy.yml）を別途設定するか、
# Settings > Pages で `dist` ブランチを Pages の対象に設定

# 公開URL想定
# https://fuki618.github.io/hachi-kujo-tokai/
```

---

## デプロイ：独自ドメイン

1. `astro.config.mjs` の `site` と `base` を更新
2. `bun run build`
3. `dist/` を任意のWebサーバ（さくら／エックスサーバー／Netlify／Cloudflare Pages 等）に配置

---

## 品質基準（徳丸LP 基準書準拠）

- SEO 9.0 / AEO 9.1 / Performance 8.8 / Security 9.8
- 構造化データ6種フル装備
- WebP・srcset・preload・遅延GTM
- CSP / X-Content-Type-Options / Referrer-Policy

詳細は `../research/QA-REPORT.md` 参照。
