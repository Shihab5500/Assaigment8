import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../component/NotFound";

export default function Route404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 Illustration */}
        <div className="relative mx-auto w-52 h-52 mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="95" fill="#EEF2FF" />
            <text
              x="100"
              y="115"
              textAnchor="middle"
              fontSize="48"
              fontWeight="800"
              fill="#7C3AED"
            >
              404
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <div className="w-20 h-20 bg-violet-500 rounded-full opacity-20" />
          </div>
        </div>

        {/* Text Section */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Oops!! Page Not Found
        </h1>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
