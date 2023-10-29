import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';  

  constructor(private http: HttpClient) {}

  getTriviaQuestions() {
    return this.http.get(this.apiUrl);
  }
}