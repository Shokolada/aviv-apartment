"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/60 text-center py-6 px-4 text-sm space-y-2">
      <div className="flex justify-center gap-4">
        <Link href="/terms" className="hover:text-white/90 transition-colors">
          תנאי שימוש
        </Link>
        <span className="text-white/30">|</span>
        <Link href="/privacy" className="hover:text-white/90 transition-colors">
          מדיניות פרטיות
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} סייהונט בע&quot;מ. כל הזכויות שמורות.</p>
    </footer>
  );
}
