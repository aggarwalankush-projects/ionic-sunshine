import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {UtilService} from "../providers";

@Component({
  selector: 'page-weather-detail',
  templateUrl: 'weather-detail.html'
})
export class WeatherDetailPage {

  weatherObj: any;
  metric: string;
  timeFormat: string;

  constructor(public params: NavParams,
              public utilService: UtilService) {
    this.weatherObj = params.data.weatherObj;
    this.metric = params.data.metric;
    this.timeFormat = params.data.timeFormat;
  }

}
