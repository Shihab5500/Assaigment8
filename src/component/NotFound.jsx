// src/component/NotFound.jsx
import React from "react";

export default function NotFound({ title, subtitle, onBack }) {
  return (
    <div className="py-16 flex flex-col items-center text-center">
      {/* Inline SVG –  ইমেজ 404 ঝামেলা এড়াতে */}
      <div className="w-60 h-60 mb-6">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#FFF3C4"/>
          <rect x="55" y="80" width="90" height="60" rx="8" fill="#fff" stroke="#E5E7EB"/>
          <text x="100" y="115" textAnchor="middle" fontSize="18" fontWeight="700" fill="#FF6B00">NOT</text>
          <text x="100" y="135" textAnchor="middle" fontSize="18" fontWeight="700" fill="#FF6B00">FOUND</text>
          <path d="M70 65c10-20 50-20 60 0" stroke="#111827" strokeWidth="5" fill="none"/>
          <circle cx="85" cy="75" r="6" fill="#111827"/>
          <circle cx="115" cy="75" r="6" fill="#111827"/>
          <path d="M82 150c12 6 24 6 36 0" stroke="#A78BFA" strokeWidth="6" fill="none"/>
        </svg>
      </div>

      <h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
      <p className="text-gray-500 mt-2 max-w-xl">{subtitle}</p>

      <button
        onClick={onBack}
        className="mt-6 px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold"
      >
        Go Back!
      </button>
    </div>
  );
}
