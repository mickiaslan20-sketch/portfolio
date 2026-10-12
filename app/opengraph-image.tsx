import { ImageResponse } from "next/og";
import { profile, site } from "@/config/profile";

/**
 * Vorschaubild für Social Media (Open Graph), z. B. wenn der Link in
 * WhatsApp, LinkedIn oder per E-Mail geteilt wird. Es wird beim Build
 * automatisch aus deinen Daten in config/profile.ts erzeugt.
 */
export const alt = `${profile.name} – ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px 80px",
          background: "#ffffff",
          color: "#000000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#5e5e5e" }}>
          <div
            style={{
              width: 14,
              height: 14,
              marginRight: 16,
              borderRadius: 999,
              background: site.accentColor,
            }}
          />
          {profile.availabilityText}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 124, fontWeight: 600, letterSpacing: -5, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 32, fontSize: 40, color: "#5e5e5e" }}>
            {`${profile.role} | ${profile.tagline}`}
          </div>
        </div>

        <div style={{ display: "flex", width: 160, height: 8, borderRadius: 999, background: site.accentColor }} />
      </div>
    ),
    { ...size },
  );
}
