import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {

  private readonly baseUrl = 'https://www.zipcodeapi.com/rest/';
  private readonly apiKey = 'your_api_key_here';

  constructor(private http: HttpClient) { }

  getCityAndState(zipcode: string) {
    const url = `${this.baseUrl}${this.apiKey}/info.json/${zipcode}/radians`;

    return this.http.get(url);
  }
}
