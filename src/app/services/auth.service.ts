import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAdmin() {
    const clientId = sessionStorage.getItem('tipo');

    if (clientId == "general") {
        return false;
    }else if(clientId == "admin"){
        return true;
    }else{
      return false;
    }
  }

  isSessionExpired(): boolean {
    const expirationDateString = localStorage.getItem('authTokenExpiration');
    const expirationDate = expirationDateString ? new Date(expirationDateString) : null;
    if (expirationDate === null) {
        return true; // O cualquier otra acción que quieras realizar si no hay fecha de expiración
    }
    return new Date() >= expirationDate;
}


}
