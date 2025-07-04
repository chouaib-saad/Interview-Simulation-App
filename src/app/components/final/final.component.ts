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
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Load stats from localStorage
    const stats = localStorage.getItem('interviewStats');
    if (stats) {
      try {
        const parsed = JSON.parse(stats);
        this.correctAnswers = parsed.correctAnswers || 0;
        this.answered = parsed.answered || 0;
        this.total = parsed.total || 0;
        this.duration = parsed.duration || 0;
      } catch {}
    }
    // Ensure user reached this screen legitimately
    const interviewCompleted = localStorage.getItem('interviewCompleted') === 'true';
    
    if (!interviewCompleted) {
      this.router.navigate(['/']);
    }
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