"use client";

import { useState, useEffect, useCallback } from "react";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);

  const applyStyles = useCallback(() => {
    const html = document.documentElement;

    // Font size
    html.style.fontSize = fontSize === 0 ? "" : `${100 + fontSize * 15}%`;

    // High contrast
    if (highContrast) {
      html.classList.add("a11y-high-contrast");
    } else {
      html.classList.remove("a11y-high-contrast");
    }

    // Grayscale
    if (grayscale) {
      html.classList.add("a11y-grayscale");
    } else {
      html.classList.remove("a11y-grayscale");
    }

    // Highlight links
    if (highlightLinks) {
      html.classList.add("a11y-highlight-links");
    } else {
      html.classList.remove("a11y-highlight-links");
    }

    // Stop animations
    if (stopAnimations) {
      html.classList.add("a11y-stop-animations");
    } else {
      html.classList.remove("a11y-stop-animations");
    }
  }, [fontSize, highContrast, grayscale, highlightLinks, stopAnimations]);

  useEffect(() => {
    applyStyles();
  }, [applyStyles]);

  const resetAll = () => {
    setFontSize(0);
    setHighContrast(false);
    setGrayscale(false);
    setHighlightLinks(false);
    setStopAnimations(false);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 start-4 z-[60] w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg transition-colors"
        aria-label="תפריט נגישות"
        title="נגישות"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 7.5v4m0 0l-3.5 5.5m3.5-5.5l3.5 5.5M5.5 9.5h13"
          />
        </svg>
      </button>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className="fixed top-0 start-0 h-full w-80 max-w-[90vw] bg-[#1a1a1a] z-[70] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-label="תפריט נגישות"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">נגישות</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="סגור תפריט נגישות"
              >
                <svg
                  className="w-5 h-5 text-white"
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
            </div>

            <div className="p-5 space-y-5">
              {/* Font size */}
              <div>
                <label className="text-white/70 text-sm mb-3 block">
                  גודל טקסט
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFontSize(Math.max(-2, fontSize - 1))}
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl font-bold transition-colors"
                    aria-label="הקטן טקסט"
                  >
                    א-
                  </button>
                  <div className="flex-1 text-center text-white/50 text-sm">
                    {fontSize === 0 ? "רגיל" : `${fontSize > 0 ? "+" : ""}${fontSize * 15}%`}
                  </div>
                  <button
                    onClick={() => setFontSize(Math.min(4, fontSize + 1))}
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl font-bold transition-colors"
                    aria-label="הגדל טקסט"
                  >
                    א+
                  </button>
                </div>
              </div>

              {/* Toggle options */}
              <ToggleOption
                label="ניגודיות גבוהה"
                description="הגברת ניגודיות צבעים"
                active={highContrast}
                onToggle={() => setHighContrast(!highContrast)}
              />

              <ToggleOption
                label="גווני אפור"
                description="הצגת האתר בשחור-לבן"
                active={grayscale}
                onToggle={() => setGrayscale(!grayscale)}
              />

              <ToggleOption
                label="הדגשת קישורים"
                description="סימון וקו תחתון לכל הקישורים"
                active={highlightLinks}
                onToggle={() => setHighlightLinks(!highlightLinks)}
              />

              <ToggleOption
                label="עצירת אנימציות"
                description="ביטול כל התנועות והאנימציות"
                active={stopAnimations}
                onToggle={() => setStopAnimations(!stopAnimations)}
              />

              {/* Reset */}
              <button
                onClick={resetAll}
                className="w-full py-3 rounded-xl border border-white/20 text-white/60 hover:bg-white/10 hover:text-white transition-colors text-sm"
              >
                איפוס הגדרות
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function ToggleOption({
  label,
  description,
  active,
  onToggle,
}: {
  label: string;
  description: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-start p-4 rounded-xl transition-colors ${
        active
          ? "bg-blue-600/20 border border-blue-500/40"
          : "bg-white/5 border border-white/10 hover:bg-white/10"
      }`}
      role="switch"
      aria-checked={active}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className={`font-bold ${active ? "text-blue-400" : "text-white/80"}`}>
            {label}
          </div>
          <div className="text-white/40 text-sm mt-1">{description}</div>
        </div>
        <div
          className={`w-11 h-6 rounded-full relative transition-colors ${
            active ? "bg-blue-600" : "bg-white/20"
          }`}
        >
          <div
            className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${
              active ? "start-[1.375rem]" : "start-0.5"
            }`}
          />
        </div>
      </div>
    </button>
  );
}
