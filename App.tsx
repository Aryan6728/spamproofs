
import React, { useState, useCallback } from 'react';
import { Proof } from './types';
import { generateMockProof } from './services/geminiService';
import Header from './components/Header';
import ProofGenerator from './components/ProofGenerator';
import ProofFeed from './components/ProofFeed';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [proofs, setProofs] = useState<Proof[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateProof = useCallback(async () => {
    setIsLoading(true);
    const startTime = Date.now();
    
    try {
      const generatedProof = await generateMockProof();
      const endTime = Date.now();
      
      const newProof: Proof = {
        id: crypto.randomUUID(),
        ...generatedProof,
        generationTime: endTime - startTime,
        timestamp: new Date().toISOString(),
      };

      setProofs(prevProofs => [newProof, ...prevProofs]);
    } catch (error) {
      console.error("Failed to generate proof:", error);
      // You could add an error state to show in the UI
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-dark-900 text-gray-200 font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-1 flex flex-col gap-6 lg:gap-8">
            <ProofGenerator 
              onGenerate={handleGenerateProof} 
              isLoading={isLoading}
              proofCount={proofs.length}
            />
            <Leaderboard userProofs={proofs.length} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            <ProofFeed proofs={proofs} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
