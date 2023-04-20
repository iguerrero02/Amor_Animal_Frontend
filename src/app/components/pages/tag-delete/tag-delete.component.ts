import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-delete',
  templateUrl: './tag-delete.component.html',  
  styleUrls: []
})
export class TagDeleteComponent implements OnInit {

  public _tag:Tag;
  private _id:number;

  constructor(
    private _tagService:TagService,
    private _route:ActivatedRoute,
    private _router:Router
   
  ) {

     this._route.params.subscribe(
       (params:Params)=>{
         this._id= +params.id;
       }
     );

     this._tag=new Tag(0,'','');

   }

  ngOnInit(): void {
    
    this.getTagById();
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

    remove(){

       this._tagService.delete(this._tag).subscribe(
         resp=>{
           console.log('Se llamo al metodo delete');
          this._router.navigateByUrl('/pages/edit-profile');
    
         },
         error=>{
           console.log(error);
         }
       );

     }

 }
