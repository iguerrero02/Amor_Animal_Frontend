import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import {ActivatedRoute, Router } from '@angular/router'; 
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';



@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styles: [
  ]
})
export class TagEditComponent implements OnInit {


  public _id:number;
  public _tag:Tag;
  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _tagService:TagService  
   
  ) {
       this._route.params.subscribe(
         (params=>{
           let id =params.id;
           this._id=id;
         })
       );

       this._tag=new Tag(0,'','');
   }

  ngOnInit(): void {
    console.log('El id que se obtuvo en el componente es: '+this._id);
    this. getTagById();
  }

  getTagById()
  {
     this._tagService.getById(this._id).subscribe(
       resp=>{
         if(resp)
         {
          this._tag=resp;
          console.log("Respuesta:" + this._tag);
         }      
       },
       error=>{
         console.log(error);
       }
     );
  }

  update(){
    if(this._tag.id!= 0)
     {
       console.log( 'el valor de la etiqueta en actualizar es:' +this._tag.id);
      this._tagService.update(this._tag).subscribe(
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
