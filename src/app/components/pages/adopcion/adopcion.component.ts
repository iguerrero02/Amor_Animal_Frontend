import { AdopcionService } from './../../../services/adopcion.service';
import { Adopcion } from './../../../models/adopcion';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from '../../../services/mascota.service';


@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})
export class AdopcionComponent implements OnInit {

  adopcion: Adopcion = new Adopcion();
  adopciones: Adopcion[];

  mascotas: Mascota[] = [];
  constructor(private adopcionService: AdopcionService,
    private mascotaService:MascotaService ) { }

  ngOnInit(): void {
    this.adopcionService.getAdopciones().subscribe(data => {
      this.adopciones = data;
    });
    this.mascotaService.getMascotas().subscribe((data: Mascota[]) => {
      this.mascotas = data;
      console.log(data)
    });


  }


  saveAdopcion(): void {
    this.adopcionService.saveAdopcion(this.adopcion).subscribe(data => {
      this.adopciones.push(data);
      this.adopcion = new Adopcion();
      Swal.fire({
        icon: "success",
        title: "Su proceso de adopción fue exitoso, espere indicaciones!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }


  deleteAdopcion(id: number): void {
    this.adopcionService.deleteAdopcion(id).subscribe(() => {
      this.adopciones = this.adopciones.filter(adopcion => adopcion.id_adopcion !== id);
    });
  }

  updateAdopcion(): void {
    this.adopcionService.updateAdopcion(this.adopcion.id_adopcion, this.adopcion).subscribe(data => {
      let index = this.adopciones.findIndex(adopcion => adopcion.id_adopcion === data.id_adopcion);
      this.adopciones[index] = data;
      this.adopcion = new Adopcion();
    });
  }


  editAdopcion(adopcion: Adopcion): void {
    this.adopcion = adopcion;
  }

  cancelEdit(): void {
    this.adopcion = new Adopcion();
  }

}

