
import { GoogleGenAI, Type } from "@google/genai";

// Ensure the API key is available in the environment variables
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const proofGenerationSchema = {
  type: Type.OBJECT,
  properties: {
    proofId: {
      type: Type.STRING,
      description: "A unique identifier for the proof, in UUID format like 'a1b2c3d4-...'."
    },
    programHash: {
      type: Type.STRING,
      description: "A 64-character hexadecimal string representing the program hash, starting with '0x'."
    },
    proofData: {
      type: Type.STRING,
      description: "A long single-line hexadecimal string (around 256 characters) representing the proof data."
    }
  },
  required: ["proofId", "programHash", "proofData"]
};


export const generateMockProof = async (): Promise<{ proofId: string; programHash: string; proofData: string; }> => {
  try {
    const prompt = `
      Generate a simulated ZK proof output from Succinct's SP1 zkVM.
      The output must be a valid JSON object representing a single, successfully generated proof.
      The proof should look technically plausible but be entirely fictional.
      - proofId: A unique UUID.
      - programHash: A 64-character hex string starting with '0x'.
      - proofData: A 256-character hex string.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: proofGenerationSchema,
      },
    });

    const jsonText = response.text.trim();
    const proofData = JSON.parse(jsonText);
    
    // Basic validation to ensure the structure is correct
    if (proofData && proofData.proofId && proofData.programHash && proofData.proofData) {
        return proofData;
    } else {
        throw new Error("Invalid proof data structure received from API.");
    }

  } catch (error) {
    console.error("Error generating mock proof:", error);
    // Return a fallback mock proof in case of an API error
    return {
      proofId: `error-${crypto.randomUUID()}`,
      programHash: '0x' + [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
      proofData: [...Array(256)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
    };
  }
};
