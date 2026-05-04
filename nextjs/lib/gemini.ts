import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? '');

export async function callGemini(prompt: string, maxTokens: number): Promise<unknown> {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    generationConfig: {
      responseMimeType: 'application/json',
      maxOutputTokens: maxTokens,
    },
  });
  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}
