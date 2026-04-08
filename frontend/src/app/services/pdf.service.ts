import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Worksheet, AnswerKey } from '../models/worksheet.model';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  generatePdf(worksheet: Worksheet, answerKey?: AnswerKey): void {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let y = margin;

    // ---- HEADER AREA ----
    doc.setDrawColor(42, 123, 155);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    // School name placeholder
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(33, 33, 33);
    const title = worksheet.title || 'Worksheet';
    const titleLines = doc.splitTextToSize(title, contentWidth);
    doc.text(titleLines, pageWidth / 2, y, { align: 'center' });
    y += titleLines.length * 8 + 4;

    // Subject & Grade
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(66, 66, 66);
    const subjectGrade = `${this.capitalize(worksheet.metadata.subject)} | Grade ${worksheet.metadata.grade} | ${worksheet.metadata.board}`;
    doc.text(subjectGrade, pageWidth / 2, y, { align: 'center' });
    y += 8;

    // Purpose badge
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Purpose: ${this.capitalize(worksheet.metadata.purpose)} | Difficulty: ${this.capitalize(worksheet.metadata.difficulty)}`, pageWidth / 2, y, { align: 'center' });
    y += 6;

    doc.setDrawColor(42, 123, 155);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    // Student info area
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(33, 33, 33);
    doc.text('Student Name: _________________________________', margin, y);
    doc.text('Date: _______________', pageWidth - margin - 55, y);
    y += 8;

    doc.text(`Total Marks: ${worksheet.totalMarks || worksheet.questions.length}`, margin, y);
    doc.text(`Total Questions: ${worksheet.questions.length}`, pageWidth - margin - 55, y);
    y += 6;

    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;

    // Instructions
    if (worksheet.instructions) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(100, 100, 100);
      const instrLines = doc.splitTextToSize(`Instructions: ${worksheet.instructions}`, contentWidth);
      doc.text(instrLines, margin, y);
      y += instrLines.length * 5 + 6;
    }

    // ---- QUESTIONS ----
    doc.setTextColor(33, 33, 33);
    worksheet.questions.forEach((q, index) => {
      // Check if we need a new page
      if (y > pageHeight - 40) {
        doc.addPage();
        y = margin;
      }

      // Question number & text
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      const qPrefix = `Q${q.number}. `;
      doc.text(qPrefix, margin, y);
      const prefixWidth = doc.getTextWidth(qPrefix);

      doc.setFont('helvetica', 'normal');
      const qLines = doc.splitTextToSize(q.question, contentWidth - prefixWidth - 2);
      doc.text(qLines, margin + prefixWidth, y);
      y += qLines.length * 5.5 + 2;

      // Marks
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(`[${q.marks || 1} mark${(q.marks || 1) > 1 ? 's' : ''}]`, pageWidth - margin - 15, y - qLines.length * 5.5);
      doc.setTextColor(33, 33, 33);

      // Options for MCQ
      if (q.options && q.options.length > 0) {
        doc.setFontSize(10);
        q.options.forEach(opt => {
          if (y > pageHeight - 30) {
            doc.addPage();
            y = margin;
          }
          const optLines = doc.splitTextToSize(opt, contentWidth - 15);
          doc.text(optLines, margin + 10, y);
          y += optLines.length * 5 + 2;
        });
        y += 2;
      }

      // Match columns
      if (q.matchColumns) {
        doc.setFontSize(10);
        const colA = q.matchColumns.columnA || [];
        const colB = q.matchColumns.columnB || [];
        const maxLen = Math.max(colA.length, colB.length);

        doc.setFont('helvetica', 'bold');
        doc.text('Column A', margin + 10, y);
        doc.text('Column B', margin + contentWidth / 2, y);
        doc.setFont('helvetica', 'normal');
        y += 6;

        for (let i = 0; i < maxLen; i++) {
          if (y > pageHeight - 30) {
            doc.addPage();
            y = margin;
          }
          const aText = colA[i] ? `${i + 1}. ${colA[i]}` : '';
          const bText = colB[i] ? `${String.fromCodePoint(97 + i)}. ${colB[i]}` : '';
          doc.text(aText, margin + 10, y);
          doc.text(bText, margin + contentWidth / 2, y);
          y += 6;
        }
        y += 4;
      }

      // Answer space for fill-in-blank and short answer
      if (q.type === 'fill_blank') {
        y += 2;
      } else if (q.type === 'short_answer') {
        // Draw dotted lines for answer space
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        for (let l = 0; l < 3; l++) {
          if (y > pageHeight - 25) {
            doc.addPage();
            y = margin;
          }
          doc.line(margin + 5, y, pageWidth - margin - 5, y);
          y += 7;
        }
        y += 3;
      }

      y += 4;
    });

    // ---- ANSWER KEY (if provided) ----
    if (answerKey?.answers && answerKey.answers.length > 0) {
      doc.addPage();
      y = margin;

      doc.setDrawColor(42, 123, 155);
      doc.setLineWidth(1);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;

      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(42, 123, 155);
      doc.text('Answer Key', pageWidth / 2, y, { align: 'center' });
      y += 10;

      doc.setDrawColor(42, 123, 155);
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 10;

      doc.setTextColor(33, 33, 33);
      answerKey.answers.forEach(a => {
        if (y > pageHeight - 35) {
          doc.addPage();
          y = margin;
        }

        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(`Q${a.number}.`, margin, y);

        doc.setFont('helvetica', 'normal');
        const ansLines = doc.splitTextToSize(a.answer, contentWidth - 15);
        doc.text(ansLines, margin + 12, y);
        y += ansLines.length * 5.5 + 2;

        if (a.explanation) {
          doc.setFontSize(9);
          doc.setFont('helvetica', 'italic');
          doc.setTextColor(100, 100, 100);
          const expLines = doc.splitTextToSize(`Explanation: ${a.explanation}`, contentWidth - 15);
          doc.text(expLines, margin + 12, y);
          y += expLines.length * 4.5 + 4;
          doc.setTextColor(33, 33, 33);
        }

        y += 3;
      });
    }

    // Footer on all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Page ${i} of ${totalPages} | Generated by SheetGenie`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    // Save
    const fileName = `${worksheet.metadata.subject}_Grade${worksheet.metadata.grade}_${worksheet.metadata.difficulty}_worksheet.pdf`;
    doc.save(fileName);
  }

  private capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, ' ');
  }
}
