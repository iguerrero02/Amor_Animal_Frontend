
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardtwoComponent } from './dashboardtwo/dashboardtwo.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardtwoComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardtwoRoutingModule { }
