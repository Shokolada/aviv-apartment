"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  "חדר שינה מרווח מאוד עם חלון לכיוון הנגדי",
  "פינת עבודה",
  "ארון עץ מרווח",
];

export default function Bedroom() {
  return (
    <section id="bedroom" className="py-20 px-6 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            חדר השינה
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={100}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/bedroom-1.jpg"
                alt="חדר השינה - יחידת דיור אביב"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <ul className="space-y-4 mb-6">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white/80 text-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="glass rounded-xl p-4 mt-6">
                <p className="text-white/50 text-sm">
                  * המיטה והמזרון לא כלולים
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
