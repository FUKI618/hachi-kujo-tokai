#!/usr/bin/env bash
# Gemini Imagen 4 単一画像ジェネレータ（.env の GEMINI_API_KEY を使用）
# Usage: bash scripts/gen-image.sh "<english prompt>" "<aspectRatio: 1:1|3:4|4:3|9:16|16:9>" "<output .png path>"
# 出力: 成功時 "OK <path> http=200" / 失敗時 "FAIL ..."（非0終了）
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROMPT="${1:?prompt required}"; AR="${2:-16:9}"; OUT="${3:?output path required}"
ENVFILE=""
for f in "$ROOT/.env" "$ROOT/../.env" "/Users/fuki/Code/LP作成/蜂-LP/.env"; do
  [ -f "$f" ] && ENVFILE="$f" && break
done
KEY=$(grep -E '^GEMINI_API_KEY=' "${ENVFILE:-/dev/null}" 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"' | tr -d "'" | tr -d ' ')
[ -n "${KEY:-}" ] || { echo "FAIL no_key (.env GEMINI_API_KEY not found; searched $ROOT/.env and parent)"; exit 2; }
mkdir -p "$(dirname "$OUT")"
REQ=$(mktemp); RESP=$(mktemp)
python3 - "$PROMPT" "$AR" > "$REQ" <<'PY'
import json,sys
print(json.dumps({"instances":[{"prompt":sys.argv[1]}],
  "parameters":{"sampleCount":1,"aspectRatio":sys.argv[2]}}))
PY
code=$(curl -s -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=$KEY" \
  -H 'Content-Type: application/json' -d @"$REQ" -o "$RESP" -w "%{http_code}")
python3 - "$RESP" "$OUT" "$code" <<'PY'
import json,sys,base64
resp,out,code=sys.argv[1],sys.argv[2],sys.argv[3]
try: d=json.load(open(resp))
except Exception as e: print("FAIL parse http=%s"%code); sys.exit(1)
preds=d.get('predictions',[])
if not preds:
    print("FAIL no_predictions http=%s %s"%(code,json.dumps(d)[:300])); sys.exit(1)
b=preds[0].get('bytesBase64Encoded') or (preds[0].get('image',{}) or {}).get('imageBytes')
if not b:
    print("FAIL no_bytes http=%s keys=%s"%(code,list(preds[0].keys()))); sys.exit(1)
open(out,'wb').write(base64.b64decode(b))
print("OK %s http=%s bytes=%d"%(out,code,len(base64.b64decode(b))))
PY
rm -f "$REQ" "$RESP"
