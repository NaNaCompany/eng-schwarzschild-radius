# 슈바르츠실트 반지름 계산기

비회전·무전하 블랙홀 모델의 사건지평선 반지름 계산

- Plan ID: E056
- App: https://nanalab.kr/eng-schwarzschild-radius/
- Repository: https://github.com/NaNaCompany/eng-schwarzschild-radius
- Formula: `r_s = 2GM/c²`
- Output: 슈바르츠실트 반지름 r_s

## Model

M>0. 비회전·무전하 슈바르츠실트 해의 반지름이다. 실제 천체가 블랙홀인지 판정하지 않으며 회전·전하·원반·그림자 크기는 제외한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `2953.33938206688`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
