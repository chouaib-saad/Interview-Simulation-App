import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  correctAnswers: number = 0;
  answered: number = 0;
  total: number = 0;
  duration: number = 0;
  isFraudDetected: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Load stats from localStorage
    const stats = localStorage.getItem('interviewStats');
    
    if (stats) {
      try {
        const parsed = JSON.parse(stats);
        this.correctAnswers = parsed.correctAnswers || 0;
        this.answered = parsed.answered || 0;
        this.total = parsed.total || 4;
        this.duration = parsed.duration || 0;
      } catch (error) {
        console.error('Error parsing interview stats:', error);
        // Fallback values
        this.answered = 0;
        this.total = 4;
      }
    } else {
      // If no stats available, set defaults
      this.answered = 0;
      this.total = 4;
    }
    
    // Check for fraud detection
    this.checkForFraud();
    
    // Ensure user reached this screen legitimately
    const interviewCompleted = localStorage.getItem('interviewCompleted') === 'true';
    
    if (!interviewCompleted) {
      this.router.navigate(['/']);
    }
  }

  private checkForFraud(): void {
    // Check if fraud was explicitly flagged (e.g., tab switching)
    const fraudFlagged = localStorage.getItem('fraudDetected') === 'true';
    
    // Check if interview was terminated early
    const terminatedEarly = this.answered < this.total;
    
    // Set fraud detection if either condition is met
    this.isFraudDetected = fraudFlagged || terminatedEarly;
  }

  get durationString(): string {
    if (this.duration < 60) return `${this.duration} seconds`;
    const min = Math.floor(this.duration / 60);
    const sec = this.duration % 60;
    return sec ? `${min} min ${sec} sec` : `${min} min`;
  }

  resetInterview(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}