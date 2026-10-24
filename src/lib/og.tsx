import { ImageResponse } from "next/og";
import { site } from "@/lib/portfolio";

// Favicon / app icon: the yellow circle from the hero with a black "S". The browser-tab icon is
// the bare circle on a transparent background; the home-screen icon sits on black with padding,
// because iOS fills transparent areas with black anyway.
export function renderMonogram(
  size: { width: number; height: number },
  { padded }: { padded: boolean }
) {
  const diameter = padded ? Math.round(size.width * 0.78) : size.width;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: padded ? "#000000" : "transparent",
        }}
      >
        <div
          style={{
            width: diameter,
            height: diameter,
            borderRadius: "50%",
            background: "#facc15",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* The "S" is a thick stroked path, not text: the renderer's built-in font has no bold weight. */}
          <svg
            width={Math.round(diameter * 0.78)}
            height={Math.round(diameter * 0.78)}
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M22 9.5C22 6.5 18.5 5.5 16 5.5C12.5 5.5 9.5 7.2 9.5 10.5C9.5 14 13 15 16 16C19 17 22.5 18 22.5 21.5C22.5 24.8 19.5 26.5 16 26.5C13 26.5 9.5 25.5 9.5 22.5"
              stroke="#000000"
              strokeWidth="4.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}

// Shared card for the Open Graph and Twitter images, so a shared link shows a small file
// instead of the 2.4 MB portrait. Every container uses display:flex, which the renderer requires.
export function renderShareImage(size: { width: number; height: number }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, background: "#facc15" }} />
          <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 16 }}>
            {site.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              marginTop: 32,
              maxWidth: 900,
              color: "#a3a3a3",
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>
          {site.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
