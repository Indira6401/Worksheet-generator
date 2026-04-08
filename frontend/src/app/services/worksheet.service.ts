import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worksheet, AnswerKey, WorksheetConfig } from '../models/worksheet.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorksheetService {
  private baseUrl = `${environment.apiUrl}/worksheet`;

  constructor(private http: HttpClient) {}

  generateWorksheet(config: WorksheetConfig): Observable<Worksheet> {
    return this.http.post<Worksheet>(`${this.baseUrl}/generate`, config);
  }

  generateAnswers(worksheet: Worksheet): Observable<AnswerKey> {
    return this.http.post<AnswerKey>(`${this.baseUrl}/answers`, { worksheet });
  }
}
