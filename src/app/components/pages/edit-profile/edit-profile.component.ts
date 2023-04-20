import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers : [TagService],
 
})
export class EditProfileComponent implements OnInit {


  public _tags:Array<Tag>;
  public _title:string="Etiquetas";
  public _btnTitle:string="Añadir nueva etiqueta";
  public url:string= 'pages/tag-create';

  constructor(
    private _tagService:TagService,
    private _router:Router
  ) {

    this._tags=new Array<Tag>() 
   }

  ngOnInit(): void {
    // document.getElementById('btnAdd')
    // ?.addEventListener('click',this.crear,false);
    this.getTagAlls();
  }

  getTagAlls()
  {
     this._tagService.getAll().subscribe(
      result=>{
        console.log('Se entro en el metodo getAll()');
        this._tags=result;
        console.log(result);
      },
      error=>{
          console.log(error);
      }
    );
  }

  editar(id:number){
    console.log('El id seleccionado es:'+id);
  }

  crear()
  {
    console.log('Se llamo al metodo create');
    this._router.navigateByUrl('pages/tag-create');
  }

}
