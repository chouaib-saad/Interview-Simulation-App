import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Question {
  id: number;
  question: string;
}

interface QuestionsResponse {
  status: string;
  error: any;
  data: {
    messages: string;
    questions: Question[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsUrl = 'assets/questions.json';

  constructor(private http: HttpClient) {}

  getRandomQuestions(): Observable<Question[]> {
    return this.http.get<QuestionsResponse>(this.questionsUrl).pipe(
      map(response => {
        if (response.status === 'SUCCESS' && response.data?.questions) {
          return this.selectRandomQuestions(response.data.questions, 4);
        }
        throw new Error('Failed to load questions from response');
      })
    );
  }

  private selectRandomQuestions(questions: Question[], count: number): Question[] {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}