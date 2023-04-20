import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';


interface cart {
  id: number;
  image: string;
  title: string;
  price: string;
  Stock: string;
  stockStatus: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems;
  total;
  total2;
  com = 1;
  parentDivNum;

  objectArray: cart[];
  constructor(private carrito: CarritoService) {  }

  ngOnInit(): void {
    this.cartItems = this.carrito.getItems();
    this.obtenerTotal();
  }

  obtenerTotal(){
    this.cartItems = this.carrito.getItems();
    this.cartItems.forEach((element: any) => {
    this.total = element.precio;
    this.total + this.total;
    })
  }

  obtenerTotal2(){
    const plus:any = document.querySelectorAll('#plus');
    const minus:any = document.querySelectorAll('#minus');
    this.cartItems = this.carrito.getItems();
    this.cartItems.forEach((element: any) => {
    this.total = element.precio;
    this.total + this.total;
    this.total2 + this.total;
    plus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
          this.com++
        })
    } )

    minus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
           if(parentDiv.children[1].value  != 0){
            this.com--;
           }
        })
    } )

    })
  }


 ngAfterViewInit(){
  this.obtenerTotal2();
  this. obtenerTotal();
  const plus:any = document.querySelectorAll('#plus');
  const minus:any = document.querySelectorAll('#minus');
  function perfectChart(){
    plus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
          parentDiv.children[1].value++
        })
    } )
    minus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
           if(parentDiv.children[1].value  != 0){
            parentDiv.children[1].value-- 
           }
        })
    } )
  }
  perfectChart()
  } 

  
  RemoveElementFromObjectArray(key: any) {
    this.cartItems.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  } 
}

