import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardtwoComponent } from './dashboardtwo/dashboardtwo.component';
import { DashboardtwoRoutingModule } from './dashboardtwo-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [

    DashboardtwoComponent
  ],
  imports: [
    CommonModule,
    DashboardtwoRoutingModule,
    NgApexchartsModule,
    ChartsModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ]
})
export class DashboardtwoModule { }
