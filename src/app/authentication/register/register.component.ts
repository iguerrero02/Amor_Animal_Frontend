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
  cod:any;
  codigoIngresado:any


  constructor(private authservice: AuthService, private router:Router,
    private clienteService: VeterinariaService) { }

  ngOnInit(): void {
    this.checkPasswords();
  }

  register()
  {
    if (!this.validarContrasena(this.password)) {
      window.alert('La contraseña debe tener al menos una mayúscula, un número, un carácter especial y no tener más de 15 caracteres.');
      return;
    } 
    
    if (!this.email || !this.password || !this.nombreCliente || !this.apellidoP || !this.apellidoM || !this.telefono) {
      window.alert('Todos los campos son obligatorios');
      return;
    }

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
        console.log("Cliente registrado");

        if (confirm('Porfavor confirma que eres un humano')) {
          window.alert("Se a registrado el usuario correctamenete, puedes iniciar sesión");
          this.router.navigate(['/auth/login']);
        }
        window.alert("Lo siento el codigo debe de ser igual");
        this.router.navigate(['/auth/register']);
      },error => {
        this.cod = "stetysd4";
         this.codigoIngresado = prompt('Porfavor confirma que eres un humano ingresa este codigo :' + this.cod);
        if (this.codigoIngresado === this.cod) {
          window.alert("Se a registrado el usuario correctamenete, puedes iniciar sesión");
          this.router.navigate(['/auth/login']);
        }else{
          window.alert("Lo siento el codigo debe de ser igual");
          this.router.navigate(['/auth/register']);
        }
        
      }
    )


  }

  
  
  
// Función que valida si la contraseña cumple con los requisitos
validarContrasena(password: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return regex.test(password);
}


// Función que se ejecuta al cambiar el valor de la contraseña o la confirmación de contraseña
checkPasswords() {
  if (this.password !== this.passwordConfirm) {
    this.passwordsMatch = true;
  } else {
    this.passwordsMatch = false;
  }

  if (this.password.trim() === '') {
    this.errorMessage = '';
  } else if (this.password.length < 8) {
    this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
  } else if (this.password.length > 15) {
    this.errorMessage = 'La contraseña no debe tener más de 15 caracteres.';
  } else if (!this.validarContrasena(this.password)) {
    this.errorMessage = 'La contraseña debe tener al menos una mayúscula, un número, un carácter especial.';
  } else {
    this.errorMessage = '';
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
