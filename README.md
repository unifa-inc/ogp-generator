## OGP Generator

Next.js 16 と `next/og`（ImageResponse）を使った、動的な OGP 画像生成のサンプルです。

### セットアップ

```bash
npm install
# または
yarn
```

### 開発サーバー

```bash
npm run dev
```

`http://localhost:3000` を開きます。

### OGP 画像エンドポイント

ブラウザで以下のようにアクセスすると、動的に生成された画像が返ってきます。

```text
/api/og?title=Hello%20OGP&subtitle=with%20next/og
```

`title` / `subtitle` をクエリパラメータで変更することで、テキスト入りの OGP 画像を生成できます。

