

import React from "react";
import { Link } from "react-router-dom";
import IconDowonload from "../assets/icon-downloads.png"
import IconRating from "../assets/icon-ratings.png"


export default function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="block group" aria-label={`${app.title} details`}>
      <article className=" rounded-lg bg-white p-4 shadow-sm group-hover:shadow-md  group-hover:scale-[1.03] transition">
        <div className="overflow-hidden rounded-md mb-4  ">
          <img
            src={app.image}
            alt={app.title}
            loading="lazy"
            className="w-full h-40 object-cover"
          />
        </div>

        <h3 className="text-base font-semibold text-gray-800 line-clamp-1">{app.title}</h3>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{app.companyName}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
          <span> <img className="w-[15px] inline" src={IconDowonload} alt="" /> {Math.round(app.downloads / 1_000_000)}M</span>
          <span> <img className="w-[15px] inline pb-1" src={IconRating} alt="" /> {app.ratingAvg}</span>
        </div>
      </article>
    </Link>
  );
}

