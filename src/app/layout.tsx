import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AutoTranslate from "@/components/AutoTranslate";

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
  alternates: { canonical: "/" },
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
    url: "https://deshscape.vercel.app/",
    images: [{ url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&h=630&q=85", width: 1200, height: 630, alt: "A scenic landscape in Bangladesh — Deshscape" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deshscape — Explore Beyond the Ordinary",
    description: siteDescription,
    images: ["https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&h=630&q=85"],
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
        <AutoTranslate><a className="skip-link" href="#main-content">Skip to main content</a></AutoTranslate>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
        />
        {children}
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}
