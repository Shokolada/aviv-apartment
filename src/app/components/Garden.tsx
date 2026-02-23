"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  "הכניסה לדירה היא דרך שביל חוויתי מלא בסיגליות ואבני מדרך טבעיות",
  "מעקה עץ עם חבלי ים – עבודת אמן",
  "דשא סינטטי, עצים ופרחים וגינת תבלינים פרטית",
  "מערכת השקיה אוטומטית",
  "הגינה מותאמת לאופי האזור",
];

export default function Garden() {
  return (
    <section id="garden" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            הגינה
          </h2>
          <p className="text-center text-white/60 text-lg mb-12">
            הגינה שלנו מושקעת ברמה אחרת
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={100}>
            <div>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="glass rounded-xl p-6 text-center">
                <p className="text-white/70 text-lg">
                  האזור מקסים, ירוק ושקט
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/exterior-4.jpg"
                  alt="הגינה"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/exterior-5.jpg"
                  alt="הגינה - מבט נוסף"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/exterior-1.jpg"
                  alt="נוף מהגינה"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
