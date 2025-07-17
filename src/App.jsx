import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => count < 10 && setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-pink-200 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🚀 Counter App</h1>

        <div className="text-6xl font-extrabold text-gray-900 mb-4">{count}</div>

        {count < 0 && (
          <p className="text-red-500 font-medium mb-2 animate-pulse">⚠️ Negative Value!</p>
        )}
        {count >= 10 && (
          <p className="text-orange-500 font-medium mb-2 animate-pulse">🚫 Max Limit Reached</p>
        )}

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button
            onClick={inc}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow transition hover:scale-105"
          >
            ➕
          </button>

          <button
            onClick={dec}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full shadow transition hover:scale-105"
          >
            ➖
          </button>

          <button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow transition hover:scale-105"
          >
            🔄
          </button>
        </div>
      </div>
    </div>
  );
}
