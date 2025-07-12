
import React from 'react';
import { Proof } from '../types';

const ProofCard: React.FC<{ proof: Proof }> = ({ proof }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 animate-fadeIn transition-all hover:border-magenta-500/50">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.7)]"></div>
            <p className="text-sm font-semibold text-green-400">Proof Generated</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">{proof.timestamp}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Generation Time</p>
          <p className="font-mono text-magenta-500">{proof.generationTime}ms</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm font-mono">
        <div className="flex flex-wrap">
          <span className="text-gray-400 mr-2 w-28">Proof ID:</span>
          <span className="text-gray-200 truncate">{proof.proofId}</span>
        </div>
        <div className="flex flex-wrap">
          <span className="text-gray-400 mr-2 w-28">Program Hash:</span>
          <span className="text-gray-200 truncate">{proof.programHash}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 mr-2 mb-1">Proof Data:</span>
          <p
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-gray-300 break-all cursor-pointer transition-all duration-300 ${isExpanded ? 'whitespace-normal' : 'truncate'}`}
          >
            {proof.proofData}
          </p>
        </div>
      </div>
    </div>
  );
};


const ProofFeed: React.FC<{ proofs: Proof[] }> = ({ proofs }) => {
  return (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 md:p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4">Live Proof Feed</h2>
      {proofs.length === 0 ? (
        <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500">Click "Generate Proof" to start...</p>
        </div>
      ) : (
        <div className="space-y-4 overflow-y-auto pr-2 flex-grow max-h-[600px]">
           {proofs.map((proof) => (
             <ProofCard key={proof.id} proof={proof} />
           ))}
        </div>
      )}
    </div>
  );
};

export default ProofFeed;
