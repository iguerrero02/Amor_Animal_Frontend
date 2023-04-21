import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-error401',
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.scss']
})
export class Error401Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['/dashboard']);
  }

}
