import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: "CV Builder - Créez votre CV professionnel en ligne",
  description:
    "Éditeur de CV A4 gratuit et open source. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur. Aucun compte requis.",
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: APP_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: APP_URL,
    title: "CV Builder - Créez votre CV professionnel en ligne",
    description:
      "Éditeur de CV A4 gratuit et open source. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur. Aucun compte requis.",
    images: [{ url: `${APP_URL}/images/metas/image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Builder - Créez votre CV professionnel en ligne",
    description:
      "Éditeur de CV A4 gratuit et open source. Créez, éditez et exportez votre CV en PDF directement depuis votre navigateur. Aucun compte requis.",
    images: [`${APP_URL}/images/metas/image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * fontVariables est posé sur <html> et non sur <body> : les variables de rôle
     * (--font-text…) sont déclarées par Tailwind sur :root et référencent
     * var(--font-inter). Si --font-inter n'était défini que sur <body>, la
     * référence serait indéfinie sur :root et la propriété deviendrait invalide
     * (donc vide) pour toute la page.
     */
    <html lang="en" data-theme="light" className={fontVariables} style={{ colorScheme: "light" }}>
      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <script
          async
          src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      )}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
