export function getAnalyticsProvider() {
  return process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || "none";
}
