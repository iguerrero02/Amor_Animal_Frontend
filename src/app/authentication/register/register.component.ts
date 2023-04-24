import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VeterinariaService } from 'src/app/services/veterinaria.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email="";
  password="";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  nombreCliente:any;
  apellidoP:any;
  apellidoM:any;
  telefono:any;
  passwordConfirm:any = "";
  passwordsMatch: boolean = false;
  token = "a";



  constructor(private authservice: AuthService, private router:Router,
    private clienteService: VeterinariaService) { }

  ngOnInit(): void {
    this.checkPasswords();
  }

  register()
  {
    const cliente = {
      correoElectronico: this.email,
      password: this.password,
      nombre:this.nombreCliente,
      apellidoPaterno: this.apellidoP,
      apellidoMaterno: this.apellidoM,
      telefono: this.telefono,
      token: this.token
    }

    this.clienteService.registrarCliente(cliente).subscribe(
      response=>{
        console.log("Cliente registrado")
        this.email = "";
        this.password = "";
        this.nombreCliente = ""
        this.apellidoP = ""
        this.apellidoM = ""
        this.telefono = "";
        this.passwordConfirm = "";
        window.alert("Se a registrado el usuario correctamenete, puedes iniciar sesión");
        this.router.navigate(['/auth/login']);
      },error => {
        console.log('Password is incorrect');
        window.alert("El correo ya existe");
        this.router.navigate(['/dashboardtwo']);
      }
    )


  }


  checkPasswords() {
    if (this.password !== this.passwordConfirm) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

 

  validateForm(email:string, password:string)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 4)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

  soloNumeros(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  validarLetras(event) {
    const pattern = /[a-zA-Z]/;
    const inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  

}
