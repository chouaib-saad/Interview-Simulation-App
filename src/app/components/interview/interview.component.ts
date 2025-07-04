import { Component, OnInit, OnDestroy, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionService, Question } from '../../services/question.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit, OnDestroy {
  correctAnswersCount = 0;
  answeredCount = 0;
  startTime: number = 0;
  endTime: number = 0;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  countdown = 10;
  isThinkingPhase = false;
  isInterviewActive = false;
  private countdownInterval: any;
  private questionsSubscription: Subscription = new Subscription();

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.enterFullScreen();
    this.loadQuestions();
  }

  ngOnDestroy(): void {
    this.exitFullScreen();
    this.clearTimer();
    this.questionsSubscription.unsubscribe();
  }

  @HostListener('window:blur', ['$event'])
  @HostListener('window:beforeunload', ['$event'])
  @HostListener('document:visibilitychange', ['$event'])
  onFocusLoss(): void {
    if (this.isInterviewActive) {
      this.terminateInterview();
    }
  }

  private loadQuestions(): void {
    this.questionsSubscription = this.questionService.getRandomQuestions().subscribe({
      next: (questions) => {
        this.questions = questions;
        this.startInterview();
      },
      error: (error) => {
        console.error('Error loading questions:', error);
        alert('Failed to load questions. Please try again.');
        this.router.navigate(['/']);
      }
    });
  }

  private startInterview(): void {
    this.correctAnswersCount = 0;
    this.answeredCount = 0;
    this.startTime = Date.now();
    this.isInterviewActive = true;
    this.startQuestionTimer();
  }

  private startQuestionTimer(): void {
    this.clearTimer();
    this.countdown = 10;
    this.isThinkingPhase = false;
    
    this.countdownInterval = setInterval(() => {
      this.ngZone.run(() => {
        this.countdown--;
        
        if (this.countdown <= 0) {
          this.nextQuestion();
        }
      });
    }, 1000);
  }

  private nextQuestion(): void {
    this.clearTimer();
    
    if (this.currentQuestionIndex < this.questions.length - 1) {
      // Start thinking phase
      this.isThinkingPhase = true;
      this.countdown = 10;
      
      // Thinking phase timer
      this.countdownInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.countdown--;
          
          if (this.countdown <= 0) {
            this.currentQuestionIndex++;
            this.startQuestionTimer();
          }
        });
      }, 1000);
    } else {
      this.completeInterview();
    }
  }

  private completeInterview(): void {
    this.isInterviewActive = false;
    this.clearTimer();
    this.endTime = Date.now();
    localStorage.setItem('interviewCompleted', 'true');
    localStorage.removeItem('interviewStarted');
    // Save stats for final screen
    localStorage.setItem('interviewStats', JSON.stringify({
      correctAnswers: this.correctAnswersCount,
      answered: this.answeredCount,
      total: this.questions.length,
      duration: Math.floor((this.endTime - this.startTime) / 1000)
    }));
    this.router.navigate(['/final']);
    this.isInterviewActive = false;
    this.clearTimer();
    localStorage.setItem('interviewCompleted', 'true');
    localStorage.removeItem('interviewStarted');
    this.router.navigate(['/final']);
  }

  private terminateInterview(): void {
    this.isInterviewActive = false;
    this.clearTimer();
    this.endTime = Date.now();
    localStorage.setItem('interviewCompleted', 'true');
    localStorage.removeItem('interviewStarted');
    // Save stats for final screen
    localStorage.setItem('interviewStats', JSON.stringify({
      correctAnswers: this.correctAnswersCount,
      answered: this.answeredCount,
      total: this.questions.length,
      duration: Math.floor((this.endTime - this.startTime) / 1000)
    }));
    alert('Interview terminated due to focus loss. You will be redirected to the final screen.');
    this.router.navigate(['/final']);
    this.isInterviewActive = false;
    this.clearTimer();
    localStorage.setItem('interviewCompleted', 'true');
    localStorage.removeItem('interviewStarted');
    alert('Interview terminated due to focus loss. You will be redirected to the final screen.');
    this.router.navigate(['/final']);
  }

  private clearTimer(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  private enterFullScreen(): void {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      try {
        const result = elem.requestFullscreen();
        if (result && typeof result.catch === 'function') {
          result.catch((err: any) => {
            console.log('Failed to enter fullscreen:', err);
          });
        }
      } catch (err) {
        console.log('Failed to enter fullscreen:', err);
      }
    }
  }

  private exitFullScreen(): void {
    if (document.exitFullscreen && document.fullscreenElement) {
      try {
        const result = document.exitFullscreen();
        if (result && typeof result.catch === 'function') {
          result.catch((err: any) => {
            console.log('Failed to exit fullscreen:', err);
          });
        }
      } catch (err) {
        console.log('Failed to exit fullscreen:', err);
      }
    }
  }

  get currentQuestion(): Question | null {
    return this.questions[this.currentQuestionIndex] || null;
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

}