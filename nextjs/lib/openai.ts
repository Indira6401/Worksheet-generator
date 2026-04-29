import OpenAI from 'openai';

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const MODELS = {
  worksheet: 'gpt-4.1',
  answerKey: 'gpt-4.1',
  fastWorksheet: 'gpt-4.1-mini',
  premiumWorksheet: 'gpt-5.4',
} as const;

export async function callOpenAI(prompt: string, model: string, maxTokens: number): Promise<unknown> {
  const response = await openai.responses.create({
    model,
    input: [{ role: 'user', content: prompt }],
    max_output_tokens: maxTokens,
    text: { format: { type: 'json_object' } },
  });
  return JSON.parse(response.output_text);
}
