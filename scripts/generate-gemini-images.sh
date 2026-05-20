#!/usr/bin/env bash
# 蜂駆除LP用 Gemini画像生成プロンプト管理 + WebP正規化
#
# Usage:
#   bash scripts/generate-gemini-images.sh             # プロンプト一覧を表示
#   bash scripts/generate-gemini-images.sh --check     # 配置済み画像の存在確認
#   bash scripts/generate-gemini-images.sh --convert   # public/images/generated/*.{png,jpg,jpeg} を .webp に正規化
#
# 想定フロー:
#   1. 本スクリプトを引数なしで実行 → 4枚分のプロンプトと出力ファイル名を表示
#   2. Gemini (web UI / gemini-cli / Imagen API のいずれか) でPNGを生成
#      → public/images/generated/ に元ファイル名で保存
#   3. bash scripts/generate-gemini-images.sh --convert で WebP 化
#   4. bash scripts/generate-gemini-images.sh --check で4枚すべて配置済みか確認
#
# 生成方針:
#   - 人物・顔・手元アップなし (Gemini弱点回避)
#   - 文字・ロゴ・看板なし (誤読防止)
#   - 写真風 (photorealistic) / 横長 3:2
#   - 「※ 写真はイメージです」表示前提

set -u
cd "$(dirname "$0")/.."

OUT_DIR="public/images/generated"
mkdir -p "$OUT_DIR"

# ===== Prompts =====
declare -a IMAGES=(
  "emergency-nest-eaves|住宅の軒下にできた蜂の巣、夕方の自然光、危険だが過度にホラーではない、実写風、人物なし、顔なし、手なし、文字なし、ロゴなし、清潔な住宅外観、横長構図、3:2 aspect ratio, photorealistic"
  "protective-equipment|蜂駆除に使う防護服、防蜂ネット、専用スプレー、ライト、道具箱が清潔に並んでいる実写風写真、人物なし、顔なし、手なし、文字なし、ロゴなし、作業前の準備シーン、横長構図、3:2 aspect ratio, photorealistic"
  "estimate-document-tools|白い見積書風の無記名書類、ペン、メジャー、懐中電灯、防除道具が机に置かれている、金額や文字は読めない、人物なし、顔なし、手なし、ロゴなし、実写風、清潔感、横長構図、3:2 aspect ratio, photorealistic"
  "clean-eaves-after-removal|蜂の巣が撤去された後の清潔な住宅軒下、自然光、安心感、人物なし、顔なし、手なし、文字なし、ロゴなし、実写風、明るい住宅外観、横長構図、3:2 aspect ratio, photorealistic"
)

mode="${1:-list}"

print_header() {
  echo "==================================================="
  echo "  蜂駆除LP - Gemini Image Generation"
  echo "==================================================="
  echo ""
  echo "出力先: $OUT_DIR"
  echo ""
}

print_prompts() {
  print_header
  local idx=1
  for entry in "${IMAGES[@]}"; do
    local name="${entry%%|*}"
    local prompt="${entry#*|}"
    echo "--- [$idx/4] ---"
    echo "ファイル名: $OUT_DIR/${name}.webp"
    echo ""
    echo "プロンプト:"
    echo "  $prompt"
    echo ""
    echo "ヒント:"
    echo "  1. Gemini (web UI など) で上記プロンプトで画像生成"
    echo "  2. ${name}.png または ${name}.jpg として $OUT_DIR/ に保存"
    echo "  3. bash scripts/generate-gemini-images.sh --convert で WebP 化"
    echo ""
    idx=$((idx + 1))
  done
  echo "==================================================="
  echo "  すべて生成後、次を実行:"
  echo "    bash scripts/generate-gemini-images.sh --convert"
  echo "    bash scripts/generate-gemini-images.sh --check"
  echo "==================================================="
}

check_files() {
  print_header
  local missing=0
  local found=0
  for entry in "${IMAGES[@]}"; do
    local name="${entry%%|*}"
    local target="$OUT_DIR/${name}.webp"
    if [ -f "$target" ]; then
      local size
      size=$(stat -f%z "$target" 2>/dev/null || stat -c%s "$target" 2>/dev/null || echo "?")
      echo "  ✅ $target  (${size} bytes)"
      found=$((found + 1))
    else
      echo "  ❌ $target  (未配置)"
      missing=$((missing + 1))
    fi
  done
  echo ""
  echo "配置済み: $found / 4"
  if [ "$missing" -gt 0 ]; then
    echo "未配置: $missing 件"
    exit 1
  fi
  echo "すべての画像が配置されています。"
}

convert_to_webp() {
  print_header
  if ! command -v cwebp >/dev/null 2>&1; then
    echo "❌ cwebp が見つかりません。brew install webp でインストールしてください。"
    exit 1
  fi
  local converted=0
  for entry in "${IMAGES[@]}"; do
    local name="${entry%%|*}"
    local webp="$OUT_DIR/${name}.webp"
    local src=""
    for ext in png jpg jpeg PNG JPG JPEG; do
      if [ -f "$OUT_DIR/${name}.${ext}" ]; then
        src="$OUT_DIR/${name}.${ext}"
        break
      fi
    done
    if [ -z "$src" ]; then
      if [ -f "$webp" ]; then
        echo "  · $webp は既にあります (スキップ)"
      else
        echo "  · ${name}.* のソース画像が見当たりません"
      fi
      continue
    fi
    echo "  → $src → $webp"
    cwebp -q 82 -m 6 "$src" -o "$webp" >/dev/null 2>&1
    converted=$((converted + 1))
  done
  echo ""
  echo "変換完了: $converted ファイル"
}

case "$mode" in
  --check|-c)
    check_files
    ;;
  --convert)
    convert_to_webp
    ;;
  list|"")
    print_prompts
    ;;
  *)
    echo "Unknown option: $mode"
    echo "Usage: bash scripts/generate-gemini-images.sh [--check|--convert]"
    exit 1
    ;;
esac
