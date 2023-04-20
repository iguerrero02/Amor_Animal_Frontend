import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { VeterinariaService } from 'src/app/services/veterinaria.service';
import { NgModule } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { ShoppingCartComponent } from 'src/app/components/e-commerce/shopping-cart/shopping-cart.component';
import { Injectable } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ShopComponent implements OnInit {
  basicPage= 1;
  pageSize= 6;
  productos;

  constructor(
    private productoService: VeterinariaService,
    private carrito: CarritoService
  ) { }


  ngOnInit(): void {


    this.consultarProductos();
    
  }

  addToCart(pro: any){
    this.carrito.addItem(pro)
  }

  consultarProductos(){

    this.productoService.buscarProductos().subscribe(
     response =>{
        console.log(response)
        this.productos = response;
        // response.forEach(valor => {
        //   this.productos.descripcion = valor.descripcion;
        //   this.productos.precio = valor.precio;
        //   this.productos.imagen = valor.imagen
        // })
      }
    )

  }

}
