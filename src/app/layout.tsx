import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hebrew",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hila-communication.com"),
  title: "הילה – תקשור, ריפוי ותהליכי RESET לשחרור רגשי והתפתחות תודעתית",
  description:
    "מתקשרת ומטפלת רגשית עם כלים מתקדמים לתקשור, ריפוי רגשי ותהליכי RESET. קורסים, טיפולים אישיים וקבוצתיים להתפתחות תודעתית ורוחנית.",
  keywords:
    "תקשור, ריפוי רגשי, RESET, התפתחות תודעתית, טיפול רגשי, קורס תקשור, שחזור גלגולים, הילינג אנרגטי, NLP, EMR",
  authors: [{ name: "הילה" }],
  creator: "הילה",
  publisher: "הילה",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://hila-communication.com",
    siteName: "הילה - תקשור וריפוי רגשי",
    title: "הילה – תקשור, ריפוי ותהליכי RESET",
    description:
      "מתקשרת ומטפלת רגשית עם כלים מתקדמים לתקשור, ריפוי רגשי ותהליכי RESET לשחרור רגשי והתפתחות תודעתית.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "הילה - מתקשרת ומטפלת רגשית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "הילה - מתקשרת ומטפלת רגשית",
    description: "תקשור, ריפוי ותהליכי RESET לשחרור רגשי והתפתחות תודעתית",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hila-communication.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={notoSansHebrew.variable}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#B19CD9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${notoSansHebrew.className} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only">
          דלג לתוכן
        </a>
        {children}
      </body>
    </html>
  );
}
