import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private items: any[] = [];

  constructor() { // Cargar los datos del carrito del almacenamiento local
    const savedCart = localStorage.getItem('items');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }}

  addItem(item: any) {
    this.items.push(item);
  }

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items;
  }
  
}
