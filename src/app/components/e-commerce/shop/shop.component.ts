import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { VeterinariaService } from 'src/app/services/veterinaria.service';
import { NgModule } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { ShoppingCartComponent } from 'src/app/components/e-commerce/shopping-cart/shopping-cart.component';
import { Injectable } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { NavService } from 'src/app/shared/services/nav.service';



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
  buscar:any = "";
  public isCollapsed = true;

  constructor(
    private productoService: VeterinariaService,
    private carrito: CarritoService,
    private layoutService: LayoutService,
    public navServices: NavService,
  ) { }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  
  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.app')?.classList.add('sidenav-toggled');
    }
    else {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
    }
  }

  toggleMobileSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.sidebar-right')?.classList.add('sidebar-open');
    }
    else {
      document.querySelector('.sidebar-right')?.classList.remove('sidebar-open');
    }
  }

  darkmodeToggle(){
    let body:any = document.querySelector('body');

    if(body != !body){
      body.classList.toggle('dark-mode')
    }
  }


  ngOnInit(): void {
    this.consultarProductos();    
  }

  addToCart(pro: any){
    this.carrito.addItem(pro)
  }

  consultarProductos(){

    const producto ={
      nombreProducto: this.buscar
    }

    this.productoService.buscarProductosFiltro(producto).subscribe(
     response =>{
      console.log(response.response);
        this.productos = response.response;
        // response.forEach(valor => {
        //   this.productos.descripcion = valor.descripcion;
        //   this.productos.precio = valor.precio;
        //   this.productos.imagen = valor.imagen
        // })
      }
    )

  }

}
