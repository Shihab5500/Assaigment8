
import React from "react";
import HeroSection from "../component/HeroSection/HeroSection";
import HeroSection2 from "../component/HeroSection2/HeroSection2";
import useAppsData from "../hooks/useAppsData";
import AppCard from "../component/AppCard";
import { Link } from "react-router-dom";

export default function Home() {
  const { apps, loading } = useAppsData();
  const trending = apps.slice(0, 8);

  return (
    <>
      <HeroSection></HeroSection>
      <HeroSection2></HeroSection2>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
        <p className="text-gray-500 text-center mt-2 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-56 rounded-lg bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trending.map(app => <AppCard key={app.id} app={app} />)}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/apps"
                className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold"
              >
                Show All
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}

