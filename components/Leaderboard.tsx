
import React from 'react';
import { LeaderboardEntry } from '../types';
import { LEADERBOARD_DATA } from '../constants';

const Leaderboard: React.FC<{ userProofs: number }> = ({ userProofs }) => {
  const updatedLeaderboard = LEADERBOARD_DATA.map(entry => 
    entry.name === 'You' ? { ...entry, proofs: userProofs } : entry
  ).sort((a, b) => b.proofs - a.proofs).map((entry, index) => ({...entry, rank: index + 1}));

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 md:p-6 h-full">
      <h2 className="text-2xl font-bold text-white mb-4">Leaderboard</h2>
      <div className="space-y-3">
        {updatedLeaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center p-3 rounded-md transition-all duration-300 ${
              entry.name === 'You' ? 'bg-magenta-500/20 border border-magenta-500' : 'bg-dark-700/50'
            }`}
          >
            <span className="text-lg font-bold text-gray-300 w-8">{entry.rank}</span>
            <img src={entry.avatar} alt={entry.name} className="w-10 h-10 rounded-full mr-4 border-2 border-dark-700" />
            <span className="font-medium text-white flex-grow">{entry.name}</span>
            <span className="font-mono font-semibold text-magenta-500">{entry.proofs}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
