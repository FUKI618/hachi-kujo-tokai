#!/usr/bin/env bash
# Pre-deploy guard — ローンチ前に未置換テンプレ変数・ダミー値・設定ミスを検出
# Usage: bash scripts/predeploy_check.sh

set -u
set -o pipefail
cd "$(dirname "$0")/.."

errors=0
fail() {
  echo ""
  echo "❌ $1"
  errors=$((errors + 1))
}

echo "==================================================="
echo "  Pre-deploy guard for hachi-kujo-tokai"
echo "==================================================="

# ----- src/data, src/lib のプレースホルダー -----
echo ""
echo "[1/9] テンプレート変数残置 (src/data, src/lib)..."
if grep -rn '{{[A-Z_]\+}}' src/data src/lib 2>/dev/null; then
  fail "未置換のテンプレ変数があります（上記参照）"
else
  echo "  OK"
fi

echo ""
echo "[2/9] ダミー電話番号 (src/data)..."
if grep -rn '"000-0000-0000"\|"tel:0000000000"' src/data 2>/dev/null; then
  fail "ダミー電話番号が src/data に残っています"
else
  echo "  OK"
fi

echo ""
echo "[3/9] ダミー郵便番号 (src/data)..."
if grep -rn '"000-0000"' src/data 2>/dev/null; then
  fail "ダミー郵便番号が src/data に残っています"
else
  echo "  OK"
fi

# ----- robots.txt -----
echo ""
echo "[4/9] robots.txt の placeholder ドメイン..."
if [ -f public/robots.txt ]; then
  if grep -E 'example\.(com|org|net)|your[-_]?domain|YOUR_DOMAIN' public/robots.txt 2>/dev/null; then
    fail "robots.txt に placeholder ドメインが残っています"
  else
    echo "  OK"
  fi
else
  echo "  SKIP (public/robots.txt なし)"
fi

# ----- GTM ID -----
echo ""
echo "[5/9] GTM ID placeholder..."
if grep -rn 'GTM-XXXXXXX\|GA_TRACKING_ID\|G-XXXXXXXXXX' src/ 2>/dev/null | grep -v '//.*GTM-XXXXXXX' | head -5; then
  fail "GTM/GA ID が placeholder のままです"
else
  echo "  OK"
fi

# ----- フォーム action -----
echo ""
echo "[6/9] フォーム送信先未設定..."
if grep -rn 'action="#"\|action=""' src/pages 2>/dev/null; then
  fail "form action が未設定です（送信が失敗します）"
else
  echo "  OK"
fi

# ----- LINE URL placeholder -----
echo ""
echo "[7/9] LINE URL placeholder..."
if grep -rn '{{LINE_ID}}\|line\.me/R/ti/p/$' src/data 2>/dev/null; then
  fail "LINE URL が placeholder のままです"
else
  echo "  OK"
fi

# ----- dist/ 検証（ビルド後のみ） -----
echo ""
echo "[8/9] ビルド成果物 (dist/) 検証..."
if [ -d dist ]; then
  build_errors=0

  # テンプレ変数残置
  if grep -rn '{{[A-Z_]\+}}' dist 2>/dev/null | head -3; then
    fail "dist/ にテンプレ変数が残っています"
    build_errors=$((build_errors + 1))
  fi

  # sitemap の base パス整合性
  if [ -f dist/sitemap-0.xml ] && [ -f dist/index.html ]; then
    canonical=$(grep -oE 'rel="canonical" href="[^"]+"' dist/index.html | head -1 | sed -E 's/.*href="([^"]+)".*/\1/')
    sitemap_loc=$(grep -oE '<loc>[^<]+</loc>' dist/sitemap-0.xml | head -1 | sed -E 's/<\/?loc>//g')
    canonical_norm="${canonical%/}/"
    sitemap_norm="${sitemap_loc%/}/"
    if [ "$canonical_norm" != "$sitemap_norm" ]; then
      fail "canonical ($canonical_norm) と sitemap loc ($sitemap_norm) が不一致"
      build_errors=$((build_errors + 1))
    fi
  fi

  if [ $build_errors -eq 0 ]; then
    echo "  OK"
  fi
else
  echo "  SKIP (dist/ なし — まだビルドしてない)"
fi

# ----- 計測衛生: 受動要素の Ads CV 除外（2026-07-16 の回帰 051cf7f の再発防止） -----
echo ""
echo "[9/9] 計測衛生 (_dial の Ads CV 除外)..."
if ! grep -q 'indexOf("_dial")' src/layouts/Layout.astro; then
  fail "Layout.astro に _dial 除外がありません（受動タップが Ads CV に空発火します）"
else
  echo "  OK (src)"
fi
if [ -d dist ]; then
  dial_missing=0
  for page in dist/index.html dist/nagoya/index.html dist/suzumebachi/index.html dist/ashinagabachi/index.html; do
    if [ -f "$page" ] && ! grep -q 'indexOf("_dial")' "$page"; then
      fail "$page に _dial 除外コードが含まれていません"
      dial_missing=$((dial_missing + 1))
    fi
  done
  if [ $dial_missing -eq 0 ]; then
    echo "  OK (dist 4LP)"
  fi
fi

echo ""
echo "==================================================="
if [ $errors -gt 0 ]; then
  echo "✗ FAIL — $errors 件の問題があります。デプロイ中止"
  exit 1
fi
echo "✓ PASS — デプロイ可能"
exit 0
