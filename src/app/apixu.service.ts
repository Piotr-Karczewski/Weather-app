import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'https://api.apixu.com/v1/current.json?key=4947b0624b364b5ebca183411191704&q=' + location
      );
  }
}