export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      <h1>OGP Generator</h1>
      <p>
        このプロジェクトには <code>@vercel/og</code> を使った OGP 画像生成 API が
        含まれています。
      </p>
      <p>
        例: <code>/api/og?title=Hello%20OGP</code>
      </p>
    </main>
  );
}

