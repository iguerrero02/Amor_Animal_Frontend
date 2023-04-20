import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Print } from 'src/app/models/print';
import { SendPrint } from 'src/app/models/sendprint';
import { Tag } from 'src/app/models/tag';
import { PrintService } from 'src/app/services/print.service';
import { SendprintService } from 'src/app/services/sendprint.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-sent-print',
  templateUrl: './send-print.component.html',
  styles: [
  ]
})
export class SendPrintComponent implements OnInit{

  public _print:Print
  public _tag:Tag
  public _printers=Array<Print>();
  public _sendPrint:SendPrint
  
  constructor(
    private _PrintService:PrintService,
    private _route:ActivatedRoute,
    private _tagService:TagService,
    private _sendPrintService:SendprintService
  ) {
    this._tag=new Tag(0,'','');
    this._print=new Print(0,'','','',0);
    this._printers=new Array<Print>();
    this._sendPrint=new SendPrint('',0,'','');
 
   }

  ngOnInit(): void {
   
    document.getElementById('sentPrint')?.addEventListener('click',()=>{this.send()},false);

    this._PrintService.getAll().subscribe(
      resp=>{
        this._printers=resp;
        console.log('se obtuvieron los registro de print')
        console.log(resp);
      },
      error=>{
        console.log(<any>error);
      }
    );
    this._route.params.subscribe((param:Params)=>{   
        this._tag.id=param.id
    } );

    this._tagService.getById(this._tag.id).subscribe(
      resp=>{
        this._tag=resp;
        this._sendPrint.title=this._tag.title;
        this._sendPrint.body=this._tag.body;
      },
      error=>{
        console.log(error);
      }
    );

   
  }

  capturar()
  {   
    console.log(this._print.id);
    
    if(this._print.id>0)
    {
      this._PrintService.getById(this._print.id).subscribe(
        resp=>{
          this._print=resp;
          this._sendPrint.ip=this._print.ip;
          this._sendPrint.port=this._print.port;        
          console.log('se obtuvieron los registro de print')
          console.log(resp);
        },
        error=>{
          console.log(<any>error);
        }
      );
    } 
  }
 
  send()
  {
    console.log('Se llamo al metodo send');
    if(this._sendPrint.port>0)
    {
      this._sendPrintService.send(this._sendPrint).subscribe(
        resp=>{
          console.log(resp);
        },
        error=>{
          console.log(error);
        }
      );
    }
  }


}
