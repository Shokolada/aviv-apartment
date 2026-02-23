"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="fade-in text-3xl md:text-4xl font-bold text-center mb-4">
          צרו קשר
        </h2>
        <div className="fade-in w-16 h-1 bg-[var(--color-accent)] mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="fade-in space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent-light)]">שי</h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:054-9444248"
                  className="flex items-center gap-4 text-lg hover:text-[var(--color-accent-light)] transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  054-9444248
                </a>

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=972549444248&text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%93%D7%99%D7%A8%D7%94%20%D7%91%D7%A6%D7%95%D7%A4%D7%99%D7%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-[#25D366] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  שלחו הודעה בוואטסאפ
                </a>

                {/* Waze */}
                <a
                  href="https://waze.com/ul/hsv8zhtxre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-[var(--color-accent-light)] transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  נווטו אלינו בוויז - ערבי נחל 39, צופים
                </a>
              </div>
            </div>

            {/* Price reminder */}
            <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-[var(--color-accent-light)] mb-1">3,000 &#8362; לחודש</div>
              <p className="text-white/70 text-sm">
                מרוהטת קומפלט | לא כולל חשמל ומס שמירה יישובי
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=32.197037,35.009373&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מפה - ערבי נחל 39, צופים"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
