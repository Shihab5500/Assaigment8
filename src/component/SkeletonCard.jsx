import React from "react";

export default function SkeletonCard() {
  return (
    <div className="rounded-lg border border-gray-200 p-3 bg-white">
      <div className="w-full aspect-[4/3] rounded-md bg-gray-200 animate-pulse" />
      <div className="mt-3 h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
      <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
      <div className="mt-2 h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
    </div>
  );
}
