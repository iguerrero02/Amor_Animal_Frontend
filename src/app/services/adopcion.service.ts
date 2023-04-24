import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adopcion } from '../models/adopcion';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {
  private apiUrl = 'https://amor-animal-backend-production.up.railway.app/api/adopciones';

  constructor(private http: HttpClient) { }

  public getAdopciones(): Observable<Adopcion[]> {
    return this.http.get<Adopcion[]>(this.apiUrl);
  }

  public getAdopcionById(id: number): Observable<Adopcion> {
    return this.http.get<Adopcion>(`${this.apiUrl}/${id}`);
  }

  public saveAdopcion(adopcion: Adopcion): Observable<Adopcion> {
    return this.http.post<Adopcion>(this.apiUrl, adopcion);
  }

  public updateAdopcion(id: number, adopcion: Adopcion): Observable<Adopcion> {
    return this.http.put<Adopcion>(`${this.apiUrl}/${id}`, adopcion);
  }

  public deleteAdopcion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

