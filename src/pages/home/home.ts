import {Component} from "@angular/core";
import {HttpService, UtilService} from "../providers";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dailyWeatherList: Array<any> = [];

  constructor(public httpService: HttpService, public utilService: UtilService) {
  }

  ionViewWillEnter() {
    this.httpService.getDailyWeather('126102').subscribe(
      data=> {
        console.log(data);
        this.dailyWeatherList = data.list;
      },
      err=> {
        console.log(err);
      }
    );
  }
}
