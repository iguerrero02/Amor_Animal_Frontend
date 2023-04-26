import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  TabStyle1:any;
  constructor(private carritoService: CarritoService) {
    this.items = this.carritoService.getItems();
  }



  ngOnInit(): void {
  }
  // getTotal() {
  //   let total = 0;
  //   for (let item of this.items) {
  //     total += item.price;
  //   }
  //   return total;
  // }
  getTotal() {
    let total = 0;
    for (let item of this.items) {
      // Asegurarse de que el precio sea un número
      if (typeof item.precioVenta === 'number') {
        total += item.precioVenta;
      } else {
        console.error('El precio no es un número:', item.precioVenta);
      }
    }
    return total;
  }



  successAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Felicidades!',
      text: 'Tu pedido está hecho.',
      confirmButtonColor: '#6259ca'
    })
  }

}
