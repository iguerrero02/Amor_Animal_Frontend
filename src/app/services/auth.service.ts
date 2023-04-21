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
    }else{
        return true;
    }
  }

}
