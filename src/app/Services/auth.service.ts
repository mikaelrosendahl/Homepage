import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definiera LoginResponse här eller importera från en separat fil om du föredrar det
interface LoginResponse {
  Token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7101/api'; // Din API endpoint URL

  constructor(private http: HttpClient) { }

  // Uppdatera så att login returnerar Observable<LoginResponse>
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Login`, { email, password });
  }
}

