# hivejapan-site

Hive Japan 公式サイト（https://hivejapan.org/ の移行先、仮設版）。Astro で静的サイトを作り、Cloudflare Workers で配信します。

## 構成
- `src/pages/index.astro` … トップ（Mission・アドバイザー・運営メンバー）
- `src/data/people.json` … アドバイザー・運営メンバーの文章（ここを直せばトップに反映）
- `src/data/site.json` … メニュー、連絡先、Instagram
- `src/content/pages/*.md` … Summit各回・地方サミット・レポートの本文（Markdown）。ファイルを足すと `/<ファイル名>/` のページが増えます
- `public/images/` … 写真（旧Squarespaceから取得したもの。長辺1600pxに縮小済み）
- `public/media/top.mp4` … トップの背景動画
- `wrangler.jsonc` … Cloudflare の設定

## 手元で動かす
```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
```

## 公開
Cloudflare の Workers Builds を GitHub リポジトリにつないでいるため、main ブランチに反映すると自動でビルド・公開されます（ビルド: `npm run build`、デプロイ: `npx wrangler deploy`）。

## メモ
- 本文は旧サイトから自動で移したため、レイアウトは仮。デザインは別途作り込む
- お問い合わせフォームを Googleフォームにする場合は `src/data/site.json` の `contactFormUrl` にURLを入れる
