import { Component, OnInit } from '@angular/core';
import { VeterinariaService } from 'src/app/services/veterinaria.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public productoService: VeterinariaService) { }

  ngOnInit(): void {
  }
  contraActual:any;
  emailM:any;


  consultarContra(){
    this.productoService.verificarContraseña(this.emailM,this.contraActual).subscribe(
      response=>{
  
      }
    )
  }


}
