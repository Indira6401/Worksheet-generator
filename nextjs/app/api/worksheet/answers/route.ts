import { type NextRequest } from 'next/server';
import { callOpenAI, MODELS } from '@/lib/openai';
import { normalizeQuestionType } from '@/lib/question-rules';

export async function POST(request: NextRequest) {
  try {
    const { worksheet } = await request.json();
    if (!worksheet || !worksheet.questions) {
      return Response.json({ error: 'Worksheet data is required' }, { status: 400 });
    }

    const compactQuestions = worksheet.questions.map((q: Record<string, unknown>) => ({
      number: q.number,
      type: normalizeQuestionType(q.type),
      question: q.question,
      options: q.options,
      matchColumns: q.matchColumns,
    }));

    const prompt = `Generate an answer key as valid JSON only.

Context:
- Board: ${worksheet.metadata?.board || 'Not specified'}
- Grade: ${worksheet.metadata?.grade || 'Not specified'}
- Subject: ${worksheet.metadata?.subject || 'Not specified'}
- Difficulty: ${worksheet.metadata?.difficulty || 'medium'}

Questions:
${JSON.stringify(compactQuestions)}

Rules:
- return one answer per question in the same order
- MCQ: answer with option letter and text (e.g. "b) Photosynthesis")
- Fill blank: answer with the missing word or phrase only
- True/false: answer only "True" or "False"
- Match: answer as an object mapping each Column A item to its correct Column B letter (e.g. {"Lion": "A", "Tiger": "B"}). Use the exact Column A text as the key and the Column B letter as the value.
- Short answer: concise model answer in 1-2 sentences
- add explanation only when needed for clarity

Return:
{"answers":[{"number":1,"answer":"...","explanation":"optional"}]}`;

    const answerKey = await callOpenAI(prompt, MODELS.answerKey, 2500);
    return Response.json(answerKey);
  } catch (error) {
    console.error('Answer generation error:', error);
    return Response.json(
      { error: 'Failed to generate answers', message: (error as Error).message },
      { status: 500 }
    );
  }
}
