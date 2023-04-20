import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Print } from 'src/app/models/print';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-print-create',
  templateUrl: './print-create.component.html',
  styles: [
  ]
})
export class PrintCreateComponent implements OnInit {

  public _print:Print
  constructor(
    private _printService:PrintService,
    private _route:Router
  ) {
    this._print=new Print(0,'','','',8082);
   }

  ngOnInit(): void {
  }

  save(){
   
    if(this._print.mark.trim() && this._print.ip.trim() && this._print.model.trim() && this._print.port!=0)
    {
      this._printService.save(this._print).subscribe(
        resp=>{     
          this._route.navigateByUrl('/pages/printers');
        },
        error=>{
          console.log(error);
        }
      );
    }
    else
    {
      alert('Todos los campos son requeridos');
    }
  }
}
