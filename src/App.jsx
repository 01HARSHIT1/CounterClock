import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrease = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🚀 Advanced Counter App</h1>

        <div className="text-6xl font-extrabold text-gray-800 mb-4">{count}</div>

        {count < 0 && (
          <p className="text-red-500 font-medium mb-2 animate-pulse">⚠️ Negative Value!</p>
        )}

        {count >= 10 && (
          <p className="text-orange-500 font-medium mb-2 animate-pulse">🚫 Max Limit Reached</p>
        )}

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button
            onClick={increase}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow transition-all"
          >
            ➕ Increase
          </button>

          <button
            onClick={decrease}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow transition-all"
          >
            ➖ Decrease
          </button>

          <button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow transition-all"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
