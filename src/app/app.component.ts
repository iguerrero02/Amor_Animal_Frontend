import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  public isSpinner = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSpinner = false;
    },1000)
  }	materialDualListSource:any[] = []
	destination = []

	constructor() { this.materialDualListSource = [{name:"one"},{name:"two"},{name:"tree"},{name:"four"}] }

}
