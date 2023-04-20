import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletComponent } from './leaflet/leaflet.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LeafletComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }