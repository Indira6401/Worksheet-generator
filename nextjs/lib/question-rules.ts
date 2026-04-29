type QuestionRecord = Record<string, unknown>;

interface QuestionRule {
  allowedTypes: string[];
  instruction: string;
  validateQuestion: (q: QuestionRecord) => boolean;
}

export const QUESTION_TYPE_RULES: Record<string, QuestionRule> = {
  mcq: {
    allowedTypes: ['mcq'],
    instruction: 'Every question must be an MCQ. Do not include any other question type.',
    validateQuestion: (q) => Array.isArray(q.options) && (q.options as unknown[]).length === 4,
  },
  fill_blank: {
    allowedTypes: ['fill_blank'],
    instruction: 'Every question must be a fill-in-the-blank question and contain a visible blank like _________. Do not include any other question type.',
    validateQuestion: (q) => typeof q.question === 'string' && (q.question as string).includes('_____'),
  },
  true_false: {
    allowedTypes: ['true_false'],
    instruction: 'Every question must be a true/false question. Do not include any other question type.',
    validateQuestion: () => true,
  },
  match: {
    allowedTypes: ['match'],
    instruction: 'Every question must be a match-the-following question. Do not include any other question type.',
    validateQuestion: (q) => {
      const mc = q.matchColumns as { columnA: unknown[]; columnB: unknown[] } | undefined;
      return !!(mc && Array.isArray(mc.columnA) && mc.columnA.length > 0 && Array.isArray(mc.columnB) && mc.columnB.length > 0);
    },
  },
  short_answer: {
    allowedTypes: ['short_answer'],
    instruction: 'Every question must be a short-answer question. Do not include any other question type.',
    validateQuestion: () => true,
  },
  mixed: {
    allowedTypes: ['mcq', 'fill_blank', 'true_false', 'match', 'short_answer'],
    instruction: 'Use a balanced mix of MCQ, fill-in-the-blank, true/false, match-the-following, and short-answer questions.',
    validateQuestion: () => true,
  },
};

const TYPE_ALIASES: Record<string, string> = {
  mcq: 'mcq',
  multiple_choice: 'mcq',
  multiple_choice_question: 'mcq',
  fill_blank: 'fill_blank',
  fill_in_the_blank: 'fill_blank',
  fill_in_the_blanks: 'fill_blank',
  true_false: 'true_false',
  true_or_false: 'true_false',
  match: 'match',
  match_the_following: 'match',
  short_answer: 'short_answer',
  short_answers: 'short_answer',
  mixed: 'mixed',
};

export function normalizeQuestionType(value: unknown): string {
  if (typeof value !== 'string') return '';
  const normalized = value.trim().toLowerCase().replace(/[\s/-]+/g, '_');
  return TYPE_ALIASES[normalized] || normalized;
}

function isQuestionValidForType(q: QuestionRecord, expectedType: string): boolean {
  const rules = QUESTION_TYPE_RULES[expectedType] || QUESTION_TYPE_RULES.mixed;
  const actualType = normalizeQuestionType(q?.type);
  if (!rules.allowedTypes.includes(actualType)) return false;
  return rules.validateQuestion(q);
}

function normalizeShape(q: QuestionRecord, expectedType: string, index: number): QuestionRecord {
  const normalized = { ...q, number: index + 1, type: expectedType };
  if (expectedType === 'mcq') {
    return { ...normalized, options: Array.isArray(q.options) ? (q.options as unknown[]).slice(0, 4) : [] };
  }
  if (expectedType === 'match') return normalized;
  const { options: _o, matchColumns: _mc, ...rest } = normalized;
  void _o; void _mc;
  return rest;
}

export function normalizeWorksheet(
  worksheet: QuestionRecord,
  expectedType: string,
  questionCount: number
): QuestionRecord {
  if (expectedType === 'mixed' || !worksheet || !Array.isArray(worksheet.questions)) return worksheet;
  if ((worksheet.questions as unknown[]).length !== questionCount) return worksheet;
  const normalizedQuestions = (worksheet.questions as QuestionRecord[]).map((q, i) =>
    normalizeShape(q, expectedType, i)
  );
  const result = { ...worksheet, questions: normalizedQuestions };
  return isWorksheetValid(result, expectedType, questionCount) ? result : worksheet;
}

export function isWorksheetValid(
  worksheet: QuestionRecord,
  expectedType: string,
  questionCount: number
): boolean {
  if (!worksheet || !Array.isArray(worksheet.questions)) return false;
  if ((worksheet.questions as unknown[]).length !== questionCount) return false;
  return (worksheet.questions as QuestionRecord[]).every((q, i) => {
    if (typeof q?.number !== 'number' || q.number !== i + 1) return false;
    return isQuestionValidForType(q, expectedType);
  });
}
