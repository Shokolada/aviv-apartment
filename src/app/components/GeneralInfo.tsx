"use client";

import { useEffect, useRef } from "react";

const details = [
  { icon: "📐", label: "גודל", value: '40 מ"ר' },
  { icon: "🛏️", label: "חדרים", value: "2 (סלון + חדר שינה)" },
  { icon: "👤", label: "מתאימה ל", value: "יחיד/ה" },
  { icon: "🪑", label: "ריהוט", value: "מרוהטת קומפלט" },
  { icon: "📶", label: "אינטרנט", value: "WiFi" },
  { icon: "❄️", label: "מיזוג", value: "מזגן" },
];

export default function GeneralInfo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="info" ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-in text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-primary-dark)]">
          מידע כללי
        </h2>
        <div className="fade-in w-16 h-1 bg-[var(--color-accent)] mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
              הסיפור שלנו
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              אחרי שנים של מגורים בשכירות ולאחר שנתקלו בכל מיני דירות מוזרות,
              בלי שום מחשבה על השוכר ולעיתים רק כדי לייצר הכנסה בלי מאמץ -
              החלטנו שאצלנו זה יהיה אחרת.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              את הדירה תכננו מתוך מחשבה שככה היינו רוצים לחיות בדיוק.
              לא חסכנו בכלום - לא בעיצוב, לא בחומרים ולא באביזרים.
              הכל נעשה באהבה גדולה ומתוך מחשבה.
            </p>
            <div className="mt-6 p-4 bg-green-50 border-r-4 border-[var(--color-primary)] rounded-lg">
              <p className="text-[var(--color-primary-dark)] font-semibold">
                המחיר כולל: דירה מרוהטת קומפלט
              </p>
              <p className="text-gray-600 text-sm mt-1">
                לא כולל: חשמל לפי קריאה (מונה נפרד), מס שמירה יישובי 120 &#8362; בחודש
              </p>
            </div>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
              פרטי הדירה
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="font-semibold text-gray-800">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">כולל</div>
              <p className="text-gray-700">
                סלון, מטבח וחדר שינה, גינה מטופחת עם דשא, פינת תבלינים ומסלעה.
                מכונת כביסה, תנור אפיה בילד אין, כיריים חשמליים, מקרר, דוד חשמל.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
