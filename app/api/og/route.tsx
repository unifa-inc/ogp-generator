import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") ?? "OGP Generator";
  const subtitle = searchParams.get("subtitle") ?? "Powered by next/og";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 40%, #1d4ed8 100%)",
          color: "#e5e7eb",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}
      >
        <div
          style={{
            fontSize: 24,
            marginBottom: 24,
            opacity: 0.7
          }}
        >
          OGP Generator
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.85
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}

