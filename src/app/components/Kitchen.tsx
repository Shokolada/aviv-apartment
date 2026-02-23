"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  "דלתות בצביעה בתנור",
  "טריקה שקטה",
  "משטח עבודה מעץ מלא",
  "ברז יוקרתי ואיכותי",
  "מידוף מלא",
  "ידיות יוקרתיות מניקל",
  "תאורת בר ותאורה למשטח העבודה",
  "בר + שני כסאות בר",
  "תנור אפייה בילד אין",
  "כיריים חשמליות",
];

export default function Kitchen() {
  return (
    <section id="kitchen" className="py-20 px-6 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="text-white/40 text-sm tracking-widest uppercase">
              מבט מבפנים
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            המטבח
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={100}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/kitchen-1.jpg"
                alt="המטבח - יחידת דיור אביב"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                המטבח בנוי מהחומרים המשובחים ביותר:
              </p>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Second kitchen image */}
        <ScrollReveal delay={300}>
          <div className="mt-10 relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/kitchen-2.jpg"
              alt="המטבח - מבט נוסף"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
