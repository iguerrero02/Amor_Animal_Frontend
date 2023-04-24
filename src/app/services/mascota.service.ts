import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiUrl = 'https://amor-animal-backend-production.up.railway.app/api/mascotas';

  constructor(private http: HttpClient) { }

  // Obtener todas las mascotas
  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);

  }

  // Obtener una mascota por su ID
  getMascota(id: number): Observable<Mascota> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Mascota>(url);
  }

  // Crear una nueva mascota
  createMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.apiUrl, mascota);
  }

  // Actualizar una mascota existente
  updateMascota(id: number, mascota: Mascota): Observable<Mascota> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Mascota>(url, mascota);
  }

  // Eliminar una mascota
  deleteMascota(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
