import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare var $:any;


@Component({
  selector: 'app-hori-switcher',
  templateUrl: './hori-switcher.component.html',
  styleUrls: ['./hori-switcher.component.scss']
})
export class HoriSwitcherComponent implements OnInit {


  ngOnInit(): void {
    // DEMO Swticher Base
    $('.demo_changer .demo-icon').click(function () {
      if ($('.demo_changer').hasClass("active")) {
        $('.demo_changer').animate({ "right": "-270px" }, function () {
          $('.demo_changer').toggleClass("active");
        });
      } else {
        $('.demo_changer').animate({ "right": "0px" }, function () {
          $('.demo_changer').toggleClass("active");
        });
      }
    });
  }

  ngAfterViewInit() {
    new PerfectScrollbar('.sidebar-right1', {
      useBothWheelAxes: true,
      suppressScrollX: true,
      wheelPropagation: false
    });
  }
}
