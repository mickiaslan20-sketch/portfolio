import { ImageResponse } from "next/og";
import { site } from "@/config/profile";
import { getInitials } from "@/lib/site";

/** Symbol für den Startbildschirm auf iPhone und iPad */
export const size = { width: 180, height: 180 };
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
          background: site.accentColor,
          color: site.accentForeground,
          fontSize: 76,
          fontWeight: 600,
          letterSpacing: -3,
        }}
      >
        {getInitials()}
      </div>
    ),
    { ...size },
  );
}
