
import React, { useEffect, useMemo, useState } from "react";
import useAppsData from "../hooks/useAppsData";
import AppCard from "../component/AppCard";
import NotFound from "../component/NotFound";

// ঐচ্ছিক Loader কম্পোনেন্ট (যদি আলাদা Loader.jsx না থাকে)
const Loader = ({ label = "Loading..." }) => (
  <div className="flex items-center justify-center py-10">
    <div className="inline-flex items-center gap-3">
      <span className="w-4 h-4 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  </div>
);

export default function Apps() {
  const { apps, loading } = useAppsData();
  const [query, setQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  // 🔹 ডিবাউন্স করা সার্চ ইফেক্ট
  useEffect(() => {
    if (!query.trim()) {
      setSearchLoading(false);
      return;
    }
    setSearchLoading(true);
    const t = setTimeout(() => setSearchLoading(false), 500); // ০.৫ সেকেন্ড delay
    return () => clearTimeout(t);
  }, [query]);

  // 🔹 কেস ইনসেনসিটিভ ফিল্টার
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return apps;
    return apps.filter((a) => a.title.toLowerCase().includes(q));
  }, [apps, query]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center">Our All Applications</h2>
      <p className="text-gray-500 text-center mt-2 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions.
      </p>

      {/* টপ বার */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="text-lg font-bold text-gray-900">
          ({filtered.length}) Apps Found
        </p>

        {/* সার্চ ইনপুট */}
        <div className="relative w-full max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21l-4.3-4.3m1.3-4.2a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Apps"
            className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          />
          {/* ইনপুটে টাইপ করার সময় লোডিং আইকন */}
          {searchLoading && (
            <span className="absolute right-3 top-2.5 w-4 h-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></span>
          )}
        </div>
      </div>

      {/* প্রাথমিক ডেটা লোড */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-56 rounded-lg bg-gray-100 animate-pulse" />
          ))}
        </div>
      )}

      {/* সার্চ লোডিং */}
      {!loading && searchLoading && <Loader label="Searching..." />}

      {/* রেজাল্ট */}
      {!loading && !searchLoading && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

      {/* কিছু না পেলে */}
      {!loading && !searchLoading && filtered.length === 0 && (
        <NotFound
          title="OPPS!! APP NOT FOUND"
          subtitle="The App you are requesting is not found on our system. Please try another apps."
          onBack={() => setQuery("")}
        />
      )}
    </div>
  );
}
