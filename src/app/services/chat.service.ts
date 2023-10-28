import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}
  // Gọi API để đặt câu hỏi và lấy câu trả lời
  getAnswer(cauHoi: string): Observable<any> {
    const body = {
      cauHoi: cauHoi,
    };
    return this.http.post(`http://localhost:8082/api/chat/dat-cau-hoi`, body);
  }


}
