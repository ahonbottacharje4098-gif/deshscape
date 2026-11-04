import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const siteDescription =
  "Discover Bangladesh, one journey at a time. Explore destinations, culture, nature and travel stories from across the country.";

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://deshscape.vercel.app/#organization",
      name: "Deshscape",
      url: "https://deshscape.vercel.app/",
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      "@id": "https://deshscape.vercel.app/#website",
      name: "Deshscape",
      url: "https://deshscape.vercel.app/",
      description: siteDescription,
      publisher: { "@id": "https://deshscape.vercel.app/#organization" },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://deshscape.vercel.app"),
  title: {
    default: "Deshscape — Explore Beyond the Ordinary",
    template: "%s | Deshscape",
  },
  description: siteDescription,
  applicationName: "Deshscape",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  verification: {
    google: "j7iE2ih-xdBn0Pera9FpU3YccWzejyOESJSxO0eTCqI",
  },
  keywords: [
    "Bangladesh travel",
    "Bangladesh tourism",
    "travel destinations",
    "places to visit in Bangladesh",
    "Bangladesh nature",
    "Bangladesh culture",
    "Deshscape",
  ],
  authors: [{ name: "Deshscape" }],
  creator: "Deshscape",
  publisher: "Deshscape",
  category: "travel",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Deshscape",
    title: "Deshscape — Explore Beyond the Ordinary",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Deshscape — Explore Beyond the Ordinary",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
