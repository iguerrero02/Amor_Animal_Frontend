
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardtresComponent } from './dashboardtres/dashboardtres/dashboardtres.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardtresComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardtresRoutingModule { }
