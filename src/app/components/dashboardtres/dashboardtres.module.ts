import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardtresComponent } from './dashboardtres/dashboardtres/dashboardtres.component';



@NgModule({
  declarations: [

    DashboardtresComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    ChartsModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class DashboardtresModule { }
