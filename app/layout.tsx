import type { Metadata } from "next";
import { Inter, Noto_Sans, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontNoto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const fontRaleway = Raleway({
  variable: "--font-raleway-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Builder — Créez votre CV professionnel en ligne",
  description:
    "Éditeur de CV A4 gratuit et open source. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur. Aucun compte requis.",
  metadataBase: new URL("https://cv.jinio.us"),
  alternates: {
    canonical: "https://cv.jinio.us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://cv.jinio.us",
    title: "CV Builder — Créez votre CV professionnel en ligne",
    description:
      "Éditeur de CV A4 gratuit et open source. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur. Aucun compte requis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Builder — Créez votre CV professionnel en ligne",
    description:
      "Éditeur de CV A4 gratuit et open source. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur. Aucun compte requis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_UMAMI_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          async
          src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      )}
      <body className={`${fontInter.variable} ${fontNoto.variable} ${fontRaleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
