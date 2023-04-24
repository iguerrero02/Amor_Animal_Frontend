import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/models/cita';
import { Servicio } from 'src/app/models/servicio';
import { CitaService } from 'src/app/services/cita.service';
import { ServicioService } from 'src/app/services/servicio.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  citasForm: FormGroup;
  citas: Cita[];
  servicios: Servicio[] = [];

  constructor(private fb: FormBuilder, private citasService: CitaService, private servicioService: ServicioService) { }

  ngOnInit(): void {

    this.getCitas();
    this.getServicios();
    this.createForm();

  }

  createForm() {
    this.citasForm = this.fb.group({
      id_cita:[''],
      nom_cliente: ['', Validators.required],
      raza_mascota: ['', Validators.required],
      nom_mascota: ['', Validators.required],
      id_servicio: ['', Validators.required]
    });
  }

  getCitas() {
    this.citasService.getCitas().subscribe(data => {
      this.citas = data;
      console.log(data);

    });
  }

  getServicios() {
    this.servicioService.getServiciosList().subscribe(data => {
      this.servicios = data;

    });
  }

  saveCita() {
    if (this.citasForm.valid) {
      const cita = this.citasForm.value;
      this.citasService.addCita(cita).subscribe(data => {
        this.getCitas();
        this.citasForm.reset();
        Swal.fire({
          icon: 'success',
          title: 'Cita agregada con éxito',
          showConfirmButton: false,
          timer: 1500
        });
      }, error => {
        console.log('Error al guardar la cita: ', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar la cita',
          text: 'Ha ocurrido un error al guardar la cita, por favor intente nuevamente',
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


  deleteCita(id: number) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la cita?',
      text: 'No podrá recuperar la información de la cita después de eliminarla',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.citasService.deleteCita(id).subscribe(() => {
          this.getCitas();
          Swal.fire({
            icon: 'success',
            title: 'Cita eliminada con éxito',
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  }

  editCita(cita: Cita) {
    this.citasForm.setValue({
      id_cita: cita.id_cita,
      nom_cliente: cita.nom_cliente,
      raza_mascota: cita.raza_mascota,
      nom_mascota: cita.nom_mascota,
      id_servicio: cita.id_servicio,
    });
  }

  cancelEdit() {
    this.citasForm.reset();
  }

  updateCita() {
    this.citasService.updateCita(this.citasForm.value.id_cita, this.citasForm.value)
      .subscribe(() => {
        this.getCitas();

      }, () => {

      });
  }



}
