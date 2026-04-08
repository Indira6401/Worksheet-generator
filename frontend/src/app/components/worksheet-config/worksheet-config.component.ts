import { Component, OnInit, OnDestroy, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject as RxSubject, takeUntil } from 'rxjs';

// Angular Material
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { CurriculumService } from '../../services/curriculum.service';
import { WorksheetService } from '../../services/worksheet.service';
import { Board, Grade, Subject, WorksheetConfig } from '../../models/worksheet.model';

@Component({
  selector: 'app-worksheet-config',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  templateUrl: './worksheet-config.component.html',
  styleUrl: './worksheet-config.component.scss'
})
export class WorksheetConfigComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;
  worksheetForm!: FormGroup;
  private destroy$ = new RxSubject<void>();
  activeStep = 0;

  boards: Board[] = [];
  grades: Grade[] = [];
  subjects: Subject[] = [];
  suggestedTopics: string[] = [];
  selectedTopics: string[] = [];
  customTopicInput = '';

  isLoading = false;
  isGenerating = false;
  loadingMessage = '';

  readonly separatorKeyCodes = [ENTER, COMMA] as const;

  loadingMessages = [
    'Building your worksheet...',
    'Preparing smart questions...',
    'Get ready for your test...',
    'Crafting curriculum-aligned questions...',
    'Almost there, finalizing your worksheet...',
    'Analyzing difficulty level...',
    'Generating engaging questions...'
  ];

  difficultyLevels = [
    { value: 'easy', label: 'Easy', icon: 'sentiment_satisfied', desc: 'Basic recall & understanding' },
    { value: 'medium', label: 'Medium', icon: 'trending_up', desc: 'Application & analysis' },
    { value: 'hard', label: 'Hard', icon: 'psychology', desc: 'Higher-order thinking' },
    { value: 'advanced', label: 'Advanced', icon: 'rocket_launch', desc: 'Critical thinking & evaluation' }
  ];

  questionTypes = [
    { value: 'mcq', label: 'MCQ' },
    { value: 'fill_blank', label: 'Fill in the Blanks' },
    { value: 'true_false', label: 'True / False' },
    { value: 'match', label: 'Match the Following' },
    { value: 'short_answer', label: 'Short Answer' },
    { value: 'mixed', label: 'Mixed' }
  ];

  questionCounts = [5, 10, 15, 20];
  isCustomCount = false;

  purposes = [
    { value: 'practice', label: 'Practice', icon: 'fitness_center' },
    { value: 'homework', label: 'Homework', icon: 'home_work' },
    { value: 'revision', label: 'Revision', icon: 'refresh' },
    { value: 'test', label: 'Test', icon: 'quiz' }
  ];

  private readonly fallbackBoard = 'cbse';

  constructor(
    private fb: FormBuilder,
    private curriculumService: CurriculumService,
    private worksheetService: WorksheetService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadBoards();
    this.setupFormListeners();
    this.loadInitialDependentData();
  }

  ngAfterViewInit(): void {
    // Open first panel on load
    setTimeout(() => this.openPanel(0));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm(): void {
    this.worksheetForm = this.fb.group({
      board: [''],
      grade: ['', Validators.required],
      subject: ['', Validators.required],
      topicMode: ['specific'],
      difficulty: ['easy', Validators.required],
      questionType: ['mcq'],
      numberOfQuestions: [10],
      customQuestionCount: [null],
      purpose: ['practice']
    });
  }

  private loadInitialDependentData(): void {
    this.curriculumService.getGrades(this.getEffectiveBoard())
      .pipe(takeUntil(this.destroy$))
      .subscribe(grades => this.grades = grades);
  }

  private setupFormListeners(): void {
    // Board changes → load grades
    this.worksheetForm.get('board')!.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(board => {
        this.grades = [];
        this.subjects = [];
        this.suggestedTopics = [];
        this.selectedTopics = [];
        this.worksheetForm.patchValue({
          grade: '', subject: ''
        }, { emitEvent: false });

        this.curriculumService.getGrades(this.getEffectiveBoard())
          .pipe(takeUntil(this.destroy$))
          .subscribe(grades => this.grades = grades);

        this.openPanel(1); // auto-advance to Grade
      });

    // Grade changes → load subjects
    this.worksheetForm.get('grade')!.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(grade => {
        this.subjects = [];
        this.suggestedTopics = [];
        this.selectedTopics = [];
        this.worksheetForm.patchValue({
          subject: ''
        }, { emitEvent: false });

        const board = this.getEffectiveBoard();
        if (board && grade) {
          this.curriculumService.getSubjects(board, grade)
            .pipe(takeUntil(this.destroy$))
            .subscribe(subjects => this.subjects = subjects);
          this.openPanel(2); // auto-advance to Subject
        }
      });

    // Subject changes → load topics
    this.worksheetForm.get('subject')!.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(subject => {
        this.suggestedTopics = [];
        this.selectedTopics = [];

        const board = this.getEffectiveBoard();
        if (board && subject) {
          this.refreshSuggestedTopics();
          this.openPanel(4); // auto-advance to Topics
        }
      });
  }

  private refreshSuggestedTopics(): void {
    const board = this.getEffectiveBoard();
    const grade = this.worksheetForm.get('grade')!.value;
    const subject = this.worksheetForm.get('subject')!.value;

    if (!board || !grade || !subject) return;

    this.curriculumService.getTopics(board, subject, grade)
      .pipe(takeUntil(this.destroy$))
      .subscribe(topics => this.suggestedTopics = topics);
  }

  private getEffectiveBoard(): string {
    return this.worksheetForm.get('board')!.value || this.fallbackBoard;
  }

  private loadBoards(): void {
    this.curriculumService.getBoards()
      .pipe(takeUntil(this.destroy$))
      .subscribe(boards => this.boards = boards);
  }

  onTopicToggle(topic: string): void {
    const index = this.selectedTopics.indexOf(topic);
    if (index === -1) {
      this.selectedTopics.push(topic);
    } else {
      this.selectedTopics.splice(index, 1);
    }
  }

  isTopicSelected(topic: string): boolean {
    return this.selectedTopics.includes(topic);
  }

  addCustomTopic(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && !this.selectedTopics.includes(value)) {
      this.selectedTopics.push(value);
    }
    event.chipInput!.clear();
    this.customTopicInput = '';
  }

  removeCustomTopic(topic: string): void {
    const index = this.selectedTopics.indexOf(topic);
    if (index >= 0) {
      this.selectedTopics.splice(index, 1);
    }
  }

  setQuestionCount(count: number): void {
    this.isCustomCount = false;
    this.worksheetForm.patchValue({ numberOfQuestions: count, customQuestionCount: null });
  }

  enableCustomCount(): void {
    this.isCustomCount = true;
    this.worksheetForm.patchValue({ numberOfQuestions: null });
  }

  onCustomCountChange(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    if (val >= 1 && val <= 50) {
      this.worksheetForm.patchValue({ numberOfQuestions: val });
    }
  }

  getValidationErrors(): string[] {
    const errors: string[] = [];
    const form = this.worksheetForm;
    if (!form.get('grade')!.value) errors.push('Grade');
    if (!form.get('subject')!.value) errors.push('Subject');
    if (!form.get('difficulty')!.value) errors.push('Difficulty Level');
    if (form.get('topicMode')!.value === 'specific' && this.selectedTopics.length === 0) {
      errors.push('Topics');
    }
    if (this.isCustomCount && !form.get('numberOfQuestions')!.value) {
      errors.push('Number of Questions');
    }
    return errors;
  }

  canGenerate(): boolean {
    return this.getValidationErrors().length === 0;
  }

  generateWorksheet(): void {
    const errors = this.getValidationErrors();
    if (errors.length > 0) {
      this.snackBar.open(
        `Please fill in: ${errors.join(', ')}`,
        'OK',
        { duration: 5000, panelClass: 'error-snackbar' }
      );
      return;
    }

    const form = this.worksheetForm.value;
    const config: WorksheetConfig = {
      board: form.board || undefined,
      grade: form.grade,
      subject: form.subject,
      topicMode: form.topicMode || 'generalized',
      topics: form.topicMode === 'specific' ? this.selectedTopics : [],
      difficulty: form.difficulty || 'easy',
      questionType: form.questionType || 'mcq',
      numberOfQuestions: form.numberOfQuestions || 10,
      purpose: form.purpose || 'practice',
      fastMode: false,
      premiumMode: false
    };

    this.isGenerating = true;
    this.animateLoadingMessages();

    this.worksheetService.generateWorksheet(config)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (worksheet) => {
          this.isGenerating = false;
          // Navigate to display with worksheet data
          this.router.navigate(['/worksheet'], {
            state: { worksheet, config }
          });
        },
        error: (err) => {
          this.isGenerating = false;
          console.error('Generation error:', err);
          this.snackBar.open(
            'Failed to generate worksheet. Please try again.',
            'OK',
            { duration: 5000, panelClass: 'error-snackbar' }
          );
        }
      });
  }

  private animateLoadingMessages(): void {
    let idx = 0;
    this.loadingMessage = this.loadingMessages[0];
    const interval = setInterval(() => {
      if (!this.isGenerating) {
        clearInterval(interval);
        return;
      }
      idx = (idx + 1) % this.loadingMessages.length;
      this.loadingMessage = this.loadingMessages[idx];
    }, 2500);
  }

  getBoardName(id: string): string {
    return this.boards.find(b => b.id === id)?.name || id;
  }

  getGradeName(id: string): string {
    return this.grades.find(g => g.id === id)?.name || id;
  }

  getSubjectName(id: string): string {
    return this.subjects.find(s => s.id === id)?.name || id;
  }

  getQuestionTypeLabel(value: string): string {
    return this.questionTypes.find(q => q.value === value)?.label || value;
  }

  /** Open a specific accordion panel by index and track active step */
  openPanel(index: number): void {
    this.activeStep = index;
    const panelArray = this.panels?.toArray();
    if (panelArray && panelArray[index]) {
      setTimeout(() => panelArray[index].open(), 50);
    }
  }

  /** Called when difficulty is selected — advance to question type */
  onDifficultySelected(): void {
    this.openPanel(6);
  }

  /** Called when topic mode changes */
  onTopicModeChange(event: any): void {
    if (event.value === 'generalized') {
      this.openPanel(5); // advance to Difficulty
    }
    if (event.value === 'specific') {
      this.refreshSuggestedTopics();
    }
  }

  /** Called when question type is selected — advance to # questions */
  onQuestionTypeSelected(): void {
    this.openPanel(7);
  }

  /** Called when question count is chosen — advance to purpose */
  onQuestionCountSelected(): void {
    this.openPanel(8);
  }
}
