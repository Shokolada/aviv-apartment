"use client";

import ScrollReveal from "./ScrollReveal";

const specs = [
  { icon: "📐", label: "גודל", value: '40 מ"ר' },
  { icon: "🚪", label: "חדרים", value: "2 חדרים" },
  { icon: "👤", label: "מתאימה ל", value: "יחיד/ה" },
  { icon: "📶", label: "אינטרנט", value: "WIFI" },
];

const rooms = [
  "סלון",
  "מטבח",
  "חדר שינה",
  "גינה מטופחת עם דשא",
  "פינת תבלינים",
  "מסלעה משולבת בצבעונים וסיגליות",
];

const appliances = [
  "מכונת כביסה",
  "תנור אפיה בילד אין",
  "כיריים חשמליים",
  "דוד חשמל",
  "מזגן",
  "מקרר",
];

const furniture = [
  "בר עץ מלא + 2 כסאות בר",
  "ספה",
  "ארון מרווח",
];

export default function GeneralInfo() {
  return (
    <section id="general-info" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            מידע כללי
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              אחרי שנים של מגורים בשכירות ולאחר שנתקלו בכל מיני דירות מוזרות,
              בלי שום מחשבה על השוכר ולעיתים רק כדי לייצר הכנסה בלי מאמץ.
            </p>
            <p className="text-white/90 text-xl font-bold mb-4">
              החלטנו שאצלנו זה יהיה אחרת.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              את הדירה תכננו מתוך מחשבה שככה היינו רוצים לחיות בדיוק.
              לא חסכנו בכלום, לא בעיצוב, לא בחומרים ולא באביזרים.
              הכל נעשה באהבה גדולה ומתוך מחשבה.
            </p>
          </div>
        </ScrollReveal>

        {/* Specs grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{spec.icon}</div>
                <div className="text-white/50 text-sm mb-1">{spec.label}</div>
                <div className="text-white font-bold text-lg">{spec.value}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Details grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={300}>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold text-[var(--color-gold)] mb-4">
                חדרים ואזורים
              </h3>
              <ul className="space-y-2">
                {rooms.map((room) => (
                  <li key={room} className="flex items-start gap-2 text-white/70">
                    <span className="text-[var(--color-gold)] mt-1">&#9679;</span>
                    {room}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold text-[var(--color-gold)] mb-4">
                מכשירי חשמל
              </h3>
              <ul className="space-y-2">
                {appliances.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/70">
                    <span className="text-[var(--color-gold)] mt-1">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold text-[var(--color-gold)] mb-4">
                ריהוט
              </h3>
              <ul className="space-y-2">
                {furniture.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/70">
                    <span className="text-[var(--color-gold)] mt-1">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-sm mt-4">
                הדירה מרוהטת קומפלט
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
