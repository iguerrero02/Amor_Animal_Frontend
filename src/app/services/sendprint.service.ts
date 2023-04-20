import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { SendPrint } from '../models/sendprint';

@Injectable({
  providedIn: 'root'
})
export class SendprintService {

  private _url:string;
  private _api:string;

  constructor(
    private _http:HttpClient
  ) {
    this._url=Global.urlCore
    this._api=Global.apiSendPrint
   }


   send(print:SendPrint ):Observable<any>
  {
    let headers= new HttpHeaders().set('Content-type','application/json');
     let params=JSON.stringify(print);  
    return this._http.post(this._url+this._api+'sendprint',params,{headers:headers});
  }
}

