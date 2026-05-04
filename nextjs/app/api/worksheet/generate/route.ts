import { type NextRequest } from 'next/server';
import { callOpenAI, MODELS } from '@/lib/openai';
import { callGemini } from '@/lib/gemini';
import {
  QUESTION_TYPE_RULES,
  normalizeQuestionType,
  normalizeWorksheet,
  isWorksheetValid,
} from '@/lib/question-rules';

type WorksheetRecord = Record<string, unknown>;

function getModel(premiumMode: boolean): string {
  return premiumMode ? MODELS.premiumWorksheet : MODELS.worksheet;
}

async function callAI(prompt: string, fastMode: boolean, premiumMode: boolean, maxTokens: number): Promise<unknown> {
  if (fastMode) return callGemini(prompt, maxTokens);
  return callOpenAI(prompt, getModel(premiumMode), maxTokens);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const boardValue = typeof body.board === 'string' && body.board.trim() ? body.board.trim() : null;
    const boardUpper = boardValue ? boardValue.toUpperCase() : null;
    const gradeValue = String(body.grade ?? '').trim();
    const subjectValue = String(body.subject ?? '').trim();
    const topicModeValue = body.topicMode === 'generalized' ? 'generalized' : 'specific';
    const topicsValue: string[] = Array.isArray(body.topics)
      ? body.topics.map((t: unknown) => String(t).trim()).filter(Boolean)
      : [];
    const difficultyValue = String(body.difficulty || 'easy').trim();
    const questionTypeValue = String(body.questionType || 'mcq').trim();
    const purposeValue = String(body.purpose || 'practice').trim();
    const fastModeValue = Boolean(body.fastMode);
    const premiumModeValue = Boolean(body.premiumMode);

    const parsedCount = parseInt(String(body.numberOfQuestions ?? ''), 10);
    const questionCount = Number.isFinite(parsedCount) && parsedCount > 0 ? parsedCount : 10;

    if (!gradeValue || !subjectValue) {
      return Response.json({ error: 'Missing required fields: grade, subject' }, { status: 400 });
    }
    if (topicModeValue === 'specific' && topicsValue.length === 0) {
      return Response.json({ error: 'At least one topic must be selected' }, { status: 400 });
    }

    const topicInstruction = topicModeValue === 'specific'
      ? `Focus on these topics: ${topicsValue.join(', ')}`
      : `Generate a generalized worksheet covering a broad range of important topics from ${subjectValue} for Grade ${gradeValue}.`;

    const questionTypeRule = QUESTION_TYPE_RULES[questionTypeValue] || QUESTION_TYPE_RULES.mixed;
    const curriculumNote = boardUpper
      ? `Questions should align with the ${boardUpper} curriculum standards`
      : `Questions should align with standard curriculum expectations for Grade ${gradeValue}`;

    const contextLines = [
      boardUpper ? `- Board: ${boardUpper}` : null,
      `- Grade: ${gradeValue}`,
      `- Subject: ${subjectValue}`,
      `- Difficulty Level: ${difficultyValue}`,
      `- Purpose: ${purposeValue}`,
      `- Number of Questions: ${questionCount}`,
    ].filter(Boolean).join('\n');

    const prompt = `Generate a school worksheet as compact valid JSON only.

${contextLines}
- Topic mode: ${topicModeValue}
- Topic guidance: ${topicInstruction}
- Question type rule: ${questionTypeRule.instruction}
- Requirements:
  - exactly ${questionCount} questions
  - age-appropriate for Grade ${gradeValue}
  - difficulty ${difficultyValue}
  - ${curriculumNote}
  - set each question.type correctly
  - do not mix types unless requested type is mixed
  - MCQ: exactly 4 options
  - Fill blank: include _________
  - Match: include matchColumns with columnA and columnB
  - Short answer: answerable in 2-3 sentences

Return JSON with shape:
{"title":"...","questions":[{"number":1,"type":"mcq|fill_blank|true_false|match|short_answer","question":"...","options":["a) ...","b) ...","c) ...","d) ..."],"matchColumns":{"columnA":["..."],"columnB":["..."]},"marks":1}],"totalMarks":0,"instructions":"..."}

Omit options for non-MCQ. Omit matchColumns for non-match.`;

    let worksheet = await callAI(prompt, fastModeValue, premiumModeValue, 4000) as WorksheetRecord;
    worksheet = normalizeWorksheet(worksheet, questionTypeValue, questionCount);

    if (!fastModeValue && !isWorksheetValid(worksheet, questionTypeValue, questionCount)) {
      const correctionPrompt = `${prompt}

IMPORTANT CORRECTION:
Your previous response did not follow the requested question type.
Return a corrected worksheet JSON where all ${questionCount} questions are strictly of type "${questionTypeValue}".
Do not include any question whose type differs from "${questionTypeValue}".
Do not return explanations or extra text outside the JSON object.`;

      worksheet = await callAI(correctionPrompt, fastModeValue, premiumModeValue, 4000) as WorksheetRecord;
      worksheet = normalizeWorksheet(worksheet, questionTypeValue, questionCount);
    }

    if (!isWorksheetValid(worksheet, questionTypeValue, questionCount)) {
      return Response.json(
        { error: `Generated worksheet did not match the requested question type: ${questionTypeValue}` },
        { status: 500 }
      );
    }

    worksheet.metadata = {
      board: boardUpper || '-',
      grade: gradeValue,
      subject: subjectValue,
      topicMode: topicModeValue,
      topics: topicsValue,
      difficulty: difficultyValue,
      questionType: questionTypeValue,
      numberOfQuestions: questionCount,
      purpose: purposeValue,
      fastMode: fastModeValue,
      premiumMode: premiumModeValue,
      generatedAt: new Date().toISOString(),
    };

    return Response.json(worksheet);
  } catch (error) {
    console.error('Worksheet generation error:', error);
    return Response.json(
      { error: 'Failed to generate worksheet', message: (error as Error).message },
      { status: 500 }
    );
  }
}
