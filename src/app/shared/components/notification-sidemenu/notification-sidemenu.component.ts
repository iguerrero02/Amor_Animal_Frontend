import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-notification-sidemenu',
  templateUrl: './notification-sidemenu.component.html',
  styleUrls: ['./notification-sidemenu.component.scss']
})
export class NotificationSidemenuComponent implements OnInit {
  layoutSub: Subscription;
  isOpen: boolean = false;

  @ViewChild('sidebar', {static: false}) sidebar!: ElementRef;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private layoutService: LayoutService
  ) {
    this.layoutSub = layoutService.SidebarNotifyChangeEmitted.subscribe(
      value => {
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = true;
        }
      }
    );
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    this.isOpen = false;
  }
}
