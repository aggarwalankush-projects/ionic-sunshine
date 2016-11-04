import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {UtilService} from "../providers";

@Component({
  selector: 'page-weather-detail',
  templateUrl: 'weather-detail.html'
})
export class WeatherDetailPage {

  weatherObj: any;

  constructor(public params: NavParams,
              public utilService: UtilService) {
    this.weatherObj = params.data.weatherObj;
  }

}
