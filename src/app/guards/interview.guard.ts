import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterviewGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const interviewStarted = localStorage.getItem('interviewStarted') === 'true';
    const interviewCompleted = localStorage.getItem('interviewCompleted') === 'true';
    const currentRoute = route.routeConfig?.path;

    // If interview is completed, only allow access to final screen
    if (interviewCompleted) {
      if (currentRoute !== 'final') {
        this.router.navigate(['/final']);
        return false;
      }
      return true;
    }

    // If interview hasn't started, don't allow access to interview or final screens
    if (!interviewStarted && (currentRoute === 'interview' || currentRoute === 'final')) {
      this.router.navigate(['/']);
      return false;
    }

    // If interview started but not completed, only allow access to interview screen
    if (interviewStarted && !interviewCompleted) {
      if (currentRoute !== 'interview') {
        this.router.navigate(['/interview']);
        return false;
      }
      return true;
    }

    return true;
  }
}