#!/usr/bin/env python3
"""
build-fonts.py — 実HTMLの使用文字だけに subset した self-host woff2 を生成。
源フォント(.fonttmp/*.ttf) → public/fonts/*.woff2 + public/fonts/fonts.css。

方針:
- グリフ集合 = dist/**/*.html の全文字 ∪ ASCII ∪ かな全域 ∪ 記号（安全マージン）。
  欠落しても font-family stack の system フォント(Hiragino/Yu Gothic)へ fallback＝tofu化しない。
- woff2 のダウンロードは「実際にそのフォントが描画される時」だけ（per-use）。
  → M PLUS 1p/Reggae One は @font-face を全ページ宣言しても、LP(mobile)では落ちない。
"""
import glob, html, os, re, sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.subset import Subsetter, Options

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
SRC  = os.path.join(ROOT, ".fonttmp")
OUT  = os.path.join(ROOT, "public", "fonts")
os.makedirs(OUT, exist_ok=True)

# ---- 1) 使用グリフをページ単位で収集 ----
def glyphs_of(*relpaths):
    s = set()
    for rel in relpaths:
        p = os.path.join(DIST, rel)
        if not os.path.exists(p):
            continue
        raw = open(p, encoding="utf-8").read()
        raw = re.sub(r"<script[\s\S]*?</script>", " ", raw)  # JSONLD/JS内文字は除外
        raw = re.sub(r"<style[\s\S]*?</style>", " ", raw)
        s.update(html.unescape(re.sub(r"<[^>]+>", " ", raw)))
    return s

ASCII = set(chr(c) for c in range(0x20, 0x7F))
KANA = set(chr(c) for c in range(0x3040, 0x30FF + 1))   # かな全域(安全マージン・低コスト)
SYM = set("　、。，．・「」『』（）〜ー―‐’“”…！？％＆＠＃＊／：；＋－＝×÷"
          "０１２３４５６７８９円￥【】〒℃№☆★✓✔→↓●▼※")

def clean(s):
    return "".join(sorted(c for c in s if ord(c) >= 0x20 and not (0xD800 <= ord(c) <= 0xDFFF)))

# Noto は全ページの body 基本フォント → 全ページ union（どのページも正しく描画）
all_html = [os.path.relpath(p, DIST) for p in glob.glob(os.path.join(DIST, "**", "*.html"), recursive=True)]
NOTO_TEXT = clean(glyphs_of(*all_html) | ASCII | KANA | SYM)
# Inter は電話番号などラテンのみ
LATIN = clean(ASCII | set("￥円〜ー…・"))
# M PLUS 1p は PCヒーローの実描画文字のみ（.xhpc-box/.xhpc-kj/.xhpc-sub）
MPLUS_TEXT = clean(set("蜂の巣駆除即日スピード解決") | ASCII)
# Reggae One は legal/privacy ページでのみ使用
REGGAE_TEXT = clean(glyphs_of("privacy-policy/index.html", "legal/index.html") | ASCII)
print(f"glyphs — Noto:{len(NOTO_TEXT)}  Inter:{len(LATIN)}  MPLUS:{len(MPLUS_TEXT)}  Reggae:{len(REGGAE_TEXT)}")

def make_opts():
    o = Options()
    o.flavor = "woff2"
    o.hinting = False
    o.desubroutinize = True
    o.glyph_names = False
    o.recalc_timestamp = False
    o.name_IDs = ["*"]
    o.notdef_outline = True
    return o

def build(src_ttf, axes, outname, charset, weight_css):
    """axes=None: 静的のまま subset。axes=dict: その軸でinstance。
       axes='keepvar': 可変軸を保持したまま subset（1ファイルで複数weight）。"""
    f = TTFont(os.path.join(SRC, src_ttf))
    if axes not in (None, "keepvar") and "fvar" in f:
        instantiateVariableFont(f, axes, inplace=True)
    ss = Subsetter(options=make_opts())
    ss.populate(text=charset)
    ss.subset(f)
    out = os.path.join(OUT, outname)
    f.save(out)
    kb = os.path.getsize(out) / 1024
    print(f"  {outname:24s} {kb:7.1f} KB   (weight {weight_css})")
    return outname, weight_css

print("subsetting:")
# Noto Sans JP: 可変1ファイル（wght 400-900を1つに集約＝重複アウトライン排除）
noto = build("NotoSansJP.ttf", "keepvar", "notosansjp-var.woff2", NOTO_TEXT, "400 900")
inter = build("Inter.ttf", {"wght": 700, "opsz": 14}, "inter-700.woff2", LATIN, "700")
mplus = build("MPLUS1p-Black.ttf", None, "mplus1p-900.woff2", MPLUS_TEXT, "900")
reggae = build("ReggaeOne.ttf", None, "reggaeone-400.woff2", REGGAE_TEXT, "400")

# ---- 3) fonts.css 生成（@font-face。display:swap＝FOIT回避） ----
faces = [
    ("Noto Sans JP", noto[1], noto[0]),
    ("Inter", inter[1], inter[0]),
    ("M PLUS 1p", mplus[1], mplus[0]),
    ("Reggae One", reggae[1], reggae[0]),
]
css = ["/* 自動生成: scripts/build-fonts.py。実HTML使用文字のみ subset した self-host fonts。 */"]
for family, weight, outname in faces:
    css.append(
        f'@font-face{{font-family:"{family}";font-style:normal;font-weight:{weight};'
        f'font-display:swap;src:url("/fonts/{outname}") format("woff2");}}'
    )
open(os.path.join(OUT, "fonts.css"), "w", encoding="utf-8").write("\n".join(css) + "\n")
total = sum(os.path.getsize(os.path.join(OUT, n)) for _, _, n in faces) / 1024
mobile = (os.path.getsize(os.path.join(OUT, noto[0])) + os.path.getsize(os.path.join(OUT, inter[0]))) / 1024
print(f"fonts.css written. total woff2: {total:.1f} KB ({len(faces)} files)")
print(f"→ LP(mobile)が実ロードするのは Noto可変 + Inter のみ = {mobile:.1f} KB（M PLUS/Reggaeはper-use非ロード）")
