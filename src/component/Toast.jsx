import React, { useEffect } from "react";


export default function Toast({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 2000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <div className="rounded-lg border border-green-200 bg-white shadow-md">
        <div className="px-4 py-3 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
          <p className="text-sm font-medium text-gray-800">{children}</p>
        </div>
        <div className="h-1 bg-green-200">
          <div className="h-1 bg-green-500 animate-[toast_2s_linear] origin-left" />
        </div>
      </div>
      <style>{`@keyframes toast { from {transform: scaleX(1)} to {transform: scaleX(0)} }`}</style>
    </div>
  );
}
