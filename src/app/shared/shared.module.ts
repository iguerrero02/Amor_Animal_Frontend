import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { NotificationSidemenuComponent } from './components/notification-sidemenu/notification-sidemenu.component';
import { HeaderBreadcrumbComponent } from './components/header-breadcrumb/header-breadcrumb.component';
import { HoriHeaderComponent } from './hori-components/hori-header/hori-header.component';
import { HoriSidemenuComponent } from './hori-components/hori-sidemenu/hori-sidemenu.component';
import { HoriSwitcherComponent } from './hori-components/hori-switcher/hori-switcher.component';
import { RouterModule } from '@angular/router';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';
import { HoriFullLayoutComponent } from './components/hori-full-layout/hori-full-layout.component';
import { FullContentComponent } from './components/layouts/full-content/full-content.component';
import { ErrorStyleComponent } from './components/layouts/error-style/error-style.component';
import { ContentStyleComponent } from './components/layouts/content-style/content-style.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    LoaderComponent,
    SwitcherComponent,
    NotificationSidemenuComponent,
    HeaderBreadcrumbComponent,
    HoriHeaderComponent,
    HoriSidemenuComponent,
    HoriSwitcherComponent,
    TabToTopComponent,
    HoriFullLayoutComponent,
    FullContentComponent,
    ErrorStyleComponent, 
    ContentStyleComponent,
    HeaderBreadcrumbComponent,
    TabToTopComponent,
    FullscreenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports:[
    HoriFullLayoutComponent,
    FullContentComponent,
    ErrorStyleComponent, 
    ContentStyleComponent,
    HeaderBreadcrumbComponent,
    TabToTopComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
