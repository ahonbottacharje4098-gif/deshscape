import type { Metadata } from "next";
import type { ReactNode } from "react";

const description = "Contact the Deshscape team with destination suggestions, travel stories, questions or feedback.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://deshscape.vercel.app/contact",
    title: "Contact | Deshscape",
    description,
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
