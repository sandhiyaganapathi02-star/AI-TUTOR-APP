
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const startTutorSession = (subject: string) => {
  const ai = getAIClient();
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are Lumina, a friendly and expert AI tutor. Your goal is to help the user learn ${subject}. 
      Always be encouraging, break down complex topics into simple analogies, and ask guiding questions to check for understanding. 
      Keep responses concise and engaging. If they are completely stuck, explain clearly. 
      Use Markdown for formatting key terms or code blocks if necessary.`,
      temperature: 0.7,
    },
  });
};
