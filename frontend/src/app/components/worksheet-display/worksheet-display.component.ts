import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';

import { Worksheet, AnswerKey, WorksheetConfig } from '../../models/worksheet.model';
import { WorksheetService } from '../../services/worksheet.service';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-worksheet-display',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  templateUrl: './worksheet-display.component.html',
  styleUrl: './worksheet-display.component.scss'
})
export class WorksheetDisplayComponent implements OnInit, OnDestroy {
  worksheet: Worksheet | null = null;
  config: WorksheetConfig | null = null;
  answerKey: AnswerKey | null = null;

  showAnswerKeyBtn = true;
  isLoadingAnswers = false;
  isFastRegenerating = false;
  showAnswerKey = false;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private worksheetService: WorksheetService,
    private pdfService: PdfService,
    private snackBar: MatSnackBar
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.worksheet = nav.extras.state['worksheet'];
      this.config = nav.extras.state['config'];
    }
  }

  ngOnInit(): void {
    if (!this.worksheet) {
      this.router.navigate(['/']);
      return;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getAnswerKey(): void {
    if (!this.worksheet) return;

    this.isLoadingAnswers = true;
    this.worksheetService.generateAnswers(this.worksheet)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (answerKey) => {
          this.answerKey = answerKey;
          this.isLoadingAnswers = false;
          this.showAnswerKey = true;
        },
        error: (err) => {
          this.isLoadingAnswers = false;
          console.error('Failed to get answers:', err);
          this.snackBar.open('Failed to generate answer key. Try again.', 'OK', {
            duration: 5000
          });
        }
      });
  }

  toggleAnswerKey(): void {
    if (!this.answerKey) {
      this.getAnswerKey();
    } else {
      this.showAnswerKey = !this.showAnswerKey;
    }
  }

  downloadPdf(): void {
    if (!this.worksheet) return;
    this.pdfService.generatePdf(
      this.worksheet,
      this.showAnswerKey ? this.answerKey || undefined : undefined
    );
  }

  printWorksheet(): void {
    window.print();
  }

  regenerateWorksheet(): void {
    if (this.config) {
      this.router.navigate(['/'], {
        state: { prefill: this.config }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  regenerateFastWorksheet(): void {
    if (!this.config || this.isFastRegenerating) return;

    this.isFastRegenerating = true;
    const fastConfig: WorksheetConfig = {
      ...this.config,
      fastMode: true,
      premiumMode: false
    };

    this.worksheetService.generateWorksheet(fastConfig)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (worksheet) => {
          this.isFastRegenerating = false;
          this.router.navigate(['/worksheet'], {
            state: { worksheet, config: fastConfig }
          });
        },
        error: (err) => {
          this.isFastRegenerating = false;
          console.error('Fast regeneration error:', err);
          this.snackBar.open('Failed to fast regenerate worksheet. Try again.', 'OK', {
            duration: 5000
          });
        }
      });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, ' ');
  }

  questionTypeLabel(value: string | null | undefined): string {
    if (!value) return '-';
    const v = value.toLowerCase();
    switch (v) {
      case 'mcq':
        return 'MCQ';
      case 'fill_blank':
        return 'Fill in the Blanks';
      case 'true_false':
        return 'True / False';
      case 'match':
        return 'Match the Following';
      case 'short_answer':
        return 'Short Answer';
      case 'mixed':
        return 'Mixed';
      default:
        return this.capitalize(value);
    }
  }

  getAnswerForQuestion(questionNumber: number): any {
    if (!this.answerKey) return null;
    return this.answerKey.answers.find(a => a.number === questionNumber);
  }

  getMatchLabel(index: number): string {
    return String.fromCodePoint(97 + index);
  }
}
