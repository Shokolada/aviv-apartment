"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "איפה ממוקם היישוב צופים?",
    a: "היישוב צופים ממוקם 15 דק' מכפר סבא, ליד כוכב יאיר.\n5 דק' מכביש 6 – מחלף אייל.\nמצורפת מפה בהמשך הדף.",
  },
  {
    q: "מה יש ביישוב?",
    a: "נוף מדהים ומצפה אחד היפים בארץ שמשקיף על כל מישור החוף עד לים.\nקופת חולים מכבי וכללית, סופר מחסני השוק, בורגר, פיצה, אולם ספורט חדיש, בית קפה, מאפיה, מגרשי כדורגל וכדורסל, מרכז קהילתי, בתי כנסת, מקוואות, גינות משחקים לילדים, בית חב\"ד, חוגים בשפע.",
  },
  {
    q: "איזה סוג של יישוב זה?",
    a: "צופים הוא יישוב כפרי קהילתי.\nביישוב חיים כ-600 משפחות מעורבות, דתיים וחילוניים בחלוקה שווה.\nיישוב קטן עם נוף מדהים ואנשים טובים ושקטים.",
  },
  {
    q: "האם יש תחבורה ציבורית?",
    a: "יש אוטובוס שמגיע אחת לשעה ונוסע לכפר סבא.\nכמו כן ישנה תחנת טרמפים ומודעות של התושבים לסייע ביציאה מהיישוב.\nבוואטסאפ היישובי כל הזמן מתאמים נסיעות משותפות וטרמפים.\nהרכבת נמצאת 15 דקות מהיישוב: תחנת כפר סבא או תחנת ראש העין.",
  },
  {
    q: "האם היישוב בטוח?",
    a: "מאוד!!!\nאף בית לא נפרץ במשך שנים.\nבכניסה ליישוב ישנה שמירה 24 שעות.\nרכב שמירה שמסתובב בשעות היום והלילה.\nלסיכום – המקום הכי בטוח לחיות בו באזור.",
  },
  {
    q: "איך מתבצע התשלום ומה הוא כולל?",
    a: "התשלום מתבצע אחת לחודש בצ'ק או בהעברה בנקאית.\nשכר הדירה אינו כולל חשמל – קיים מונה נפרד, על פי צריכה (ממוצע שימוש ליחיד בין 70 – 100 ש\"ח לחודש).\nמס שמירה יישובי – 120 ש\"ח.",
  },
  {
    q: "האם ניתן להשכיר לטווח קצר?",
    a: "לצערנו לא.\nהחוזה הוא מינימום לשנה.",
  },
  {
    q: "האם הדירה מרוהטת?",
    a: "הדירה מרוהטת קומפלט:\nבר עץ מלא + 2 כסאות בר, ספה, ארון מרווח, מקרר, מכונת כביסה, כיריים חשמליים, תנור אפייה בילד אין, מזגן.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 gradient-text">
            שאלות ותשובות
          </h2>
          <p className="text-center text-white/50 text-lg mb-12">
            כל מה שרציתם לשאול...
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-right hover:bg-white/5 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-lg font-bold text-white/90">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[var(--color-gold)] shrink-0 ms-4 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`accordion-content ${
                    openIndex === i ? "open" : ""
                  }`}
                >
                  <div className="px-5 pb-5">
                    <div className="border-t border-white/10 pt-4">
                      {faq.a.split("\n").map((line, j) => (
                        <p key={j} className="text-white/60 leading-relaxed mb-1">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
