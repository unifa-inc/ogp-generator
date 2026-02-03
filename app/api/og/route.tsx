import { ImageResponse } from "next/og";

// next/og (Satori) は TTF/OTF のみ対応。CDN から TTF を取得し、
// 自サイトへの fetch を避けて Vercel デプロイ保護の 401 を防ぐ
export const runtime = "edge";

const OGP_WIDTH = 1200;
const OGP_HEIGHT = 630;

/** Fontsource CDN: M PLUS 1p Japanese 500 (Medium) TTF */
const MPLUS1P_FONT_URL =
  "https://cdn.jsdelivr.net/fontsource/fonts/m-plus-1p@5.2.9/japanese-500-normal.ttf";

async function loadMplus1pFont(): Promise<ArrayBuffer> {
  const res = await fetch(MPLUS1P_FONT_URL);
  if (!res.ok) throw new Error(`Failed to load font: ${res.status}`);
  return res.arrayBuffer();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const line1 = searchParams.get("line1") ?? "";
  const line2 = searchParams.get("line2") ?? "";
  const line3 = searchParams.get("line3") ?? "";

  const baseUrl =
    process.env.VERCEL_URL != null
      ? `https://${process.env.VERCEL_URL}`
      : new URL(request.url).origin;

  const fontData = await loadMplus1pFont();
  const backgroundImageUrl = `${baseUrl}/ogp-background.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f0eb"
        }}
      >
        {/* Background image */}
        <img
          src={backgroundImageUrl}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
        {/* White rounded rectangle (content area) */}
        <div
          style={{
            position: "relative",
            width: "85%",
            maxWidth: 1000,
            padding: "130px 72px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          {/* line1, line2, line3 */}
          <div
            style={{
              fontFamily: "'M PLUS 1p', sans-serif",
              fontSize: 50,
              fontWeight: 500,
              color: "#783f04",
              lineHeight: 1.5,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.15em"
            }}
          >
            {line1 ? <div>{line1}</div> : null}
            {line2 ? <div>{line2}</div> : null}
            {line3 ? <div>{line3}</div> : null}
          </div>
        </div>
      </div>
    ),
    {
      width: OGP_WIDTH,
      height: OGP_HEIGHT,
      fonts: [
        {
          name: "M PLUS 1p",
          data: fontData,
          weight: 500,
          style: "normal"
        }
      ]
    }
  );
}
