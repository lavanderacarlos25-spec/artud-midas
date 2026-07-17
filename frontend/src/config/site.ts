export const siteConfig = {
  name: "Artud Midas",
  shortName: "Midas",
  description:
    "Technology platform for nightlife business growth — customer loyalty, analytics, community, and business intelligence.",
  themeColor: "#09090b",
  backgroundColor: "#09090b",
  locale: "en",
} as const;

export function getAppUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
}
