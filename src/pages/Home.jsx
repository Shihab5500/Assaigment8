
import React, { useState } from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import HeroSection2 from "../component/HeroSection2/HeroSection2";
import useAppsData from "../hooks/useAppsData";
import AppCard from "../component/AppCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { apps, loading } = useAppsData();
  const trending = apps.slice(0, 8);
  const navigate = useNavigate();

  const [showAllLoading, setShowAllLoading] = useState(false);

  const handleShowAll = () => {
    setShowAllLoading(true);
    setTimeout(() => {
      navigate("/apps");
    }, 800);
  };

  return (
    <>
      <HeroSection />
      <HeroSection2 />

      <section className="max-w-6xl mx-auto py-16 px-4 relative">
        <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
        <p className="text-gray-500 text-center mt-2 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* প্রাথমিক ডেটা লোডিং */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-56 rounded-lg bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            {/* কার্ড গ্রিড */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trending.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>

            {/* Show All বাটন */}
            <div className="text-center mt-10">
              <button
                onClick={handleShowAll}
                disabled={showAllLoading}
                className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
                  showAllLoading
                    ? "bg-violet-400 cursor-wait"
                    : "bg-violet-600 hover:bg-violet-700"
                }`}
              >
                {showAllLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Show All"
                )}
              </button>
            </div>
          </>
        )}

        {showAllLoading && (
          <div className="fixed inset-0 z-[9999] bg-white/70 backdrop-blur-[1px] flex items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 border-2 border-violet-600 border-t-transparent rounded-full animate-spin"></span>
              <span className="text-sm text-gray-700">Opening Apps…</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
