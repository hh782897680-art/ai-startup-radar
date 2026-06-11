import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
          background:
            "radial-gradient(circle at 25% 18%, rgba(96, 165, 250, 0.18), transparent 50%), linear-gradient(140deg, #071328, #10264a 62%, #07142b)",
          color: "#f8fbff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "720px",
            height: "720px",
            right: "-120px",
            top: "-150px",
            borderRadius: "999px",
            border: "1px solid rgba(147, 197, 253, 0.22)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "30px" }}>
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: "#38bdf8",
              boxShadow: "0 0 0 10px rgba(56, 189, 248, 0.2)",
            }}
          />
          AI创业雷达
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "840px" }}>
          <div style={{ fontSize: "68px", lineHeight: 1.05, letterSpacing: "-0.03em" }}>发现 AI 机会，学会 AI 技能</div>
          <div style={{ fontSize: "30px", color: "#c8dbf8" }}>从项目雷达、学习地图到 7 天验证路径</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
