import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matheus Finatto — React + Node Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #3730a3 0%, #5b21b6 50%, #3730a3 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(74,222,128,0.15)",
            border: "1px solid rgba(74,222,128,0.4)",
            borderRadius: "9999px",
            padding: "8px 20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ color: "#4ade80", fontSize: "18px", fontWeight: 700, letterSpacing: "0.08em" }}>
            OPEN TO WORK
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#f3f4f6",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Matheus Finatto
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#d1d5db",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          React + Node Developer · 5+ yrs production experience
        </div>

        {/* Tech chips */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {["React", "TypeScript", "Node.js", "NestJS", "GraphQL"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                padding: "10px 24px",
                color: "#e5e7eb",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            color: "rgba(255,255,255,0.4)",
            fontSize: "18px",
          }}
        >
          matheusfinatto.vercel.app
        </div>
      </div>
    ),
    size
  );
}
