"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const images = [
  { src: "/images/gallery-1.jpg", alt: "תמונה מהדירה 1" },
  { src: "/images/bathroom-1.jpg", alt: "תמונה מהדירה 2" },
  { src: "/images/gallery-2.jpg", alt: "תמונה מהדירה 3" },
  { src: "/images/gallery-3.jpg", alt: "תמונה מהדירה 4" },
  { src: "/images/gallery-4.jpg", alt: "תמונה מהדירה 5" },
  { src: "/images/gallery-5.jpg", alt: "תמונה מהדירה 6" },
  { src: "/images/gallery-6.jpg", alt: "תמונה מהדירה 7" },
  { src: "/images/gallery-7.jpg", alt: "תמונה מהדירה 8" },
  { src: "/images/gallery-8.jpg", alt: "תמונה מהדירה 9" },
  { src: "/images/exterior-1.jpg", alt: "מבט מבחוץ 1" },
  { src: "/images/exterior-2.jpg", alt: "מבט מבחוץ 2" },
  { src: "/images/exterior-3.jpg", alt: "מבט מבחוץ 3" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % images.length);
  }, [lightbox]);

  const goPrev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + images.length) % images.length);
  }, [lightbox]);

  useEffect(() => {
    if (lightbox === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goNext();
      if (e.key === "ArrowRight") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, goNext, goPrev]);

  return (
    <section id="gallery" className="py-20 px-6 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 gradient-text">
            תמונות נוספות
          </h2>
          <p className="text-center text-white/50 text-lg mb-12">
            תמונות מהדירה ומבחוץ
          </p>
        </ScrollReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 50}>
              <button
                onClick={() => openLightbox(i)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer w-full"
                aria-label={`פתח תמונה: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-label="תצוגת תמונה"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 start-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="סגור"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Nav prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute end-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="תמונה קודמת"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Nav next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute start-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="תמונה הבאה"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 start-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
