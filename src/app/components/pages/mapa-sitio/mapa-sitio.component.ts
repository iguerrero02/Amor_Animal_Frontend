import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-sitio',
  templateUrl: './mapa-sitio.component.html',
  styleUrls: ['./mapa-sitio.component.css',],
})

export class MapaSitioComponent implements OnInit {

  count = 1;
  mousein: boolean = false;

  ngOnInit(): void {
    setTimeout(() => this.demo(), 500);
    setTimeout(() => this.demo(), 700);
    setTimeout(() => this.demo(), 900);
    setTimeout(() => this.reset(), 2000);
    setTimeout(() => this.demo(), 2500);
    setTimeout(() => this.demo(), 2750);
    setTimeout(() => this.demo(), 3050);
  }

  demo() {
    if (this.mousein) return;
    const demoElement = document.getElementById('demo' + this.count++);
    if (demoElement !== null) {
      demoElement.classList.toggle('hover');
    }
  }

  reset() {
    this.count = 1;
    const hovers = document.querySelectorAll('.hover') as NodeListOf<HTMLElement>;
    for (let i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover');
    }
  }

  onMouseOver() {
    this.mousein = true;
    this.reset();
  }

}

