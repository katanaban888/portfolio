import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Portfolio — Data Analyst";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#2d5f8f",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div style={{ width: 48, height: 4, background: "#2d5f8f" }} />
          Data Analyst · Risk · Fraud · Business Intelligence
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#16181d",
              lineHeight: 1.05,
              maxWidth: 900,
              display: "flex",
            }}
          >
            Turning business data into clear decisions and useful products
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#5f6570" }}>
            Dashboards · Risk & Fraud Analytics · Web Applications
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#5f6570",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>Tashkent, Uzbekistan</div>
          <div style={{ display: "flex", color: "#2d5f8f", fontWeight: 600 }}>
            Portfolio
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
