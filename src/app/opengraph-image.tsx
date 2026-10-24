import { renderShareImage } from "@/lib/og";

export const alt = "Shalin Sunil Kumar — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage(size);
}
