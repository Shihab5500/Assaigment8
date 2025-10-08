
import React from "react";
import Hero from "../../assets/hero.png";
import PlayStore from "../../assets/PlayStore.svg";
import AppStore from "../../assets/AppStore.svg";

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-16 px-4 flex flex-col items-center overflow-visible">
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
          We Build <br />
          <span className="text-violet-600 font-extrabold">Productive</span> Apps
        </h1>
        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative apps designed to make life
          simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences
          that truly make an impact.
        </p>
      </div>

      {/* Store Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2 hover:bg-gray-50 transition"
        >
          <img src={PlayStore} alt="Play Store" className="w-6 h-6" />
          <span className="text-gray-800 font-semibold">Google Play</span>
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-300 rounded-md px-5 py-2 hover:bg-gray-50 transition"
        >
          <img src={AppStore} alt="App Store" className="w-6 h-6" />
          <span className="text-gray-800 font-semibold">App Store</span>
        </a>
      </div>

      {/* Phone Mockup (purple ব্যানারের উপর একটু overlap করবে) */}
      <div className="relative mt-10">
        <img
          src={Hero}
          alt="App Preview"
          className="w-[280px] sm:w-[340px] md:w-[500px] lg:w-[680px] h-auto mx-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
