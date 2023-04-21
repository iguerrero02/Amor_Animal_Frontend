import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router } from '@angular/router';
import { VeterinariaService } from '../services/veterinaria.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: VeterinariaService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }
  }
