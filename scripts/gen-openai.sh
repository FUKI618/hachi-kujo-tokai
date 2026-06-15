#!/usr/bin/env bash
# OpenAI gpt-image-2 画像ジェネレータ（.env の OPENAI_API_KEY を使用）
# Usage: bash scripts/gen-openai.sh "<prompt>" "<size:1536x1024|1024x1536|1024x1024>" "<out.png>" [quality:low|medium|high] [model]
# 出力: 成功 "OK <path> http=200" / 失敗 "FAIL ..."（非0終了）
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROMPT="${1:?prompt required}"; SIZE="${2:-1536x1024}"; OUT="${3:?output required}"; Q="${4:-high}"; MODEL="${5:-gpt-image-2}"
ENVFILE=""
for f in "$ROOT/.env" "$ROOT/../.env" "/Users/fuki/Code/LP作成/蜂-LP/.env"; do [ -f "$f" ] && ENVFILE="$f" && break; done
KEY=$(grep -E '^OPENAI_API_KEY=' "${ENVFILE:-/dev/null}" 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"' | tr -d "'" | tr -d ' ')
[ -n "${KEY:-}" ] || { echo "FAIL no_openai_key"; exit 2; }
mkdir -p "$(dirname "$OUT")"
REQ=$(mktemp); RESP=$(mktemp)
python3 - "$PROMPT" "$SIZE" "$Q" "$MODEL" > "$REQ" <<'PY'
import json,sys
print(json.dumps({"model":sys.argv[4],"prompt":sys.argv[1],"size":sys.argv[2],"quality":sys.argv[3],"n":1}))
PY
code=$(curl -s -X POST https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $KEY" -H 'Content-Type: application/json' \
  -d @"$REQ" -o "$RESP" -w "%{http_code}" --max-time 300)
python3 - "$RESP" "$OUT" "$code" <<'PY'
import json,sys,base64
try: d=json.load(open(sys.argv[1]))
except Exception: print("FAIL parse http=%s"%sys.argv[3]); sys.exit(1)
if 'data' not in d or not d['data']:
    print("FAIL http=%s %s"%(sys.argv[3], json.dumps(d)[:400])); sys.exit(1)
b=d['data'][0].get('b64_json')
if not b: print("FAIL no_b64 http=%s"%sys.argv[3]); sys.exit(1)
open(sys.argv[2],'wb').write(base64.b64decode(b)); print("OK %s http=%s"%(sys.argv[2],sys.argv[3]))
PY
rm -f "$REQ" "$RESP"
