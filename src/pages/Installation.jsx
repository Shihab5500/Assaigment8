
import React, { useMemo, useState } from "react";
import { useInstall } from "../context/InstallContext";
import Toast from "../component/Toast";

export default function Installation() {
  const { installed, uninstall } = useInstall();
  const [toast, setToast] = useState("");
  
  const [sort, setSort] = useState("dlAsc");

  const sorted = useMemo(() => {
    const list = [...installed];
    if (sort === "dlAsc") list.sort((a, b) => (a.downloads || 0) - (b.downloads || 0));
    if (sort === "dlDesc") list.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
    return list;
  }, [installed, sort]);

  const handleUninstall = (app) => {
    uninstall(app.id);
    setToast(`${app.title} Uninstalled from your Device`);
  };

  const toM = (n) => Math.round((n || 0) / 1_000_000); // number → M

  return (
    <section className="max-w-[1600px] mx-auto px-4 py-10">
      <Toast open={!!toast} onClose={() => setToast("")}>{toast}</Toast>

      <h1 className="text-2xl font-bold text-center text-gray-900">Your Installed Apps</h1>
      <p className="text-center text-gray-500 mt-1">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm font-bold text-gray-900">({installed.length}) Apps Found</div>

        {/*  Downloads অনুযায়ী sort control */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-200 text-sm"
        >
          <option value="dlAsc">Lowest Downloads ↓</option>
          <option value="dlDesc"> Highest Downloads ↑</option>
        </select>
      </div>

      <div className="mt-6 space-y-3">
        {sorted.map((app) => (
          <div key={app.id} className="flex items-center justify-between rounded-xl bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-50">
                <img src={app.image} alt="" className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="font-semibold text-gray-800">{app.title}</p>

                {/* ব্যাজগুলো একই রাখা হয়েছে */}
                <div className="mt-1 text-xs flex gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600">
                    ⬇ {toM(app.downloads)}M
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-orange-50 text-orange-600">
                    ★ {app.ratingAvg}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-600">
                    {app.size} MB
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app)}
              className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700"
            >
              Uninstall
            </button>
          </div>
        ))}

        {!sorted.length && (
          <div className="text-center text-gray-500 py-16">No apps installed yet.</div>
        )}
      </div>
    </section>
  );
}
