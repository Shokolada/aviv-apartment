"use client";

import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    name: "שי",
    role: "ראשי",
    phone: "054-9444248",
    phoneClean: "972549444248",
  },
  {
    name: "סיון",
    role: "",
    phone: "052-5953928",
    phoneClean: "972525953928",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#111]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 gradient-text">
            צרו קשר
          </h2>
          <p className="text-center text-white/50 text-lg mb-12">
            מעוניינים? דברו איתנו
          </p>
        </ScrollReveal>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact) => (
            <ScrollReveal key={contact.name}>
              <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {contact.name}
                </h3>
                {contact.role && (
                  <span className="text-[var(--color-gold)] text-sm">
                    ({contact.role})
                  </span>
                )}

                <div className="flex flex-col gap-3 mt-6">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-6 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-gold)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-white" dir="ltr">
                      {contact.phone}
                    </span>
                  </a>

                  <a
                    href={`https://api.whatsapp.com/send?phone=${contact.phoneClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-xl py-3 px-6 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-[#25D366]">WhatsApp</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Waze */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <a
              href="https://waze.com/ul/hsv8zhtxre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass rounded-2xl px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-8 h-8 text-[#33CCFF]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.54 6.63C19.79 4.01 17.61 2 15 2c-2.21 0-4.21.89-5.66 2.34C8.21 5.48 7.38 6.97 7.08 8.63c-1.26.36-2.35 1.08-3.16 2.07C2.69 12.18 2 14.01 2 16c0 1.1.9 2 2 2h1.05c.47 2.87 2.97 5 5.95 5 2.98 0 5.48-2.13 5.95-5h1.1c2.71 0 4.95-2.24 4.95-4.95 0-2.46-1.81-4.5-4.16-4.87-.08-.56-.19-1.08-.3-1.55zM11 21c-1.66 0-3.06-1.12-3.48-2.65.31.1.64.15.98.15h5c.34 0 .67-.06.98-.15C14.06 19.88 12.66 21 11 21zM8.5 14c-.83 0-1.5-.67-1.5-1.5S7.67 11 8.5 11s1.5.67 1.5 1.5S9.33 14 8.5 14zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <div>
                <div className="text-white font-bold">נווטו אלינו עם Waze</div>
                <div className="text-white/50 text-sm">
                  ערבי נחל 172, צופים
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=%D7%A2%D7%A8%D7%91%D7%99%20%D7%A0%D7%97%D7%9C%20172%2C%20%D7%A6%D7%95%D7%A4%D7%99%D7%9D&t=m&z=14&output=embed&iwloc=near"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מפה - ערבי נחל 172, צופים"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
