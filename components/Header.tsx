
import React from 'react';
import Sp1Logo from './icons/Sp1Logo';

const Header: React.FC = () => {
  return (
    <header className="text-center p-4 md:p-6 border-b border-dark-700/50">
      <div className="flex items-center justify-center gap-4 mb-2">
        <Sp1Logo className="w-10 h-10 text-magenta-500" />
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-magenta-500">
          ZK Proof Spammer
        </h1>
      </div>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Simulate generating thousands of ZK proofs with Succinct's <span className="font-bold text-magenta-500">SP1 zkVM</span>. Learn about ZKPs, test performance, and spam your way to the top of the leaderboard.
      </p>
    </header>
  );
};

export default Header;
