import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-breadcrumb',
  templateUrl: './header-breadcrumb.component.html',
  styleUrls: ['./header-breadcrumb.component.scss']
})
export class HeaderBreadcrumbComponent implements OnInit {

  @Input() title!: string;
  @Input() items!: any[];
  @Input() active_item!: string;

  constructor() { }

  ngOnInit(): void {
  }


}
