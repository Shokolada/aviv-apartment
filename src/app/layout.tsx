import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "דירת גן להשכרה בצופים | יחידת דיור אביב",
  description:
    "דירת גן מושקעת, מרוהטת ויפיפייה להשכרה ביישוב צופים. 3,000 ₪ לחודש. חדר שינה, מטבח מעוצב, מקלחת יוקרתית וגינה מטופחת.",
  keywords: ["דירה להשכרה", "צופים", "דירת גן", "השכרה", "יחידת דיור"],
  openGraph: {
    title: "דירת גן להשכרה בצופים | יחידת דיור אביב",
    description:
      "לגור בצימר בתוך השקט הירוק - דירת גן מושקעת להשכרה ביישוב צופים",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-[var(--font-heebo)] bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
