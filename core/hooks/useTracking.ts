"use client";

declare global {
  interface Window {
    umami?: {
      track: (event: string, props?: Record<string, string | number | boolean>) => void;
    };
  }
}

export function useTracking() {
  const track = (event: string, props?: Record<string, string | number | boolean>) => {
    try {
      window.umami?.track(event, props);
    } catch {
      // Umami not loaded or blocked — fail silently
    }
  };
  return { track };
}
