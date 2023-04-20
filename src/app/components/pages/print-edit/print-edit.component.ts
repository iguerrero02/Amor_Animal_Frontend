import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Print } from 'src/app/models/print';
import { PrintService } from 'src/app/services/print.service';
import { PrintersComponent } from '../printers/printers.component';

@Component({
  selector: 'app-print-edit',
  templateUrl: './print-edit.component.html',
  styleUrls: []
})
export class PrintEditComponent implements OnInit {

  public _print:Print

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _printService:PrintService
  ) {

    this._print=new Print(0,'','','',8282);
   }

  ngOnInit(): void {

    this._route.params.subscribe(
      (params:Params)=>{
        this._print.id=params.id;
      }
    );

    this. getPrint();

  }

  getPrint()
  {
     this._printService.getById(this._print.id).subscribe(
       resp=>{
         if(resp)
         {
          this._print=resp;
         }
         else
         {
           console.log(resp);
         }
        
       },
       error=>{
         console.log(error);
       }
     );
  }

  update(){
    this._printService.update(this._print).subscribe(
      resp=>{

         this._print=resp;
         this._router.navigateByUrl('/pages/printers');
      },
      error=>{
        console.log(error);
      }
    );

  }

}
