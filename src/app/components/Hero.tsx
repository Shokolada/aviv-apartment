"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          <span className="gradient-text">לגור בצימר</span>
          <br />
          <span className="text-white">בתוך השקט הירוק</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
          דירת גן להשכרה ביישוב צופים
        </p>

        <p className="text-lg text-white/60 mb-8">
          דירת גן מושקעת, מרוהטת ויפיפייה להשכרה
        </p>

        {/* Price badge */}
        <div className="inline-block glass rounded-2xl px-8 py-4 mb-8">
          <span className="text-4xl md:text-5xl font-bold gradient-text">
            3,000 ₪
          </span>
          <span className="text-white/60 text-lg mr-2">לחודש</span>
        </div>

        <p className="text-sm text-white/40">
          מס שמירה המשולם ליישוב וחשמל לפי קריאת מונה
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
