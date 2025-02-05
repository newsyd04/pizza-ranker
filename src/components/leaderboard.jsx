import React from "react";

export function Leaderboard({ rankings }) {
  return (
    <div className="z-20 max-w-4xl mx-auto my-10 p-5 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Leaderboard</h1>

      <div className="space-y-4">
        {rankings.map((user) => (
          <div
            key={user.rank}
            className={`grid grid-cols-[auto_auto_1fr_auto] gap-4 items-center p-4 rounded-lg shadow-md ${
              user.rank === 1 ? "bg-yellow-100" : "bg-gray-100"
            }`}
          >
            {/* Rank */}
            <div className="text-center text-lg font-bold text-gray-800">{user.rank}</div>

            {/* Avatar */}
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={user.avatar}
              alt={`${user.username}'s avatar`}
            />

            {/* User Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{user.username}</h2>
              <p className="text-sm text-gray-600">Score: {user.Score}/10</p>
              <p className="text-sm text-gray-600">Style: {user.Style || "N/A"}</p>
              <p className="text-sm text-gray-600">Location: {user.Location || "N/A"}</p>
            </div>

            {/* Highlight for Top Ranks */}
            <div className="text-right">
              {user.rank === 1 && <span className="text-yellow-500 font-bold">👑 Top Pizza!</span>}
              {user.rank === 2 && <span className="text-gray-500 font-bold">🥈 Second Place</span>}
              {user.rank === 3 && <span className="text-gray-500 font-bold">🥉 Third Place</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
