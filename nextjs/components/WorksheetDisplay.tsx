'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWorksheet } from '@/context/WorksheetContext';
import { generatePdf } from '@/lib/pdf';
import type { AnswerKey, WorksheetQuestion } from '@/types/worksheet';

function formatAnswer(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => `${k} → ${v}`)
      .join('\n');
  }
  return JSON.stringify(value);
}

function QuestionView({ q }: { q: WorksheetQuestion }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <p className="font-medium text-gray-800">
        {q.number}. {q.question}
        <span className="ml-2 text-xs text-gray-400 font-normal">[{q.marks} mark{q.marks !== 1 ? 's' : ''}]</span>
      </p>

      {q.type === 'mcq' && q.options && (
        <ul className="mt-2 ml-4 space-y-1">
          {q.options.map((opt, i) => (
            <li key={i} className="text-sm text-gray-700">{opt}</li>
          ))}
        </ul>
      )}

      {q.type === 'match' && q.matchColumns && (
        <div className="mt-2 ml-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Column A</p>
            {q.matchColumns.columnA.map((item, i) => (
              <p key={i} className="text-sm text-gray-700">{i + 1}. {item}</p>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Column B</p>
            {q.matchColumns.columnB.map((item, i) => (
              <p key={i} className="text-sm text-gray-700">{String.fromCharCode(65 + i)}. {item}</p>
            ))}
          </div>
        </div>
      )}

      {q.type === 'short_answer' && (
        <div className="mt-2 ml-4 space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-b border-gray-200 h-5 w-full" />
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorksheetDisplay() {
  const router = useRouter();
  const { worksheet, clearWorksheet } = useWorksheet();
  const [answerKey, setAnswerKey] = useState<AnswerKey | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [loadingAnswers, setLoadingAnswers] = useState(false);
  const [answerError, setAnswerError] = useState('');

  useEffect(() => {
    if (!worksheet) router.replace('/');
  }, [worksheet, router]);

  if (!worksheet) return null;

  const meta = worksheet.metadata;

  async function fetchAnswerKey() {
    if (answerKey) {
      setShowAnswers((s) => !s);
      return;
    }
    setLoadingAnswers(true);
    setAnswerError('');
    try {
      const res = await fetch('/api/worksheet/answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ worksheet }),
      });
      if (!res.ok) throw new Error('Failed to generate answer key');
      const key = await res.json();
      setAnswerKey(key);
      setShowAnswers(true);
    } catch (e) {
      setAnswerError(e instanceof Error ? e.message : 'Failed to get answers');
    } finally {
      setLoadingAnswers(false);
    }
  }

  function handleNewWorksheet() {
    clearWorksheet();
    router.push('/');
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={handleNewWorksheet}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 flex items-center gap-1"
        >
          ← New Worksheet
        </button>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={fetchAnswerKey}
            disabled={loadingAnswers}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 disabled:opacity-60"
          >
            {loadingAnswers ? 'Loading answers...' : showAnswers ? 'Hide answers' : 'Get answer key'}
          </button>
          <button
            onClick={() => generatePdf(worksheet)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
          >
            Download PDF
          </button>
          {answerKey && (
            <button
              onClick={() => generatePdf(worksheet, answerKey)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-800"
            >
              PDF with answers
            </button>
          )}
        </div>
      </div>

      {/* Worksheet card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">{worksheet.title}</h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 mb-6">
          {meta.board !== '-' && <span className="bg-gray-100 px-2 py-0.5 rounded">{meta.board}</span>}
          <span className="bg-gray-100 px-2 py-0.5 rounded">Grade {meta.grade}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded capitalize">{meta.subject.replace(/_/g, ' ')}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded capitalize">{meta.difficulty}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded capitalize">{meta.purpose}</span>
        </div>

        {/* Student info */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div><span className="text-gray-400">Name</span><div className="border-b border-gray-300 mt-2 h-4" /></div>
          <div><span className="text-gray-400">Date</span><div className="border-b border-gray-300 mt-2 h-4" /></div>
          <div><span className="text-gray-400">Total marks</span><div className="font-semibold mt-2">{worksheet.totalMarks}</div></div>
          <div><span className="text-gray-400">Questions</span><div className="font-semibold mt-2">{meta.numberOfQuestions}</div></div>
        </div>

        {/* Instructions */}
        {worksheet.instructions && (
          <p className="text-sm text-gray-500 italic mb-6 border-l-2 border-blue-200 pl-3">{worksheet.instructions}</p>
        )}

        {/* Questions */}
        <div>
          {worksheet.questions.map((q) => (
            <QuestionView key={q.number} q={q} />
          ))}
        </div>
      </div>

      {/* Answer key */}
      {answerError && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{answerError}</div>
      )}

      {showAnswers && answerKey && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Answer Key</h2>
          <div className="space-y-3">
            {answerKey.answers.map((ans) => (
              <div key={ans.number} className="flex gap-3">
                <span className="font-semibold text-gray-700 w-6 shrink-0">{ans.number}.</span>
                <div>
                  {formatAnswer(ans.answer).split('\n').map((line) => (
                    <p key={line} className="text-gray-800">{line}</p>
                  ))}
                  {ans.explanation && (
                    <p className="text-sm text-gray-500 italic mt-0.5">{formatAnswer(ans.explanation)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
