import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  public isCollapsed = true;

  Body:any = document.querySelector('body')

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
  }
  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }
    
  sidebarToggle(){
    const sidebar:boolean = this.Body.classList.value.includes('active');
    
    if (sidebar == true) {
      this.Body.classList.remove('active');
    }
    else {
      this.Body.classList.add('active');
    }
  }

  darkmodeToggle(){

    if(this.Body != !this.Body){
      this.Body.classList.toggle('dark-mode')
      this.Body.classList.toggle('light-hormenu');
    }
  }
}
