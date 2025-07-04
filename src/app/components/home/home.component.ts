import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isButtonDisabled = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if interview has already been started or completed
    const interviewStarted = localStorage.getItem('interviewStarted') === 'true';
    const interviewCompleted = localStorage.getItem('interviewCompleted') === 'true';
    
    if (interviewStarted || interviewCompleted) {
      this.isButtonDisabled = true;
    }

    // If interview is completed, redirect to final screen
    if (interviewCompleted) {
      this.router.navigate(['/final']);
    }
  }

  startInterview(): void {
    if (this.isButtonDisabled) return;
    
    // Mark interview as started and disable button
    localStorage.setItem('interviewStarted', 'true');
    this.isButtonDisabled = true;
    
    // Navigate to interview screen
    this.router.navigate(['/interview']);
  }
}