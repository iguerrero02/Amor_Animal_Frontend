import { Component, OnInit } from '@angular/core';
import { Print } from 'src/app/models/print';
import { Tag } from 'src/app/models/tag';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styles: [
  ]
})
export class PrintersComponent implements OnInit {

  public _title:string="Impresoras";
  public _btnTitle:string="Añadir nueva impresora";
  public url:string= 'pages/print-create';

  public _printers:Array<Print>;

  constructor(
    private _printService:PrintService
  ) {
    this._printers=new Array<Print>();
   }

  ngOnInit(): void {

   this._printService.getAll().subscribe(
     resp=>{

      this._printers=resp;
     },
     error=>{
      console.log(error);
     }
   );


  }
  editar(id:number){

  }

}
