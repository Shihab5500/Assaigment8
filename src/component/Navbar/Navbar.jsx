
import React, { useState } from "react";
import { NavLink } from "react-router-dom";   // ⬅️ নতুন
import logo from "../../assets/logo.png";
import Github from "../../assets/github.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkBase =
    "text-sm font-medium text-gray-600 hover:text-gray-900 transition";
  const active =
    "text-gray-900 underline underline-offset-8 decoration-purple-500";

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="HERO.IO" className="w-8 h-8" />
          <span className="font-extrabold text-lg bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent tracking-wide">
            HERO.IO
          </span>
        </NavLink>

        {/* Center: Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => (isActive ? `${linkBase} ${active}` : linkBase)}>
            Home
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => (isActive ? `${linkBase} ${active}` : linkBase)}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={({ isActive }) => (isActive ? `${linkBase} ${active}` : linkBase)}>
            Installation
          </NavLink>
        </nav>

        {/* Right: CTA */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-semibold shadow-sm hover:opacity-95 active:scale-[0.98] transition"
        >
          <img src={Github} alt="GitHub" />
          Contribute
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 my-1 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="px-6 py-4 flex flex-col gap-4 bg-white border-t border-gray-100">
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${active}` : linkBase)}>
            Home
          </NavLink>
          <NavLink to="/apps" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${active}` : linkBase)}>
            Apps
          </NavLink>
          <NavLink to="/installation" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? `${linkBase} ${active}` : linkBase)}>
            Installation
          </NavLink>

          {/* CTA for mobile */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-semibold shadow-sm hover:opacity-95 transition"
          >
            <img src={Github} alt="GitHub" />
            Contribute
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
