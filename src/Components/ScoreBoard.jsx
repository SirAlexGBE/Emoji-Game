import React from "react";

export default function ScoreBoard({score, bestScore}) {
  return (
    <div className="flex justify-center items-center gap-8 py-4 bg-white shadow-md rounded-xl w-fit mx-auto mt-6 px-6">
      <div className="text-lg font-semibold text-blue-600">
        🎯 Score: <span className="text-black font-bold">{score}</span>
      </div>
      <div className="text-lg font-semibold text-yellow-600">
        🏆 Best: <span className="text-black font-bold">{bestScore}</span>
      </div>
    </div>
  );
}
