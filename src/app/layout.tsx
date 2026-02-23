import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "יחידת דיור אביב | דירת גן להשכרה בצופים",
  description:
    "דירת גן מושקעת, מרוהטת ויפיפייה להשכרה ביישוב צופים. 40 מ״ר, 2 חדרים, גינה מטופחת. 3,000 ₪ לחודש.",
  keywords: "דירה להשכרה, צופים, יחידת דיור, דירת גן, שכירות",
  openGraph: {
    title: "יחידת דיור אביב | דירת גן להשכרה בצופים",
    description:
      "דירת גן מושקעת, מרוהטת ויפיפייה להשכרה ביישוב צופים. 40 מ״ר, 2 חדרים, גינה מטופחת.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Heebo] antialiased">{children}</body>
    </html>
  );
}
