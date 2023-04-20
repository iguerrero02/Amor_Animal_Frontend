import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare var $:any;

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    // DEMO Swticher Base
    $('.demo_changer .demo-icon').click(function () {
      if ($('.demo_changer').hasClass("active")) {
        $('.demo_changer').animate({ "right": "-290px" }, function () {
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
      suppressScrollX: true
    });
  }
}
