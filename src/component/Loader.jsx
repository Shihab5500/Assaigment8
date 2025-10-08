// src/component/Loader.jsx
export default function Loader({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="inline-flex items-center gap-3">
        <span className="w-4 h-4 rounded-full border-2 border-violet-600 border-t-transparent animate-spin" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
    </div>
  );
}
