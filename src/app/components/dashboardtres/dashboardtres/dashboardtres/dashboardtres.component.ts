import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as dashboardData from '../../../../shared/data/dashboard/dashboard'


@Component({
  selector: 'app-dashboardtres',
  templateUrl: './dashboardtres.component.html',
  styleUrls: ['./dashboardtres.component.scss']
})
export class DashboardtresComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }


}



