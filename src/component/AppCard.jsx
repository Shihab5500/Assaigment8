
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconDawonload from "../assets/icon-downloads.png"
import IconRating from "../assets/icon-ratings.png"


export default function AppCard({ app }) {
  const navigate = useNavigate();
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;          
    setOpening(true);

    
    setTimeout(() => {
      navigate(`/apps/${app.id}`);
    }, 400);
  };

  return (
    <div
      onClick={handleOpen}
      role="button"
      aria-busy={opening}
      className="relative group cursor-pointer rounded-xl border border-gray-200 bg-white hover:shadow-md transition"
    >
      {/* Image */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl bg-gray-50">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{app.title}</h3>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{app.companyName}</p>

        <div className="mt-2 flex items-center justify-between gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
            <img className="w-[10px] inline pb-1" src={IconDawonload} alt="" /> {Math.round((app.downloads || 0) / 1_000_000)}M
          </span>
          <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-600 border border-orange-100">
            <img className="w-[10px] inline pb-1" src={IconRating} alt="" /> {app.ratingAvg}
          </span>
        </div>
      </div>

      
      {opening && (
        <div className="absolute inset-0 grid place-content-center bg-white/70 backdrop-blur-[1px] rounded-xl">
          <span className="w-7 h-7 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
}
