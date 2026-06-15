#!/usr/bin/env bash
# gemini-3-pro-image generateContent → 画像保存（.env の GEMINI_API_KEY）
# Usage: bash scripts/gen-gemini-img.sh "<prompt>" "<out.png>" [model]
# 出力: 成功 "OK <path> http=200" / 失敗 "FAIL ..."（非0終了）
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROMPT="${1:?prompt required}"; OUT="${2:?output required}"; MODEL="${3:-gemini-3-pro-image}"
ENVFILE=""
for f in "$ROOT/.env" "$ROOT/../.env" "/Users/fuki/Code/LP作成/蜂-LP/.env"; do [ -f "$f" ] && ENVFILE="$f" && break; done
KEY=$(grep -E '^GEMINI_API_KEY=' "${ENVFILE:-/dev/null}" 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"' | tr -d "'" | tr -d ' ')
[ -n "${KEY:-}" ] || { echo "FAIL no_key"; exit 2; }
mkdir -p "$(dirname "$OUT")"
REQ=$(mktemp); RESP=$(mktemp)
python3 - "$PROMPT" > "$REQ" <<'PY'
import json,sys
print(json.dumps({"contents":[{"parts":[{"text":sys.argv[1]}]}],"generationConfig":{"responseModalities":["IMAGE"]}}))
PY
code=$(curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/$MODEL:generateContent?key=$KEY" \
  -H 'Content-Type: application/json' -d @"$REQ" -o "$RESP" -w "%{http_code}" --max-time 240)
python3 - "$RESP" "$OUT" "$code" <<'PY'
import json,sys,base64
try: d=json.load(open(sys.argv[1]))
except Exception: print("FAIL parse http=%s"%sys.argv[3]); sys.exit(1)
for p in d.get("candidates",[{}])[0].get("content",{}).get("parts",[]):
    inl=p.get("inlineData") or p.get("inline_data")
    if inl and inl.get("data"):
        open(sys.argv[2],'wb').write(base64.b64decode(inl["data"]))
        print("OK %s http=%s"%(sys.argv[2],sys.argv[3])); sys.exit(0)
print("FAIL no_image http=%s %s"%(sys.argv[3], json.dumps(d)[:280])); sys.exit(1)
PY
rm -f "$REQ" "$RESP"
