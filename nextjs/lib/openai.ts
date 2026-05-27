import OpenAI from 'openai';

let _client: OpenAI | null = null;
function getClient() {
  if (!_client) {
    _client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    });
  }
  return _client;
}

export const MODELS = {
  worksheet: 'llama-3.3-70b-versatile',
  answerKey: 'llama-3.3-70b-versatile',
  fastWorksheet: 'llama-3.1-8b-instant',
  premiumWorksheet: 'llama-3.3-70b-versatile',
} as const;

export async function callOpenAI(prompt: string, model: string, maxTokens: number): Promise<unknown> {
  const response = await getClient().chat.completions.create({
    model,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: maxTokens,
    response_format: { type: 'json_object' },
  });
  const text = response.choices[0]?.message?.content ?? '';
  return JSON.parse(text);
}
