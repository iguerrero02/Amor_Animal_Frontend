import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { ServiceResponse } from '../models/serviceResponse';
import { ListComponent } from '../components/elements/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {

  private backendURL: string = "http://localhost:8081/producto/";

  constructor(
    private httpClient: HttpClient
  ) { }


  //Metodo para buscar productos
  buscarProductos():Observable<Producto[]>{
    const complemento = "consultarTodos"
    return this.httpClient.get<Producto[]>(this.backendURL + complemento);

  }

}
