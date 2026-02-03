## OGP Generator

Next.js と `next/og`（ImageResponse）を使った、動的な OGP 画像生成です。背景画像の上に、指定したテキスト（line1 / line2 / line3）を表示します。

### セットアップ

```bash
npm install
```

### 開発サーバー

```bash
npm run dev
```

`http://localhost:3000` を開きます。

### OGP 画像エンドポイント

`GET /api/og` にクエリパラメータを付けてアクセスすると、OGP 画像（1200×630）が返ります。

**パラメータ**

| パラメータ | 説明 |
|------------|------|
| `line1` | 1 行目のテキスト |
| `line2` | 2 行目のテキスト |
| `line3` | 3 行目のテキスト |

**例**

```
/api/og?line1=記事のタイトル&line2=サブタイトル&line3=補足テキスト
```

**表示仕様**

- フォント: M PLUS 1p 中字
- フォント色: `#783f04`
- フォントサイズ: 50px
- 行間: 1.5

### メタタグでの利用例

```html
<meta property="og:image" content="https://example.com/api/og?line1=タイトル&line2=サブタイトル&line3=補足" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://example.com/api/og?line1=タイトル&line2=サブタイトル&line3=補足" />
```
