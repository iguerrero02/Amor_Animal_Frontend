import { ZipCodeService } from './ZipCodeService.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-zip-code-form',
  templateUrl: './zip-code-form.component.html'
})
export class ZipCodeFormComponent {
  zipcode: string;
  city: string;
  state: string;

  constructor(private zipCodeService: ZipCodeService) {}

  search() {
    this.zipCodeService.getCityAndState(this.zipcode).subscribe(
      (data: any) => {
        this.city = data.city;
        this.state = data.state;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
