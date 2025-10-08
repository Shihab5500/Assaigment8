
// // src/pages/Details.jsx
// import React, { useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useAppsData from "../hooks/useAppsData";
// import { useInstall } from "../context/InstallContext";
// import Toast from "../component/Toast";
// import NotFound from "../component/NotFound";
// import IconDowonload from "../assets/icon-downloads.png"
// import IconLike from "../assets/icon-review.png"
// import IconRating from "../assets/icon-ratings.png"

// export default function Details() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { apps, loading } = useAppsData();
//   const app = useMemo(() => apps.find((a) => a.id === Number(id)), [apps, id]);

//   const { isInstalled, install } = useInstall(); // uninstall এখানে ইচ্ছা করে নিচ্ছি না
//   const [toast, setToast] = useState("");

//   // --- Loading skeleton (আগের "Loading..." টেক্সটের বদলে) ---
//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto px-5 py-12">
//         <div className="h-7 w-56 bg-gray-200 rounded animate-pulse" />
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-[18rem,1fr] gap-6">
//           <div className="h-72 bg-gray-100 rounded-xl animate-pulse" />
//           <div className="space-y-3">
//             <div className="h-6 w-72 bg-gray-200 rounded animate-pulse" />
//             <div className="h-4 w-56 bg-gray-100 rounded animate-pulse" />
//             <div className="mt-4 flex gap-3">
//               <div className="h-8 w-24 bg-gray-100 rounded animate-pulse" />
//               <div className="h-8 w-20 bg-gray-100 rounded animate-pulse" />
//               <div className="h-8 w-20 bg-gray-100 rounded animate-pulse" />
//             </div>
//             <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- App না পেলে কাস্টম NotFound ---
//   if (!app) {
//     return (
//       <NotFound
//         title="Opps!! App Not Found"
//         subtitle={`The app you requested (id: ${id}) is not found on our system, please try another apps.`}
//         onBack={() => navigate("/apps")}
//         homeBtn={true}
//       />
//     );
//   }

//   const installed = isInstalled(app.id);
//   const totalReviews = Number(app.reviews || 0);

//   const handleInstall = () => {
//     if (!installed) {
//       install(app);
//       setToast(`✅ ${app.title} Installed Successfully!`);
//     }
//   };

//   // রেটিং ডাটা (fallback)
//   const ratings = Array.isArray(app.ratings)
//     ? app.ratings
//     : [
//         { name: "5 star", count: 0 },
//         { name: "4 star", count: 0 },
//         { name: "3 star", count: 0 },
//         { name: "2 star", count: 0 },
//         { name: "1 star", count: 0 },
//       ];

//   // X-axis ticks
//   const ticks = 5;
//   const step = Math.ceil((totalReviews || 0) / ticks);

//   return (
//     <div className="max-w-6xl mx-auto px-5 py-10">
//       <Toast open={!!toast} onClose={() => setToast("")}>
//         {toast}
//       </Toast>

//       {/* ===== Header ===== */}
//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={app.image}
//           alt={app.title}
//           className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-xl shadow-sm border"
//         />

//         <div className="flex-1">
//           <h1 className="text-3xl md:text-[32px] font-extrabold text-slate-900">
//             {app.title}
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Developed by{" "}
//             <span className="text-violet-600 font-semibold">{app.companyName}</span>
//           </p>

//           {/* Stats */}
//           <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
//             <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-700 px-3 py-1.5 border border-blue-100">
//               <img className="w-[15px]" src={IconDowonload} alt="" />
//               {Math.round((app.downloads || 0) / 1_000_000)}M
//             </span>
//             <span className="inline-flex items-center gap-1 rounded-md bg-orange-50 text-orange-600 px-3 py-1.5 border border-orange-100">
//               <img className="w-[15px]" src={IconRating} alt="" /> {app.ratingAvg}
//             </span>
//             <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 text-sky-700 px-3 py-1.5 border border-sky-100">
//               <img className="w-[15px]" src={IconLike} alt="" /> {Math.round((totalReviews || 0) / 1_000)}K
//             </span>
//           </div>

//           {/* CTA */}
//           <div className="mt-5">
//             {!installed ? (
//               <button
//                 onClick={handleInstall}
//                 className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-md shadow-sm active:scale-[0.98] transition"
//               >
//                 Install Now ({app.size} MB)
//               </button>
//             ) : (
//               <button
//                 disabled
//                 aria-disabled="true"
//                 className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 font-semibold px-5 py-2.5 rounded-md cursor-not-allowed opacity-70"
//                 title="Already installed"
//               >
//                 Installed
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ===== Ratings Chart ===== */}
//       <section className="mt-10">
//         <h2 className="text-lg font-semibold text-slate-800 mb-4">Ratings</h2>

//         <div className="space-y-3">
//           {[...ratings]
//             .sort((a, b) => {
//               const aN = parseInt(a.name) || 0;
//               const bN = parseInt(b.name) || 0;
//               return bN - aN; // ৫ → ১
//             })
//             .map((r) => {
//               const pct =
//                 totalReviews > 0 ? Math.min(100, (r.count / totalReviews) * 100) : 0;
//               return (
//                 <div key={r.name}>
//                   <div className="flex items-center gap-3 mb-1">
//                     <div className="w-12 text-sm text-gray-600">{r.name}</div>
//                     <div className="flex-1 h-3 bg-gray-200 rounded">
//                       <div
//                         className="h-3 rounded bg-gradient-to-r from-orange-400 to-orange-500"
//                         style={{ width: `${pct}%` }}
//                         title={`${r.count.toLocaleString()} reviews`}
//                       />
//                     </div>
//                     <div className="w-20 text-right text-xs text-gray-500">
//                       {r.count.toLocaleString()}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>

//         {/* X-axis ticks */}
//         <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400">
//           {Array.from({ length: ticks + 1 }).map((_, i) => (
//             <span key={i}>
//               {Math.round((i * step) / 1000) * 1000}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* ===== Description ===== */}
//       <section className="mt-10">
//         <h2 className="text-lg font-semibold text-slate-800 mb-3">Description</h2>
//         <article className="prose max-w-none prose-p:my-3">
//           <p className="text-[15px] md:text-base text-gray-700 leading-8 whitespace-pre-line">
//             {app.description}
//           </p>
//         </article>
//       </section>
//     </div>
//   );
// }





import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppsData from "../hooks/useAppsData";
import { useInstall } from "../context/InstallContext";
import Toast from "../component/Toast";
import NotFound from "../component/NotFound";
import IconDowonload from "../assets/icon-downloads.png";
import IconLike from "../assets/icon-review.png";
import IconRating from "../assets/icon-ratings.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { apps, loading } = useAppsData();
  const app = useMemo(() => apps.find((a) => a.id === Number(id)), [apps, id]);

  const { isInstalled, install } = useInstall();
  const [toast, setToast] = useState("");

  // --- Loading skeleton ---
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="h-7 w-56 bg-gray-200 rounded animate-pulse" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-[18rem,1fr] gap-6">
          <div className="h-72 bg-gray-100 rounded-xl animate-pulse" />
          <div className="space-y-3">
            <div className="h-6 w-72 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-56 bg-gray-100 rounded animate-pulse" />
            <div className="mt-4 flex gap-3">
              <div className="h-8 w-24 bg-gray-100 rounded animate-pulse" />
              <div className="h-8 w-20 bg-gray-100 rounded animate-pulse" />
              <div className="h-8 w-20 bg-gray-100 rounded animate-pulse" />
            </div>
            <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // --- Not Found ---
  if (!app) {
    return (
      <NotFound
        title="Opps!! App Not Found"
        subtitle={`The app you requested (id: ${id}) is not found on our system, please try another apps.`}
        onBack={() => navigate("/apps")}
        homeBtn={true}
      />
    );
  }

  const installed = isInstalled(app.id);
  const totalReviews = Number(app.reviews || 0);

  const handleInstall = () => {
    if (!installed) {
      install(app);
      setToast(`✅ ${app.title} Installed Successfully!`);
    }
  };

  // ---- Ratings data for Recharts ----
  const ratings = Array.isArray(app.ratings)
    ? app.ratings
    : [
        { name: "5 star", count: 0 },
        { name: "4 star", count: 0 },
        { name: "3 star", count: 0 },
        { name: "2 star", count: 0 },
        { name: "1 star", count: 0 },
      ];

  // সাজানো (৫ → ১)
  const ratingsData = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <Toast open={!!toast} onClose={() => setToast("")}>
        {toast}
      </Toast>

      {/* ===== Header ===== */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-xl shadow-sm border"
        />

        <div className="flex-1">
          <h1 className="text-3xl md:text-[32px] font-extrabold text-slate-900">
            {app.title}
          </h1>
          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-violet-600 font-semibold">
              {app.companyName}
            </span>
          </p>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 text-blue-700 px-3 py-1.5 border border-blue-100">
              <img className="w-[15px]" src={IconDowonload} alt="" />
              {Math.round((app.downloads || 0) / 1_000_000)}M
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-orange-50 text-orange-600 px-3 py-1.5 border border-orange-100">
              <img className="w-[15px]" src={IconRating} alt="" /> {app.ratingAvg}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 text-sky-700 px-3 py-1.5 border border-sky-100">
              <img className="w-[15px]" src={IconLike} alt="" />{" "}
              {Math.round((totalReviews || 0) / 1_000)}K
            </span>
          </div>

          {/* CTA */}
          <div className="mt-5">
            {!installed ? (
              <button
                onClick={handleInstall}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-md shadow-sm active:scale-[0.98] transition"
              >
                Install Now ({app.size} MB)
              </button>
            ) : (
              <button
                disabled
                aria-disabled="true"
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-600 font-semibold px-5 py-2.5 rounded-md cursor-not-allowed opacity-70"
                title="Already installed"
              >
                Installed
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ===== Ratings Chart (Recharts) ===== */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Ratings</h2>

        <div className="w-full h-64 bg-white rounded-xl border p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingsData}
              margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
              barSize={35}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={{ stroke: "#d1d5db" }}
              />
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 11 }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(v) => v.toLocaleString()}
              />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                formatter={(v) => [`${v.toLocaleString()} reviews`, "Count"]}
              />
              <Bar
                dataKey="count"
                radius={[6, 6, 0, 0]}
                fill="url(#grad)"
                animationDuration={800}
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ===== Description ===== */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">
          Description
        </h2>
        <article className="prose max-w-none prose-p:my-3">
          <p className="text-[15px] md:text-base text-gray-700 leading-8 whitespace-pre-line">
            {app.description}
          </p>
        </article>
      </section>
    </div>
  );
}
