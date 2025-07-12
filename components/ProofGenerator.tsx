
import React from 'react';

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const InfoCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-4">
        <h3 className="font-bold text-magenta-500 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{children}</p>
    </div>
);


const ProofGenerator: React.FC<{ onGenerate: () => void; isLoading: boolean, proofCount: number }> = ({ onGenerate, isLoading, proofCount }) => {
  return (
    <div className="flex flex-col space-y-6">
        <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Start Generating</h2>
            <p className="text-gray-400 mb-6">Click the button to generate a new ZK proof. Spam it!</p>
            <button
                onClick={onGenerate}
                disabled={isLoading}
                className="w-full font-bold text-lg text-white bg-magenta-600 hover:bg-magenta-500 disabled:bg-magenta-500/50 disabled:cursor-not-allowed rounded-lg px-8 py-4 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-magenta-500/50 flex items-center justify-center gap-3 shadow-lg shadow-magenta-500/10 hover:shadow-xl hover:shadow-magenta-500/20 animate-pulseGlow"
            >
                {isLoading ? <LoadingSpinner /> : null}
                {isLoading ? 'Generating...' : 'Generate ZK Proof'}
            </button>
            <div className="mt-4 text-center">
                <p className="text-4xl font-black text-white">{proofCount}</p>
                <p className="text-sm font-medium text-gray-500">Proofs Generated</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard title="What is SP1?">
                SP1 is a performant, open-source zkVM that can prove any Rust program. It enables developers to use existing crates and build ZK applications in a familiar environment.
            </InfoCard>
            <InfoCard title="Why 'Spam' Proofs?">
                By generating many proofs quickly, we simulate a high-throughput environment. This demonstrates the robustness and scalability of Succinct's Prover Network.
            </InfoCard>
        </div>
    </div>
  );
};

export default ProofGenerator;
