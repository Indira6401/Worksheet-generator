'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWorksheet } from '@/context/WorksheetContext';
import type { Board, Grade, Subject, WorksheetConfig } from '@/types/worksheet';

const TOTAL_STEPS = 8;

const LOADING_MESSAGES = [
  'Generating your worksheet...',
  'Crafting curriculum-aligned questions...',
  'Applying difficulty settings...',
  'Ensuring question variety...',
  'Almost ready...',
];

const DIFFICULTIES = [
  { id: 'easy', label: 'Easy' },
  { id: 'medium', label: 'Medium' },
  { id: 'hard', label: 'Hard' },
  { id: 'advanced', label: 'Advanced' },
];

const QUESTION_TYPES = [
  { id: 'mcq', label: 'Multiple Choice (MCQ)' },
  { id: 'fill_blank', label: 'Fill in the Blank' },
  { id: 'true_false', label: 'True / False' },
  { id: 'match', label: 'Match the Following' },
  { id: 'short_answer', label: 'Short Answer' },
  { id: 'mixed', label: 'Mixed' },
];

const PURPOSES = [
  { id: 'practice', label: 'Practice' },
  { id: 'homework', label: 'Homework' },
  { id: 'revision', label: 'Revision' },
  { id: 'test', label: 'Test / Assessment' },
];

const COUNT_PRESETS = [5, 10, 15, 20];

function OptionButton({
  selected,
  onClick,
  children,
}: Readonly<{
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}>) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors
        ${selected
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600'
        }`}
    >
      {children}
    </button>
  );
}

export default function WorksheetConfig() {
  const router = useRouter();
  const { setWorksheet } = useWorksheet();

  const [step, setStep] = useState(1);
  const [boards, setBoards] = useState<Board[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [suggestedTopics, setSuggestedTopics] = useState<string[]>([]);

  const [config, setConfig] = useState<WorksheetConfig>({
    board: '',
    grade: '',
    subject: '',
    topicMode: 'specific',
    topics: [],
    difficulty: 'medium',
    questionType: 'mcq',
    numberOfQuestions: 10,
    purpose: 'practice',
  });

  const [customTopic, setCustomTopic] = useState('');
  const [customCount, setCustomCount] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/curriculum/boards')
      .then((r) => r.json())
      .then(setBoards)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const board = config.board || 'cbse';
    fetch(`/api/curriculum/grades?board=${board}`)
      .then((r) => r.json())
      .then(setGrades)
      .catch(() => {});
  }, [config.board]);

  useEffect(() => {
    if (!config.grade) return;
    const board = config.board || 'cbse';
    fetch(`/api/curriculum/subjects?board=${board}&grade=${config.grade}`)
      .then((r) => r.json())
      .then(setSubjects)
      .catch(() => {});
  }, [config.grade, config.board]);

  useEffect(() => {
    if (!config.grade || !config.subject) return;
    const board = config.board || 'cbse';
    fetch(`/api/curriculum/topics?board=${board}&subject=${config.subject}&grade=${config.grade}`)
      .then((r) => r.json())
      .then(setSuggestedTopics)
      .catch(() => {});
  }, [config.subject, config.grade, config.board]);

  useEffect(() => {
    if (!loading) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % LOADING_MESSAGES.length;
      setLoadingMsg(LOADING_MESSAGES[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, [loading]);

  function update<K extends keyof WorksheetConfig>(key: K, value: WorksheetConfig[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  function toggleTopic(topic: string) {
    setConfig((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic],
    }));
  }

  function addCustomTopic() {
    const t = customTopic.trim();
    if (t && !config.topics.includes(t)) {
      update('topics', [...config.topics, t]);
    }
    setCustomTopic('');
  }

  function canProceed(): boolean {
    if (step === 2) return !!config.grade;
    if (step === 3) return !!config.subject;
    if (step === 5) return config.topicMode === 'generalized' || config.topics.length > 0;
    return true;
  }

  async function handleGenerate() {
    setLoading(true);
    setError('');
    try {
      const payload = {
        ...config,
        numberOfQuestions: customCount ? Number.parseInt(customCount) : config.numberOfQuestions,
      };
      const res = await fetch('/api/worksheet/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Generation failed');
      }
      const worksheet = await res.json();
      setWorksheet(worksheet, payload);
      router.push('/worksheet');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function renderStep() {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Select a curriculum board</h2>
            <p className="text-sm text-gray-500 mb-4">Optional — skip if not applicable.</p>
            <div className="flex flex-wrap gap-3">
              <OptionButton selected={config.board === ''} onClick={() => update('board', '')}>
                No board / Other
              </OptionButton>
              {boards.map((b) => (
                <OptionButton key={b.id} selected={config.board === b.id} onClick={() => update('board', b.id)}>
                  {b.name}
                </OptionButton>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Select a grade</h2>
            <div className="grid grid-cols-4 gap-2">
              {grades.map((g) => (
                <OptionButton key={g.id} selected={config.grade === g.id} onClick={() => update('grade', g.id)}>
                  {g.name}
                </OptionButton>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Select a subject</h2>
            <div className="flex flex-wrap gap-2">
              {subjects.map((s) => (
                <OptionButton key={s.id} selected={config.subject === s.id} onClick={() => update('subject', s.id)}>
                  {s.name}
                </OptionButton>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">How should topics be selected?</h2>
            <div className="flex flex-col gap-3">
              {[
                { id: 'specific', label: 'Specific topics', desc: 'Choose topics from the curriculum or add your own' },
                { id: 'generalized', label: 'Full curriculum coverage', desc: 'Generate a broad worksheet covering a range of topics' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => update('topicMode', opt.id as 'specific' | 'generalized')}
                  className={`text-left p-4 rounded-lg border transition-colors
                    ${config.topicMode === opt.id
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-white border-gray-200 hover:border-blue-300'
                    }`}
                >
                  <div className="font-medium">{opt.label}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        if (config.topicMode === 'generalized') {
          return (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✓</div>
              <h2 className="text-lg font-semibold text-gray-800">Full curriculum mode selected</h2>
              <p className="text-sm text-gray-500 mt-1">The worksheet will cover a broad range of topics from {config.subject} Grade {config.grade}.</p>
            </div>
          );
        }
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Select topics</h2>
            <p className="text-sm text-gray-500 mb-3">Choose from suggestions or add your own.</p>
            {suggestedTopics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestedTopics.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTopic(t)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors
                      ${config.topics.includes(t)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCustomTopic()}
                placeholder="Add custom topic..."
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={addCustomTopic}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            {config.topics.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-gray-400 mb-1">Selected ({config.topics.length}):</p>
                <div className="flex flex-wrap gap-1">
                  {config.topics.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {t}
                      <button onClick={() => toggleTopic(t)} className="hover:text-red-500">×</button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Select difficulty level</h2>
            <div className="flex flex-wrap gap-3">
              {DIFFICULTIES.map((d) => (
                <OptionButton key={d.id} selected={config.difficulty === d.id} onClick={() => update('difficulty', d.id)}>
                  {d.label}
                </OptionButton>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Select question type</h2>
            <div className="flex flex-col gap-2">
              {QUESTION_TYPES.map((qt) => (
                <OptionButton key={qt.id} selected={config.questionType === qt.id} onClick={() => update('questionType', qt.id)}>
                  {qt.label}
                </OptionButton>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Number of questions</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {COUNT_PRESETS.map((n) => (
                  <OptionButton
                    key={n}
                    selected={config.numberOfQuestions === n && !customCount}
                    onClick={() => { update('numberOfQuestions', n); setCustomCount(''); }}
                  >
                    {n}
                  </OptionButton>
                ))}
              </div>
              <input
                type="number"
                min={1}
                max={50}
                value={customCount}
                onChange={(e) => setCustomCount(e.target.value)}
                placeholder="Custom (1–50)"
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-36 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Purpose</h2>
              <div className="flex flex-wrap gap-2">
                {PURPOSES.map((p) => (
                  <OptionButton key={p.id} selected={config.purpose === p.id} onClick={() => update('purpose', p.id)}>
                    {p.label}
                  </OptionButton>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.fastMode ?? false}
                  onChange={(e) => update('fastMode', e.target.checked)}
                  className="rounded"
                />{' '}
                Fast mode (quicker, no retry)
              </label>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                {error}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  }

  const stepLabels = ['Board', 'Grade', 'Subject', 'Topic Mode', 'Topics', 'Difficulty', 'Q Type', 'Generate'];

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-2xl">
        {/* Step indicator */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={(() => {
                      const base = 'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ';
                      if (i + 1 === step) return base + 'bg-blue-600 text-white';
                      if (i + 1 < step) return base + 'bg-green-500 text-white';
                      return base + 'bg-gray-100 text-gray-400';
                    })()}
                  >
                    {i + 1 < step ? '✓' : i + 1}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 hidden sm:block">{stepLabels[i]}</span>
                </div>
                {i < TOTAL_STEPS - 1 && (
                  <div className={`h-0.5 flex-1 mx-1 ${i + 1 < step ? 'bg-green-400' : 'bg-gray-100'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="p-6 min-h-48">{renderStep()}</div>

        {/* Navigation */}
        <div className="px-6 pb-6 flex justify-between items-center">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              disabled={loading}
              className="px-4 py-2 text-gray-500 hover:text-gray-700 text-sm disabled:opacity-40"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < TOTAL_STEPS ? (
            <button
              onClick={() => canProceed() && setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-60 min-w-48"
            >
              {loading ? loadingMsg : 'Generate Worksheet'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
