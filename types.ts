
export interface Proof {
  id: string;
  proofId: string;
  programHash: string;
  proofData: string;
  generationTime: number; // in milliseconds
  timestamp: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  proofs: number;
  avatar: string;
}
