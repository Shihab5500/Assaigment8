import React from "react";

export default function HeroSection2() {
  return (
    <section className="w-full bg-gradient-to-br from-violet-700 to-purple-500">
      {/* গ্রেডিয়েন্ট ব্যানারের ভিতরের কন্টেন্ট */}
      <div className="max-w-7xl mx-auto px-6 py-14 text-white">
        <h2 className="text-center text-3xl sm:text-5xl font-bold">
          Trusted By Millions, Built For You
        </h2>

        {/* স্ট্যাটস */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {/* Downloads */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/80 text-base">Total Downloads</p>
            <h3 className="text-5xl sm:text-6xl font-extrabold">29.6M</h3>
            <p className="text-white/80 text-sm">21% More Than Last Month</p>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/80 text-base">Total Reviews</p>
            <h3 className="text-5xl sm:text-6xl font-extrabold">906K</h3>
            <p className="text-white/80 text-sm">46% More Than Last Month</p>
          </div>

          {/* Active Apps */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/80 text-base">Active Apps</p>
            <h3 className="text-5xl sm:text-6xl font-extrabold">132+</h3>
            <p className="text-white/80 text-sm">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
