const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function nowMs() {
  return Date.now();
}

function logTiming(label, startedAt, extra = '') {
  const duration = nowMs() - startedAt;
  const suffix = extra ? ` | ${extra}` : '';
  console.log(`[timing] ${label}: ${duration}ms${suffix}`);
}

const MODELS = {
  worksheet: 'gpt-4.1',
  answerKey: 'gpt-4.1',
  fastWorksheet: 'gpt-4.1-mini',
  suggestions: 'gpt-4.1-mini',
  premiumWorksheet: 'gpt-5.4'
};

const QUESTION_TYPE_RULES = {
  mcq: {
    allowedTypes: ['mcq'],
    instruction: 'Every question must be an MCQ. Do not include any other question type.',
    validateQuestion: (question) => Array.isArray(question.options) && question.options.length === 4
  },
  fill_blank: {
    allowedTypes: ['fill_blank'],
    instruction: 'Every question must be a fill-in-the-blank question and contain a visible blank like _________. Do not include any other question type.',
    validateQuestion: (question) => typeof question.question === 'string' && question.question.includes('_____')
  },
  true_false: {
    allowedTypes: ['true_false'],
    instruction: 'Every question must be a true/false question. Do not include any other question type.',
    validateQuestion: () => true
  },
  match: {
    allowedTypes: ['match'],
    instruction: 'Every question must be a match-the-following question. Do not include any other question type.',
    validateQuestion: (question) =>
      question.matchColumns &&
      Array.isArray(question.matchColumns.columnA) &&
      Array.isArray(question.matchColumns.columnB) &&
      question.matchColumns.columnA.length > 0 &&
      question.matchColumns.columnB.length > 0
  },
  short_answer: {
    allowedTypes: ['short_answer'],
    instruction: 'Every question must be a short-answer question. Do not include any other question type.',
    validateQuestion: () => true
  },
  mixed: {
    allowedTypes: ['mcq', 'fill_blank', 'true_false', 'match', 'short_answer'],
    instruction: 'Use a balanced mix of MCQ, fill-in-the-blank, true/false, match-the-following, and short-answer questions.',
    validateQuestion: () => true
  }
};

function normalizeQuestionType(value) {
  if (typeof value !== 'string') return '';

  const normalized = value.trim().toLowerCase().replace(/[\s/-]+/g, '_');
  const aliases = {
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
    mixed: 'mixed'
  };

  return aliases[normalized] || normalized;
}

function isQuestionValidForType(question, expectedType) {
  const rules = QUESTION_TYPE_RULES[expectedType] || QUESTION_TYPE_RULES.mixed;
  const actualType = normalizeQuestionType(question?.type);

  if (!rules.allowedTypes.includes(actualType)) {
    return false;
  }

  return rules.validateQuestion(question);
}

function normalizeQuestionShape(question, expectedType, index) {
  const normalizedQuestion = {
    ...question,
    number: index + 1,
    type: expectedType
  };

  if (expectedType === 'mcq') {
    return {
      ...normalizedQuestion,
      options: Array.isArray(question?.options) ? question.options.slice(0, 4) : []
    };
  }

  if (expectedType === 'match') {
    return normalizedQuestion;
  }

  const { options, matchColumns, ...rest } = normalizedQuestion;
  return rest;
}

function normalizeWorksheetForType(worksheet, expectedType, questionCount) {
  if (expectedType === 'mixed' || !worksheet || !Array.isArray(worksheet.questions)) {
    return worksheet;
  }

  if (worksheet.questions.length !== questionCount) {
    return worksheet;
  }

  const normalizedQuestions = worksheet.questions.map((question, index) =>
    normalizeQuestionShape(question, expectedType, index)
  );

  const normalizedWorksheet = {
    ...worksheet,
    questions: normalizedQuestions
  };

  return isWorksheetValidForType(normalizedWorksheet, expectedType, questionCount)
    ? normalizedWorksheet
    : worksheet;
}

function isWorksheetValidForType(worksheet, expectedType, questionCount) {
  if (!worksheet || !Array.isArray(worksheet.questions)) {
    return false;
  }

  if (worksheet.questions.length !== questionCount) {
    return false;
  }

  return worksheet.questions.every((question, index) => {
    if (typeof question?.number !== 'number' || question.number !== index + 1) {
      return false;
    }

    return isQuestionValidForType(question, expectedType);
  });
}

async function generateWorksheetFromPrompt(prompt, model) {
  const startedAt = nowMs();
  const response = await openai.responses.create({
    model,
    input: [{ role: 'user', content: prompt }],
    max_output_tokens: 4000,
    text: {
      format: {
        type: 'json_object'
      }
    }
  });

  logTiming('openai worksheet call', startedAt, `model=${model}, output_chars=${response.output_text?.length || 0}`);

  return JSON.parse(response.output_text);
}

function getWorksheetModel({ fastMode, premiumMode }) {
  if (premiumMode) return MODELS.premiumWorksheet;
  if (fastMode) return MODELS.fastWorksheet;
  return MODELS.worksheet;
}

// POST /api/worksheet/generate
router.post('/generate', async (req, res) => {
  const requestStartedAt = nowMs();
  try {
    const {
      board,
      grade,
      subject,
      topicMode,
      topics,
      difficulty,
      questionType,
      numberOfQuestions,
      purpose,
      fastMode,
      premiumMode
    } = req.body;

    const boardValue = typeof board === 'string' && board.trim() ? board.trim() : null;
    const boardUpper = boardValue ? boardValue.toUpperCase() : null;
    const gradeValue = typeof grade === 'string' || typeof grade === 'number' ? String(grade).trim() : '';
    const subjectValue = typeof subject === 'string' ? subject.trim() : '';
    const topicModeValue = topicMode === 'generalized' ? 'generalized' : 'specific';
    const topicsValue = Array.isArray(topics)
      ? topics.map(t => (typeof t === 'string' ? t.trim() : String(t).trim())).filter(Boolean)
      : [];

    const difficultyValue = typeof difficulty === 'string' && difficulty.trim() ? difficulty.trim() : 'easy';
    const questionTypeValue = typeof questionType === 'string' && questionType.trim() ? questionType.trim() : 'mcq';
    const purposeValue = typeof purpose === 'string' && purpose.trim() ? purpose.trim() : 'practice';
    const fastModeValue = Boolean(fastMode);
    const premiumModeValue = Boolean(premiumMode);
    const worksheetModel = getWorksheetModel({ fastMode: fastModeValue, premiumMode: premiumModeValue });

    const parsedQuestionCount = Number.parseInt(String(numberOfQuestions ?? ''), 10);
    const questionCount = Number.isFinite(parsedQuestionCount) && parsedQuestionCount > 0 ? parsedQuestionCount : 10;

    // Validation
    if (!gradeValue || !subjectValue) {
      return res.status(400).json({
        error: 'Missing required fields: grade, subject'
      });
    }

    if (topicModeValue === 'specific' && topicsValue.length === 0) {
      return res.status(400).json({
        error: 'At least one topic must be selected'
      });
    }

    const topicInstruction = topicModeValue === 'specific'
      ? `Focus on these topics: ${topicsValue.join(', ')}`
      : `Generate a generalized worksheet covering a broad range of important topics from ${subjectValue} for Grade ${gradeValue}.`;

    const questionTypeRule = QUESTION_TYPE_RULES[questionTypeValue] || QUESTION_TYPE_RULES.mixed;
    const questionTypeInstruction = questionTypeRule.instruction;

    const contextLines = [
      boardUpper ? `- Board: ${boardUpper}` : null,
      `- Grade: ${gradeValue}`,
      `- Subject: ${subjectValue}`,
      `- Difficulty Level: ${difficultyValue}`,
      `- Purpose: ${purposeValue}`,
      `- Number of Questions: ${questionCount}`
    ].filter(Boolean).join('\n');

    const curriculumAlignmentInstruction = boardUpper
      ? `Questions should align with the ${boardUpper} curriculum standards`
      : `Questions should align with standard curriculum expectations for Grade ${gradeValue}`;

    const prompt = `Generate a school worksheet as compact valid JSON only.

${contextLines}
- Topic mode: ${topicModeValue}
- Topic guidance: ${topicInstruction}
- Question type rule: ${questionTypeInstruction}
- Requirements:
  - exactly ${questionCount} questions
  - age-appropriate for Grade ${gradeValue}
  - difficulty ${difficultyValue}
  - ${curriculumAlignmentInstruction}
  - set each question.type correctly
  - do not mix types unless requested type is mixed
  - MCQ: exactly 4 options
  - Fill blank: include _________
  - Match: include matchColumns with columnA and columnB
  - Short answer: answerable in 2-3 sentences

Return JSON with shape:
{"title":"...","questions":[{"number":1,"type":"mcq|fill_blank|true_false|match|short_answer","question":"...","options":["a) ...","b) ...","c) ...","d) ..."],"matchColumns":{"columnA":["..."],"columnB":["..."]},"marks":1}],"totalMarks":0,"instructions":"..."}

Omit options for non-MCQ. Omit matchColumns for non-match.`;

    let worksheet;
      try {
        const firstAttemptStartedAt = nowMs();
        worksheet = await generateWorksheetFromPrompt(prompt, worksheetModel);
        logTiming('worksheet first attempt', firstAttemptStartedAt);
      } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError);
      return res.status(500).json({ error: 'Failed to parse worksheet data' });
    }

    worksheet = normalizeWorksheetForType(worksheet, questionTypeValue, questionCount);

    if (!fastModeValue && !isWorksheetValidForType(worksheet, questionTypeValue, questionCount)) {
      const correctionPrompt = `${prompt}

IMPORTANT CORRECTION:
Your previous response did not follow the requested question type.
Return a corrected worksheet JSON where all ${questionCount} questions are strictly of type "${questionTypeValue}".
Do not include any question whose type differs from "${questionTypeValue}".
Do not return explanations or extra text outside the JSON object.`;

      try {
        const correctionStartedAt = nowMs();
        worksheet = await generateWorksheetFromPrompt(correctionPrompt, worksheetModel);
        logTiming('worksheet correction attempt', correctionStartedAt);
      } catch (parseError) {
        console.error('Failed to parse corrected worksheet response:', parseError);
        return res.status(500).json({ error: 'Failed to parse corrected worksheet data' });
      }
    }

    worksheet = normalizeWorksheetForType(worksheet, questionTypeValue, questionCount);

    if (!isWorksheetValidForType(worksheet, questionTypeValue, questionCount)) {
      return res.status(500).json({
        error: `Generated worksheet did not match the requested question type: ${questionTypeValue}`
      });
    }

    // Add metadata
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
      generatedAt: new Date().toISOString()
    };

    logTiming('worksheet request total', requestStartedAt, `questions=${questionCount}, type=${questionTypeValue}, model=${worksheetModel}, fastMode=${fastModeValue}`);
    res.json(worksheet);
  } catch (error) {
    logTiming('worksheet request failed', requestStartedAt);
    console.error('Worksheet generation error:', error);
    res.status(500).json({
      error: 'Failed to generate worksheet',
      message: error.message
    });
  }
});

// POST /api/worksheet/answers
router.post('/answers', async (req, res) => {
  const requestStartedAt = nowMs();
  try {
    const { worksheet } = req.body;

    if (!worksheet || !worksheet.questions) {
      return res.status(400).json({ error: 'Worksheet data is required' });
    }

    const compactQuestions = worksheet.questions.map(question => ({
      number: question.number,
      type: normalizeQuestionType(question.type),
      question: question.question,
      options: question.options,
      matchColumns: question.matchColumns
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
- MCQ: answer with option letter and text
- Fill blank: answer with the missing word or phrase
- True/false: answer only True or False
- Match: answer with the correct pairings
- Short answer: concise model answer
- add explanation only when needed

Return:
{"answers":[{"number":1,"answer":"...","explanation":"optional"}]}`;

    const openAiStartedAt = nowMs();
    const response = await openai.responses.create({
      model: MODELS.answerKey,
      input: [{ role: 'user', content: prompt }],
      max_output_tokens: 2500,
      text: {
        format: {
          type: 'json_object'
        }
      }
    });
    logTiming('openai answer key call', openAiStartedAt, `model=${MODELS.answerKey}, questions=${compactQuestions.length}, output_chars=${response.output_text?.length || 0}`);

    const content = response.output_text;
    let answerKey;
    try {
      answerKey = JSON.parse(content);
    } catch (parseError) {
      console.error('Failed to parse answer key:', parseError);
      return res.status(500).json({ error: 'Failed to parse answer key data' });
    }

    logTiming('answer key request total', requestStartedAt, `questions=${compactQuestions.length}`);
    res.json(answerKey);
  } catch (error) {
    logTiming('answer key request failed', requestStartedAt);
    console.error('Answer generation error:', error);
    res.status(500).json({
      error: 'Failed to generate answers',
      message: error.message
    });
  }
});

module.exports = router;
