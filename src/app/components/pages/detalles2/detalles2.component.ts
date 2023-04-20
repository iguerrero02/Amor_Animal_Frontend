import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-detalles2',
  templateUrl: './detalles2.component.html',
  styleUrls: ['./detalles2.component.scss']
})
export class Detalles2Component implements OnInit {

  currentRoute: any;
  urlData: any;
  constructor(private router:Router) {

    router.events.pipe(filter((event:any)=> event instanceof NavigationEnd)).subscribe( (event:any) => {
      this.currentRoute = event.url;
      this.urlData = event.url.split("/")
    })
  }
  ngOnInit(): void {
  }


}
