import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lifestyle Stories - Where Style Meets Storytelling",
  description: "Discover captivating stories, modern lifestyle trends, and creative inspiration. Your destination for fashion, wellness, travel, and authentic living.",
  keywords: "lifestyle, fashion, wellness, travel, creative living, storytelling, modern design",
  authors: [{ name: "Lifestyle Stories" }],
  openGraph: {
    title: "Lifestyle Stories - Where Style Meets Storytelling",
    description: "Discover captivating stories, modern lifestyle trends, and creative inspiration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
