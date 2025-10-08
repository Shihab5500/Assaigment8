import React from "react";
import logo from "../../assets/logo.png";
import FB from "../../assets/fb.svg";
import SS from "../../assets/ss.svg";
import IN from "../../assets/in.svg";


const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-6 pt-9 pb-6 flex flex-col gap-8">
        <div className="flex items-start justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* লোগো */}
              <img
                src={logo || "https://placehold.co/40x40"}
                alt="HERO.IO"
                className="w-10 h-10 rounded"
              />
              <h1 className="text-base font-bold tracking-wide">HERO.IO</h1>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">Social Links</h2>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center hover:opacity-90 transition"
              >
                <img src={IN} alt="" />
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center hover:opacity-90 transition"
              >
                <img src={SS} alt="" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center hover:opacity-90 transition"
              >
                <img src={FB} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20" />

        {/* Bottom text */}
        <p className="text-neutral-50/90 text-sm text-center">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
