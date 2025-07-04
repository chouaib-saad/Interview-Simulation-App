import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InterviewComponent } from './components/interview/interview.component';
import { FinalComponent } from './components/final/final.component';
import { InterviewGuard } from './guards/interview.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'interview', 
    component: InterviewComponent,
    canActivate: [InterviewGuard]
  },
  { 
    path: 'final', 
    component: FinalComponent,
    canActivate: [InterviewGuard]
  },
  { path: '**', redirectTo: '' }
];