import { Component, OnInit } from '@angular/core';
import { ParsedMessage } from '@angular/localize/src/utils';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Print } from 'src/app/models/print';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-print-remuve',
  templateUrl: './print-remuve.component.html',
  styleUrls: []
})
export class PrintRemuveComponent implements OnInit {

  public _print:Print

  constructor(
    private _printService:PrintService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this._print=new Print(0,'','','',0);
   }

  ngOnInit(): void {

    this._route.params.subscribe(
      (params:Params)=>{
        this._print.id=params.id;
      }
    );
    this.getPrint();
  }

  getPrint()
  {
    this._printService.getById(this._print.id).subscribe(
      resp=>{

        this._print=resp;
      },
      error=>{
        console.log(<any>error);

      }
    );
  }

  remove(){
   
    this._printService.delete(this._print).subscribe(
      resp=>{
        this._router.navigateByUrl('/pages/printers');

      },
      error=>{
        console.log(<any>error)
      }
    );
  }

}
