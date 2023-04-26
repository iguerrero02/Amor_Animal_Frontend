import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

interface cart {
  id: number;
  image: string;
  Titulo: string;
  precioVenta: string;
  Stock: string;
  stockStatus: string;
  Cantidad: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems;
  total: number = 0;
  total2;
  com = 1;
  parentDivNum;

  objectArray: cart[];

  constructor(private carrito: CarritoService) {  }

  ngOnInit(): void {
    this.cartItems = this.carrito.getItems();
    this.obtenerTotal();

  }

obtenerTotal() {
    this.cartItems = this.carrito.getItems();
    let total = 0;
    this.cartItems.forEach((element: any) => {
      let cantidad = parseFloat(element.Cantidad);
      console.log("element.Cantidad: ", element.Cantidad);
      if (!isNaN(cantidad)) {
        total += element.precioVenta * cantidad;
      }
    });
    this.total = total;
}


  onQuantityChange(index: number, quantity: number) {
    this.cartItems[index].Cantidad = quantity;
    this.obtenerTotal();
  }

  ngAfterViewInit(){
    const plus:any = document.querySelectorAll('#plus');
    const minus:any = document.querySelectorAll('#minus');
    plus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
          let input = parentDiv.children[1];
          input.value++;
          let id = parentDiv.getAttribute('data-id');
          this.cartItems.forEach((item: any) => {
            if (item.id == id) {
              item.Cantidad = parseInt(input.value);
            }
          });
          this.obtenerTotal();
        })
    } )
    minus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
           let input = parentDiv.children[1];
           if(input.value != 0){
            input.value--;
            let id = parentDiv.getAttribute('data-id');
            this.cartItems.forEach((item: any) => {
              if (item.id == id) {
                item.Cantidad = parseInt(input.value);
              }
            });
            this.obtenerTotal();
           }
        })
    } )
  }

  RemoveElementFromObjectArray(key: any) {
    this.cartItems.forEach((value,index)=>{
        if(value.id==key) this.cartItems.splice(index,1);

    });
    this.obtenerTotal();
  }
}
