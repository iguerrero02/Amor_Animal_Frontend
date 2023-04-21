import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/usuarios';
import { VeterinariaService } from 'src/app/services/veterinaria.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  active: any;
  constructor(private authservice: AuthService, private router: Router, private formBuilder: FormBuilder,
    private usuarioService: VeterinariaService,private autAdmin: AuthService) { }

  grecaptcha: any;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['admin@demo.com', [Validators.required, Validators.email]],
      password: ['admindemo', Validators.required]
    });

  }




  errorMessage = ''; // validation _error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase _error handle
  codigoVef;

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  //angular
  public loginForm: FormGroup;
  public error: any = '';
  captchaResponse: any;
  comodin: boolean = false;
  comodinBtn: boolean = true;
  comodinBtn2: boolean = false;
  com = "ss"
  public showMessage: boolean = false;



  get form() {
    return this.loginForm.controls;
  }

  verificarCodigo() {

    this.usuarioService.confirmarLCodigo(this.tokenConf).subscribe(
      response => {


        this.passwordU = response.response.password;
        this.perfilU = response.response.tipo;

        console.log(response.response.tipo);

        if (this.perfilU == "general") {
          this.router.navigate(['/dashboard']);
        } else {
          console.log("Soy admin paps")

          this.router.navigate(['/dashboardtwo']);
        }



      }, error => {
        console.log('Password is incorrect');
        //   console.log('Password is incorrect');
        this.errorMessage = "ContraCodigo  incorrecto";
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
        return false;
      }
    )




  }

  validateForm2(email: string, passwordDesc: string, emailU: string, passwordU: string) {
    if (!email && this.comodin == true) {
      this.errorMessage = "Porfavor ingrese un correo";
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
      return false;
    }

    if (email !== emailU && email) {
      this.errorMessage = "Correo incorrecto";
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
      return false;
    }

    // if (passwordDesc !== passwordU) {
    //   this.errorMessage = "Contraseña incorrecta";
    //   this.showMessage = true;
    //   setTimeout(() => {
    //     this.showMessage = false;
    //   }, 3000);
    //   return false;
    // }

    if (email && passwordDesc) {
      if (passwordDesc !== passwordU && passwordDesc.length < 4 && passwordDesc !== "") {
        this.errorMessage = "La contraseña debe de ser mayor a 6 digitos";
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
        return false;
      }



      //   if (password.length === 0 && password === "") {
      //     this.errorMessage = "Porfavor ingrese una contraseña";
      //     this.showMessage = true;
      //     setTimeout(() => {
      //       this.showMessage = false;
      //     }, 3000);
      //     return false;
      //   }

      //   if (password !== passwordU && password.length > 0) {
      //     this.errorMessage = "Contraseña incorrecta";
      //     this.showMessage = true;
      //     setTimeout(() => {
      //       this.showMessage = false;
      //     }, 3000);
      //     return false;
      //   }

    }

    this.errorMessage = '';
    return true;

  }

  password;
  email;
  tokenConf;
  passwordU;
  emailU;
  perfilU;
  cliente: any;
  emailU2: any[];
  passwordU2: any[];
  emailClien: any;
  passworClient: any;
  token: any;
  @ViewChild('inputEmail', { static: true }) inputEmail: ElementRef;
  @ViewChild('inputPass', { static: true }) inputPass: ElementRef;

  autenticacionCliente() {
    this.usuarioService.autenticacionUsuario(this.email, this.password).subscribe(
      response => {
        console.log("Hola bebe");
      }
    )
  }

  contraDecript: any;

  consultarClientes() {
    this.usuarioService.buscarUsuarios().subscribe(
      response => {
        this.cliente = response.response;
        let encontrado = false; // bandera para indicar si se encontró el correo electrónico

        this.emailU2 = [];

        // this.contraDecript = this.usuarioService.desencriptar(this.email, this.passwordU).subscribe(
        //   response => {
        //     console.log('Password is correct');
        //     // TODO: Redirect to dashboard or other page
        //   },
        //   error => {
        //     console.log('Password is incorrect');
        //     return;
        //   }
        // );

        for (let i = 0; i < this.cliente.length; i++) {

          const element = this.cliente[i];
          this.emailU = this.emailU2[i] = element.correoElectronico;
          if (this.emailU2[i] === this.email) {
            this.passwordU = this.cliente[i].password;
            this.perfilU = this.cliente[i].tipo;
            encontrado = true;
            break;
          }
        }

        if (this.validateForm2(this.email, this.password, this.emailU, this.passwordU)) {

          console.log(this.emailU, this.passwordU);

          this.usuarioService.login(this.email, this.password).subscribe(
            response => {
              sessionStorage.setItem('tipo', response.response.tipo);
              const clientId = sessionStorage.getItem('tipo');
              console.log(clientId);

              this.usuarioService.autenticacionUsuario(this.email, this.password).subscribe(
                response => {
                  console.log("Hola bebe autorizacion");

                  this.usuarioService.confirmarLogin(this.email, this.password).subscribe(
                    response => {
                      window.alert("Se a enviado el codigo de verificación a tu correo,  porfavor ingresalo para poder continuar");
                      const submitBtn2 = document.querySelector('#inputEmail') as HTMLElement;
                      if (submitBtn2 !== null) {
                        submitBtn2.style.display = "none";
                      }
                      const submitBtn3 = document.querySelector('#inputPass') as HTMLElement;
                      if (submitBtn3 !== null) {
                        submitBtn3.style.display = "none";
                      }

                      const forgot = document.querySelector('#forgot') as HTMLElement;
                      if (forgot !== null) {
                        forgot.style.display = "none";
                      }

                      const recaptchaContainer = document.querySelector('#recaptchaContainer') as HTMLElement;
                      if (recaptchaContainer !== null) {
                        recaptchaContainer.style.display = "none";
                      }

                      const notMem = document.querySelector('#notMem') as HTMLElement;
                      if (notMem !== null) {
                        notMem.style.display = "none";
                      }

                      const btnConf = document.querySelector('#btnConf') as HTMLElement;
                      if (notMem !== null) {
                        btnConf.style.display = "none";
                      }

                      const submitBtn33 = document.querySelector('#inputConfirm') as HTMLElement;
                      if (submitBtn33 !== null) {
                        submitBtn33.style.display = "block";
                      }

                      const submitBtn4 = document.querySelector('#submitbtn') as HTMLElement;
                      if (submitBtn4 !== null) {
                        submitBtn4.style.display = "none";
                      }
                      const submitBtn5 = document.querySelector('#submitbtn2') as HTMLElement;
                      if (submitBtn5 !== null) {
                        submitBtn5.style.display = "none";
                      }

                      const submitBtn6 = document.querySelector('#btnCon') as HTMLElement;
                      if (submitBtn6 !== null) {
                        submitBtn6.style.display = "block";
                      }

                    }
                  )

                  //   if (this.perfilU === "general") {
                  //   this.router.navigate(['/dashboard']);
                  // } else {
                  //   console.log("Soy admin paps")
                  //   this.router.navigate(['/dashboardtwo']);
                  // }
                }
              )


            },
            error => {
              console.log('Password is incorrect');
              //   console.log('Password is incorrect');
              this.errorMessage = "Contraseña incorrecta";
              this.showMessage = true;
              setTimeout(() => {
                this.showMessage = false;
              }, 3000);
              return false;
            }
          );

        }




        // this.usuarioService.desencriptar(this.emailU, this.passwordU).subscribe(
        //   response => {
        //     console.log('Password is correct');
        //     // TODO: Redirect to dashboard or other page
        //   },
        //   error => {
        //     console.log('Password is incorrect');
        //     this.errorMessage = "Contraseña incorrecta";
        //     //   this.showMessage = true;
        //     //   setTimeout(() => {
        //     //     this.showMessage = false;
        //     //   }, 3000);
        //     //   return false;
        //   }
        // );

        //this.usuarioService.desencriptar(this.email, this.passwordU);

        // if (this.validateForm2(this.email, this.password, this.emailU, this.passwordU)) {

        //   if (this.email === this.emailU) {


        //     // if (this.contraDecript) {

        //       this.autenticacionCliente(this.emailU,this.passwordU);

        //       // if (this.perfilU === "general") {
        //       //   this.router.navigate(['/dashboard']);
        //       // } else {
        //       //   console.log("Soy admin paps")
        //       //   this.router.navigate(['/dashboardtwo']);
        //       // }
        //     //}
        //   }

        // }

        if (!encontrado) {
          console.log("No se encontró el correo electrónico");
        }

      });
  }

  consultarUsuarios() {

    // this.emailU2 = response;
    // this.passwordU2 = response;

    // for (let index = 0; index < response.length; index++) {
    //   const element = response[index];
    //   this.emailU2[index] = element.correoElectronico;

    //   if (this.emailU2[index] == this.email) {
    //     this.passwordU = element.password;
    //     this.perfilU = element.tipo;
    //     break;
    //   }

    // }

    console.log(this.emailU2);

    for (let index = 0; index < this.emailU2.length; index++) {

      if (this.emailU2[index] == this.email) {
        this.emailU = this.email
        if (this.emailU && this.passwordU) {
          if (this.validateForm2(this.email, this.password, this.emailU, this.passwordU)) {
            if (this.email === this.emailU && this.password === this.passwordU) {

              if (this.perfilU == "general") {
                this.router.navigate(['/dashboard']);
                break;
              } else {
                console.log("Soy admin paps")
                this.router.navigate(['/dashboardtwo']);
              }
            }
          }
        }
      } else {
        if (this.emailU && this.passwordU) {
          if (this.validateForm2(this.email, this.password, this.emailU, this.passwordU)) {
            if (this.email === this.emailU && this.password === this.passwordU) {
              if (this.perfilU == "general") {
                this.router.navigate(['/dashboard']);
                break;
              } else {

              }
            }
          }
        }

      }
    }
    console.log(this.emailU, this.passwordU, this.perfilU);
  }///////////////////





  // Submit() {
  //   if (this.validateForm2(this.email, this.password)) {
  //     if (this.email === this.emailU && this.password === this.passwordU) {
  //       this.router.navigate(['/dashboard']);
  //     }
  //   }
  // }

}
