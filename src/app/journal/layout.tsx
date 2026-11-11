import type { Metadata } from "next";

const journalDescription =
  "Field notes, travel stories and thoughtful inspiration from the people, landscapes and heritage of Bangladesh.";

export const metadata: Metadata = {
  title: "The Journal",
  description: journalDescription,
  alternates: { canonical: "/journal" },
  openGraph: {
    type: "website",
    title: "The Deshscape Journal",
    description: journalDescription,
    url: "https://deshscape.vercel.app/journal",
    images: [{
      url: "/bangladesh-social-cover.svg",
      width: 1200,
      height: 630,
      alt: "A river landscape for the Deshscape Journal",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Deshscape Journal",
    description: journalDescription,
    images: ["/bangladesh-social-cover.svg"],
  },
};

export default function JournalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
