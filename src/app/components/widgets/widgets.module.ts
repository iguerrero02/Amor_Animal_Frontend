import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { GalleryModule } from '@ks89/angular-modal-gallery';  
import 'hammerjs';
import 'mousetrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgbModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    GalleryModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    SharedModule
  ]
})
export class WidgetsModule { }
