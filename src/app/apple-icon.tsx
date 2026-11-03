import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#173d32",
          borderRadius: 38,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 112,
            height: 112,
            border: "3px solid #f4efe4",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <svg width="78" height="78" viewBox="0 0 78 78">
            <path
              d="M51 14 43 43 14 54l11-29 26-11Z"
              fill="#d6b879"
              stroke="#f4efe4"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle cx="39" cy="39" r="4" fill="#f4efe4" />
          </svg>
        </div>
      </div>
    ),
    size,
  );
}
