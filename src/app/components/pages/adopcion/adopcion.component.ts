import { AdopcionService } from './../../../services/adopcion.service';
import { Adopcion } from './../../../models/adopcion';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from '../../../services/mascota.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ZipCodeService } from './ZipCodeService.service';


@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.scss']
})
export class AdopcionComponent implements OnInit {
  zipcode: string;
  city: string;
  state: string;

  adopcionForm: FormGroup;

  adopcion: Adopcion = new Adopcion();
  adopciones: Adopcion[];

  mascotas: Mascota[];
  constructor(private adopcionService: AdopcionService,
    private mascotaService:MascotaService, private fb: FormBuilder, private zipCodeService: ZipCodeService ) { }

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
  search() {
    this.zipCodeService.getCityAndState(this.zipcode).subscribe(
      (data: any) => {
        this.city = data.city;
        this.state = data.state;
      },
      (error: any) => {
        console.error(error);
      }
    );
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

  saveAdopcion() {
    let mascota;
    this.mascotaService.getMascota(this.adopcionForm.value.id_mascota).subscribe(data => {
      console.log(data)
      mascota = data;
    })
    setTimeout(()=>{

    const guardarAdopcion= new Adopcion();
    guardarAdopcion.mascota =mascota;
    guardarAdopcion.nombre= this.adopcionForm.value.nombre;
    guardarAdopcion.apellido= this.adopcionForm.value.apellido;
    guardarAdopcion.edad= this.adopcionForm.value.edad;
    guardarAdopcion.direccion= this.adopcionForm.value.direccion;
    guardarAdopcion.ciudad= this.adopcionForm.value.ciudad;
    guardarAdopcion.codigo_postal= this.adopcionForm.value.codigo_postal;
    console.log("guardar Adopcion")
    console.log(guardarAdopcion);
    if (this.adopcionForm.valid) {
      const adopcion = this.adopcionForm.value;
      this.adopcionService.saveAdopcion(guardarAdopcion).subscribe(data => {
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
  },1500)
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

