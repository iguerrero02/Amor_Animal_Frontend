import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Print } from '../models/print';
import { Global } from './global';


@Injectable({
  providedIn: 'root'
})
export class PrintService {

  private _url:string;
  private _api:string;

  constructor(
    private _http:HttpClient
  ) {
     this._url=Global.urlCore;
     this._api=Global.apiPrint;
   }

   getById(id:number):Observable<any>
   {
     return this._http.get(this._url+this._api +'get-by-id/'+id);
   }
   
 save(print:Print):Observable<any>
 {
    let headers=new HttpHeaders().set('Content-type','application/json');
    let params=JSON.stringify(print);
    return this._http.post(this._url+this._api+'insert',params,{headers:headers}); 
 }

 update(print:Print):Observable<any>
 {
   let headers=new HttpHeaders().set('Content-type','application/json');
   let params= JSON.stringify(print);
   return this._http.post(this._url+this._api+'update',params,{headers:headers});
 }

 delete(print:Print):Observable<any>
 {
     let headers= new HttpHeaders().set('Content-type','application/json');
     let params= JSON.stringify(print);
     return this._http.post(this._url+this._api+'delete',params,{headers:headers});
 }

 getAll():Observable<any>
 {
     return this._http.get(this._url+this._api+'get-all');
 }


}
