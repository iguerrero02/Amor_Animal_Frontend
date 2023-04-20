import { Component, OnInit, AfterViewInit , Inject, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
  ) {}
  
  ngOnInit(): void {
  }
  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.app')?.classList.add('sidenav-toggled');
    }
    else {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
    }
  }

  toggleMobileSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.sidebar-right')?.classList.add('sidebar-open');
    }
    else {
      document.querySelector('.sidebar-right')?.classList.remove('sidebar-open');
    }
  }

  darkmodeToggle(){
    let body:any = document.querySelector('body');

    if(body != !body){
      body.classList.toggle('dark-mode')
    }
  }
}
