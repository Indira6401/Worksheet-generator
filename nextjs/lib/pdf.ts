import jsPDF from 'jspdf';
import type { Worksheet, AnswerKey } from '@/types/worksheet';

export function generatePdf(worksheet: Worksheet, answerKey?: AnswerKey) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = 210;
  const margin = 15;
  const contentW = pageW - margin * 2;
  let y = margin;

  function checkPageBreak(needed = 20) {
    if (y + needed > 282) {
      doc.addPage();
      y = margin;
    }
  }

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(worksheet.title, pageW / 2, y, { align: 'center' });
  y += 10;

  // Metadata bar
  const meta = worksheet.metadata;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const metaParts = [
    meta.board !== '-' ? `Board: ${meta.board}` : null,
    `Grade: ${meta.grade}`,
    `Subject: ${meta.subject}`,
    `Difficulty: ${meta.difficulty}`,
    `Purpose: ${meta.purpose}`,
  ].filter(Boolean);
  doc.text(metaParts.join('  |  '), pageW / 2, y, { align: 'center' });
  y += 7;

  doc.setDrawColor(180, 180, 180);
  doc.line(margin, y, pageW - margin, y);
  y += 6;

  // Student info
  doc.setFontSize(10);
  doc.text(
    `Name: _________________________    Date: ___________    Total Marks: ${worksheet.totalMarks}    Questions: ${meta.numberOfQuestions}`,
    margin,
    y
  );
  y += 8;

  // Instructions
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  const instrLines = doc.splitTextToSize(`Instructions: ${worksheet.instructions}`, contentW);
  doc.text(instrLines, margin, y);
  y += instrLines.length * 5 + 4;

  doc.setDrawColor(180, 180, 180);
  doc.line(margin, y, pageW - margin, y);
  y += 7;

  // Questions
  worksheet.questions.forEach((q) => {
    checkPageBreak(28);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    const qText = `${q.number}. ${q.question}  [${q.marks} mark${q.marks !== 1 ? 's' : ''}]`;
    const qLines = doc.splitTextToSize(qText, contentW);
    doc.text(qLines, margin, y);
    y += qLines.length * 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);

    if (q.type === 'mcq' && q.options) {
      q.options.forEach((opt) => {
        checkPageBreak(7);
        const optLines = doc.splitTextToSize(`  ${opt}`, contentW - 8);
        doc.text(optLines, margin + 4, y);
        y += optLines.length * 5;
      });
    } else if (q.type === 'match' && q.matchColumns) {
      const { columnA, columnB } = q.matchColumns;
      const rows = Math.max(columnA.length, columnB.length);
      checkPageBreak(rows * 7 + 10);
      const colW = contentW / 2 - 8;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('Column A', margin + 4, y);
      doc.text('Column B', margin + contentW / 2 + 4, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      for (let i = 0; i < rows; i++) {
        checkPageBreak(7);
        const aLines = doc.splitTextToSize(`${i + 1}. ${columnA[i] ?? ''}`, colW);
        const bLines = doc.splitTextToSize(`${String.fromCharCode(65 + i)}. ${columnB[i] ?? ''}`, colW);
        doc.text(aLines, margin + 4, y);
        doc.text(bLines, margin + contentW / 2 + 4, y);
        y += Math.max(aLines.length, bLines.length) * 5 + 1;
      }
    } else if (q.type === 'short_answer') {
      checkPageBreak(22);
      doc.setDrawColor(210, 210, 210);
      for (let i = 0; i < 3; i++) {
        y += 7;
        doc.line(margin + 4, y, pageW - margin, y);
      }
    }

    y += 6;
  });

  // Answer key on a new page
  if (answerKey && answerKey.answers.length > 0) {
    doc.addPage();
    y = margin;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Answer Key', pageW / 2, y, { align: 'center' });
    y += 12;

    answerKey.answers.forEach((ans) => {
      checkPageBreak(15);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(`${ans.number}.`, margin, y);
      doc.setFont('helvetica', 'normal');
      const ansLines = doc.splitTextToSize(ans.answer, contentW - 10);
      doc.text(ansLines, margin + 8, y);
      y += ansLines.length * 5 + 2;

      if (ans.explanation) {
        checkPageBreak(10);
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(10);
        const expLines = doc.splitTextToSize(`Explanation: ${ans.explanation}`, contentW - 10);
        doc.text(expLines, margin + 8, y);
        y += expLines.length * 5 + 3;
      }
    });
  }

  const filename = `${worksheet.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
  doc.save(filename);
}
