import { Component,Input, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-printer',
  templateUrl: './add-printer.component.html',
  styles: [
  ]
})
export class AddPrinterComponent implements DoCheck,OnInit  {

  @Input() _title:string;
  @Input() _btnTitle:string;
  @Input() _url:any;
  public _dise:string='Editar impresoras';
  public url:string;
 

  constructor(
    private _router:Router
  ) {
    console.log('se ejecuto el constructor de impresora');
   
   }

  ngOnInit(): void {
   
    if(!this.url)
    {
      console.log('Se inicializo la url');
      this.url=this._url; 
    }
    document.getElementById("btnAdd")?.addEventListener("click", ()=>{this.crear()},false ); 
  
  }

  crear()
  {
    console.log('Se llamo al metodo create');
    console.log(this.url);
    this._router.navigateByUrl(this.url);
  }
 
   ngDoCheck(){
     console.log('Se ejecuto le metodo ngDocheck');
    console.log(this.url);
    
   }
 

}
