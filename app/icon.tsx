import { ImageResponse } from "next/og";
import { site } from "@/config/profile";
import { getInitials } from "@/lib/site";

/** Favicon (Symbol im Browser-Tab) mit deinen Initialen in der Akzentfarbe */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: site.accentColor,
          color: site.accentForeground,
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: -0.5,
        }}
      >
        {getInitials()}
      </div>
    ),
    { ...size },
  );
}
