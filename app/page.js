"use client";
import { useState } from "react";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#8E44AD",
  "#E74C3C",
];

export default function Home() {
  const [bgColor, setBgColor] = useState("#33FF57");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">Avatar Color Picker</h1>

      <div
        className="w-40 h-40 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-lg font-semibold text-white">Avatar</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: color }}
            onClick={() => setBgColor(color)}
          />
        ))}
      </div>

      <input
        type="color"
        className="mt-4 border rounded p-2 cursor-pointer"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      <button
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-900 transition"
        onClick={() => setBgColor("#33FF57")}
      >
        Reset
      </button>
    </div>
  );
}
