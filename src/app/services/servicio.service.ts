import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseUrl = 'http://localhost:8081/api/servicios';

  constructor(private http: HttpClient) { }

  getServiciosList(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.baseUrl}`);
  }

  createServicio(servicio: Servicio): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, servicio);
  }

  getServicioById(id: number): Observable<Servicio> {
    return this.http.get<Servicio>(`${this.baseUrl}/${id}`);
  }

  updateServicio(id: number, servicio: Servicio): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, servicio);
  }

  deleteServicio(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
