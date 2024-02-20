import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  //dADOS DA PREVISÃO DO TEMPO RECEBIDOS PELO COMPONENTE PAI
  @Input() weatherDatasInput!: WeatherDatas;


  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon =  faWind;


}
