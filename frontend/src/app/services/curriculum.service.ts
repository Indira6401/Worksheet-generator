import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board, Grade, Subject } from '../models/worksheet.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private baseUrl = `${environment.apiUrl}/curriculum`;

  constructor(private http: HttpClient) {}

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.baseUrl}/boards`);
  }

  getGrades(board: string): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.baseUrl}/grades`, {
      params: { board }
    });
  }

  getSubjects(board: string, grade: string): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.baseUrl}/subjects`, {
      params: { board, grade }
    });
  }

  getTopics(board: string, subject: string, grade: string): Observable<string[]> {
    const params: Record<string, string> = { board, subject, grade };
    return this.http.get<string[]>(`${this.baseUrl}/topics`, { params });
  }
}
