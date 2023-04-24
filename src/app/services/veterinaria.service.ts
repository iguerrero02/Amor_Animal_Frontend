import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { ListComponent } from '../components/elements/list/list.component';
import { Cliente } from '../models/usuarios';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { ServiceResponse } from '../models/serviceResponse';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {




  private backendURL: string = "https://amor-animal-backend-production.up.railway.app/clientes/";

  private backendURLProd: string = "https://amor-animal-backend-production.up.railway.app/Productos/";

  private backendSec: string = "https://amor-animal-backend-production.up.railway.app/seguridad/userLogin";

  private urlBack: string = "https://amor-animal-backend-production.up.railway.app/"

  private urlLocal: string = "localhost:7929/"


  constructor(
    private httpClient: HttpClient, private router: Router
  ) { }


  token: any;

  verificarContraseña(email:any,codigo:any){
    const cliente = {
      correoElectronico: email
    };
    const complemento = "registro/clienteCorreo/" + codigo;
    return this.httpClient.post<Cliente>(this.urlLocal + complemento, cliente);
  }

  registrarCliente(cliente:any){
    const complemento = "registro/cliente";
    return this.httpClient.post<Cliente>(this.urlBack + complemento, cliente);
  }

  confirmarLogin(email: string, password: string) {
    const cliente = {
      correoElectronico: email,
      password: password
    };
    const complemento = "registro/confirmarLogin";
    return this.httpClient.post<Cliente>(this.urlBack + complemento, cliente);
  }

  confirmarLCodigo(email: string): Observable<ServiceResponse<Cliente>> {
    const cliente = {
      codigoVerificacion: email,
    };
    const complemento = "registro/codigoVef";
    return this.httpClient.post<ServiceResponse<Cliente>>(this.urlBack + complemento, cliente);
  }

  //Metodo para buscar productos
  buscarProductos(): Observable<ServiceResponse<Producto[]>> {
    console.log("Consultando productos");
    const complemento = "todos";
    return this.httpClient.get<ServiceResponse<Producto[]>>(this.backendURLProd + complemento);
  }

  buscarProductosFiltro(cliente:any): Observable<ServiceResponse<Producto[]>> {
    console.log("Consultando productos");
    const complemento = "productosBuscar";
    return this.httpClient.post<ServiceResponse<Producto[]>>(this.backendURLProd + complemento,cliente);
  }



  buscarUsuarios(): Observable<ServiceResponse<Cliente[]>> {
    const complemento = "todos";
    return this.httpClient.get<ServiceResponse<Cliente[]>>(this.backendURL + complemento);
  }

  login(email: string, password: string):Observable<ServiceResponse<Cliente>> {
    const complemento = "loginCliente";
    const cliente = {
      correoElectronico: email,
      password: password
    };
    return this.httpClient.post<ServiceResponse<Cliente>>(this.backendURL + complemento, cliente);
  }

  desencriptar(email: string, password: string) {
    const cliente = {
      correoElectronico: email,
      password: password
    };
    const complemento = "desencriptar";
    return this.httpClient.post<any>(this.backendURL + complemento, cliente);
  }

  autenticacionUsuario(email: string, password: string): Observable<Cliente[]> {
    const complemento = "loginCliente";
    const cliente = {
      email: email,
      password: password
    };
    return this.httpClient.post<Cliente[]>(this.urlBack + complemento, cliente, { observe: 'response' })
      .pipe(
        tap(response => {
          const expiresIn = 9000; // tiempo en segundos
          const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
          this.token = response.headers.get('Authorization');
          console.log('Token:', this.token);
          localStorage.setItem('authTokenExpiration', expirationDate.toISOString());
          localStorage.setItem('access_token', this.token);
        }),
        map(response => response.body || [])
      );
  }

  public isLoggedIn(): boolean {
    // Obtener el token de autenticación desde el almacenamiento local
    const authToken = localStorage.getItem('access_token');
    const authTokenExpiration = localStorage.getItem('authTokenExpiration');
    // Verificar si el token existe y no está expirado
    if (authToken && authTokenExpiration) {
      const tokenExpirationDate = new Date(authTokenExpiration);
      const isLoggedIn = tokenExpirationDate > new Date();
      if (!isLoggedIn) {
        // Redirigir al usuario al login
        this.router.navigate(['auth/login']);
      }
      return isLoggedIn;
    }
    return false;
  }



  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('authTokenExpiration');
  }

}
