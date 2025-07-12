
import React from 'react';
import XLogo from './icons/XLogo';
import DiscordLogo from './icons/DiscordLogo';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 mt-8 border-t border-dark-700/50">
        <div className="flex justify-center items-center gap-4 mb-2">
            <a href="https://x.com/Mahakal95" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-magenta-500 transition-colors">
                <XLogo className="w-5 h-5" />
            </a>
            <a href="https://discordapp.com/users/mahendra#6966" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-magenta-500 transition-colors">
                <DiscordLogo className="w-5 h-5" />
            </a>
        </div>
      <p className="text-xs text-gray-500">
        Built by <a href="https://x.com/Mahakal95" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-400 hover:text-magenta-500 transition-colors">Mahesh</a>
      </p>
    </footer>
  );
};

export default Footer;
