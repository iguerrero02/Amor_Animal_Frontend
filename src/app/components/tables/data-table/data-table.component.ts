import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  dataTable:Array<Tag>;//= SimpleDataTable;
  public columnOne:string="ID";
  public columnTwo:string="Titulo";
  public columnThree:string ="Descripción";
  constructor(
    private _tagService:TagService
  ) {
    this._tagService.getAll().subscribe(
      resp=>{
        this.dataTable=resp;

      },
      error=>{

      }
    );
   }

  ngOnInit(): void {
  }

}
