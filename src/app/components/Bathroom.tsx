"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  "ארון אמבטיה מעץ – עבודת נגר",
  "ברז מעוצב",
  "מראה ענקית ממוסגרת בעץ עבודת נגר",
  "מקלחון עם חיפוי קרמיקה יוקרתי וברז מפנק",
  "רצפת קרמיקה בסגנון פרקט עץ",
];

export default function Bathroom() {
  return (
    <section id="bathroom" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 gradient-text">
            המקלחת
          </h2>
          <p className="text-center text-white/50 text-lg mb-12">
            מתרחצים בסטייל.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={100}>
            <div>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                במקלחת תמצאו:
              </p>
              <ul className="space-y-4">
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

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/bathroom-1.jpg"
                  alt="המקלחת - יחידת דיור אביב"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/bathroom-2.jpg"
                  alt="המקלחת - מבט נוסף"
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
