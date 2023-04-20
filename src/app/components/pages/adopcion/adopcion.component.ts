import { AdopcionService } from './../../../services/adopcion.service';
import { Adopcion } from './../../../models/adopcion';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from '../../../services/mascota.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})
export class AdopcionComponent implements OnInit {


  adopcionForm: FormGroup;

  adopcion: Adopcion = new Adopcion();
  adopciones: Adopcion[];

  mascotas: Mascota[];
  constructor(private adopcionService: AdopcionService,
    private mascotaService:MascotaService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.adopcionService.getAdopciones().subscribe(data => {
      this.adopciones = data;
    });
    this.mascotaService.getMascotas().subscribe((data: Mascota[]) => {
      this.mascotas = data;
      console.log(data)
    });

    this.getAdopciones();
    this.createForm();
  }
  createForm() {
    this.adopcionForm = this.fb.group({
      id_adopcion:[''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigo_postal: ['', Validators.required],
      id_mascota: ['', Validators.required]
    });
  }

  getAdopciones() {
    this.adopcionService.getAdopciones().subscribe(data => {
      this.adopciones = data;

    });
  }
  // saveAdopcion(): void {
  //   this.adopcionService.saveAdopcion(this.adopcion).subscribe(data => {
  //     this.adopciones.push(data);
  //     this.adopcion = new Adopcion();
  //     Swal.fire({
  //       icon: "success",
  //       title: "Su proceso de adopción fue exitoso, espere indicaciones!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   });
  // }

  saveAdopcion() {
    if (this.adopcionForm.valid) {
      const adopcion = this.adopcionForm.value;
      this.adopcionService.saveAdopcion(adopcion).subscribe(data => {
        this.getAdopciones();
        this.adopcionForm.reset();
        Swal.fire({
          icon: 'success',
          title: 'Adopcion registrada con éxito',
          showConfirmButton: false,
          timer: 1500
        });
      }, error => {
        console.log('Error al registrar Adopcion: ', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar Adopcion',
          text: 'Ha ocurrido un error registrar Adopcion, por favor intente nuevamente',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Por favor llene todos los campos',
        showConfirmButton: false,
        timer: 1500
      });
    }
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

