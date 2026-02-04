"use client";

import { useState } from "react";

export default function HomePage() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!line1.trim()) {
      alert("１行目は入力してね❤️");
      return;
    }
    const params = new URLSearchParams();
    if (line1) params.set("line1", line1);
    if (line2) params.set("line2", line2);
    if (line3) params.set("line3", line3);
    window.location.href = `/api/og?${params.toString()}`;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "1rem",
        position: "relative"
      }}
    >
      {/* 明るいオーバーレイでフォームを読みやすく */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.75)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "2rem",
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)"
        }}
      >
        <h1 style={{ margin: 0, color: "#783f04", fontSize: "1.5rem" }}>
          アイキャッチつくるちゃん
        </h1>
        <p style={{ color: "#6b7280", margin: 0 }}>
          アイキャッチ画像に入れる文字を入力してね❤️
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
            maxWidth: 400
          }}
        >
          <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem", textAlign: "left" }}>
            <span style={{ fontWeight: 500, color: "#374151" }}>line1</span>
            <input
              type="text"
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              placeholder="必須 | 15文字以内推奨"
              style={{
                padding: "0.5rem 0.75rem",
                fontSize: "1rem",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                backgroundColor: "#fff"
              }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem", textAlign: "left" }}>
            <span style={{ fontWeight: 500, color: "#374151" }}>line2</span>
            <input
              type="text"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              placeholder="任意"
              style={{
                padding: "0.5rem 0.75rem",
                fontSize: "1rem",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                backgroundColor: "#fff"
              }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem", textAlign: "left" }}>
            <span style={{ fontWeight: 500, color: "#374151" }}>line3</span>
            <input
              type="text"
              value={line3}
              onChange={(e) => setLine3(e.target.value)}
              placeholder="任意"
              style={{
                padding: "0.5rem 0.75rem",
                fontSize: "1rem",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                backgroundColor: "#fff"
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              marginTop: "0.5rem",
              padding: "0.6rem 1.25rem",
              fontSize: "1rem",
              fontWeight: 500,
              color: "white",
              backgroundColor: "#783f04",
              border: "none",
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            アイキャッチを作る
          </button>
        </form>
      </div>
    </main>
  );
}
