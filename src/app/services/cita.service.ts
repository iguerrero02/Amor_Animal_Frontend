import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'https://amor-animal-backend-production.up.railway.app/api/citas';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCitaById(id: number): Observable<Cita> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cita>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  addCita(cita: Cita): Observable<Cita> {
    console.log(cita);
    return this.http.post<Cita>(this.apiUrl, cita)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCita(id: number, cita: Cita): Observable<Cita> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Cita>(url, cita)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCita(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
