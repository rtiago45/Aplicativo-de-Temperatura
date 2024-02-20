import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'ba0e048f2f031f8c2ca5fa65283720c6';



  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: String): Observable<any>{

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
    {}
    )

  }
}
