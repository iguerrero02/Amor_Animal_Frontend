import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styles: [
  ]
})
export class TagCreateComponent implements OnInit {

  public _tag:Tag;

  constructor(
   private _tagServide:TagService,
   private _router:Router

  ) {
    this._tag=new Tag(0,'','');
   }

  ngOnInit(): void {
  }


  create(){
    console.log('Se llamo al metodo crear');

    if(this._tag.title.trim() && this._tag.body.trim())
    {
      this._tagServide.save(this._tag).subscribe(
        resp=>{
          this._router.navigateByUrl('/pages/edit-profile');

        },
        error=>{
          console.log(error);
        }
      );
    }
    else {
      alert('Debe llenar los campos');
    }

  }

}
