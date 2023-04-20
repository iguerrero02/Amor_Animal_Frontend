import { Injectable } from '@angular/core';
import { HttpClient,HttpClientJsonpModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '.././models/tag';
import { Global } from '../services/global';


/* HttpClientJsonModule  */

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private _url:string;
  private _api:string;

  constructor(
    private _http:HttpClient
  ) {
    this._url=Global.urlCore;
    this._api=Global.api;
   }

   getById(id:number):Observable<any>
      {
        return this._http.get(this._url+this._api +'get-tag-by-id/'+id);
      }
      
    save(tag:Tag):Observable<any>
    {
       let headers=new HttpHeaders().set('Content-type','application/json');
       let params=JSON.stringify(tag);
       return this._http.post(this._url+this._api+'insert-tag',params,{headers:headers}); 
    }

    update(tag:Tag):Observable<any>
    {
      let headers=new HttpHeaders().set('Content-type','application/json');
      let params= JSON.stringify(tag);
      return this._http.post(this._url+this._api+'update-tag',params,{headers:headers});
    }

    delete(tag:Tag):Observable<any>
    {
        let headers= new HttpHeaders().set('Content-type','application/json');
        let params= JSON.stringify(tag);
        return this._http.post(this._url+this._api+'delete-tag',params,{headers:headers});
    }

    getAll():Observable<any>
    {
        return this._http.get(this._url+this._api+'get-all-tag');

    }
}
