import {Component} from "@angular/core";
import {HttpService, UtilService} from "../providers";
import {NavController} from "ionic-angular";
import {WeatherDetailPage} from "../weather-detail";
// import * as moment from "moment";
// import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dailyWeatherList: Array<any> = [];
  currentWeather: any;
  metric: string;
  timeFormat: string;
  location: string;

  constructor(public navCtrl: NavController,
              public httpService: HttpService,
              public utilService: UtilService) {
  }


  ionViewWillEnter() {
    let self = this;

    Promise.all([
      this.utilService.getMetric(),
      this.utilService.getTimeFormat(),
      this.utilService.getLocation()
    ]).then(values=> {
      self.metric = values[0];
      self.timeFormat = values[1];
      self.location = values[2];
    }).then(()=> {
      // this.httpService.getDailyWeather(location).subscribe(
      //   data=> {
      //     console.log(data);
      //     let currentEpoch = moment().unix();
      //     this.dailyWeatherList = _.reject(data.list, (obj: any)=>obj.dt < currentEpoch);
      //   },
      //   err=> {
      //     console.log(err);
      //   }
      // );
      //
      // this.httpService.getCurrentWeather(location).subscribe(
      //   data=> {
      //     console.log(data);
      //     this.currentWeather = data;
      //   },
      //   err=> {
      //     console.log(err);
      //   }
      // );


      this.dailyWeatherList = [
        {
          "dt": 1478282400,
          "main": {
            "temp": 17.99,
            "temp_min": 17.99,
            "temp_max": 17.99,
            "pressure": 1000.35,
            "sea_level": 1025.91,
            "grnd_level": 1000.35,
            "humidity": 84,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.31,
            "deg": 304
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-04 18:00:00"
        },
        {
          "dt": 1478293200,
          "main": {
            "temp": 16.94,
            "temp_min": 16.94,
            "temp_max": 16.94,
            "pressure": 999.57,
            "sea_level": 1025.27,
            "grnd_level": 999.57,
            "humidity": 88,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.3,
            "deg": 325.002
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-04 21:00:00"
        },
        {
          "dt": 1478304000,
          "main": {
            "temp": 16.32,
            "temp_min": 16.32,
            "temp_max": 16.32,
            "pressure": 999.32,
            "sea_level": 1025.19,
            "grnd_level": 999.32,
            "humidity": 88,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.26,
            "deg": 304.502
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-05 00:00:00"
        },
        {
          "dt": 1478314800,
          "main": {
            "temp": 20.03,
            "temp_min": 20.03,
            "temp_max": 20.03,
            "pressure": 1000.96,
            "sea_level": 1026.5,
            "grnd_level": 1000.96,
            "humidity": 78,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.12,
            "deg": 283.005
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-05 03:00:00"
        },
        {
          "dt": 1478325600,
          "main": {
            "temp": 25.68,
            "temp_min": 25.68,
            "temp_max": 25.68,
            "pressure": 1000.78,
            "sea_level": 1026.04,
            "grnd_level": 1000.78,
            "humidity": 82,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.78,
            "deg": 305.501
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-05 06:00:00"
        },
        {
          "dt": 1478336400,
          "main": {
            "temp": 27.05,
            "temp_min": 27.05,
            "temp_max": 27.05,
            "pressure": 998.56,
            "sea_level": 1023.72,
            "grnd_level": 998.56,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.11,
            "deg": 315.001
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-05 09:00:00"
        },
        {
          "dt": 1478347200,
          "main": {
            "temp": 24.76,
            "temp_min": 24.76,
            "temp_max": 24.76,
            "pressure": 998.06,
            "sea_level": 1023.26,
            "grnd_level": 998.06,
            "humidity": 58,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.36,
            "deg": 310
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-05 12:00:00"
        },
        {
          "dt": 1478358000,
          "main": {
            "temp": 20.26,
            "temp_min": 20.26,
            "temp_max": 20.26,
            "pressure": 999.19,
            "sea_level": 1024.64,
            "grnd_level": 999.19,
            "humidity": 80,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.22,
            "deg": 303.006
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-05 15:00:00"
        },
        {
          "dt": 1478368800,
          "main": {
            "temp": 17.52,
            "temp_min": 17.52,
            "temp_max": 17.52,
            "pressure": 999.6,
            "sea_level": 1025.25,
            "grnd_level": 999.6,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.75,
            "deg": 311
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-05 18:00:00"
        },
        {
          "dt": 1478379600,
          "main": {
            "temp": 15.84,
            "temp_min": 15.84,
            "temp_max": 15.84,
            "pressure": 998.89,
            "sea_level": 1024.66,
            "grnd_level": 998.89,
            "humidity": 88,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.96,
            "deg": 315.508
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-05 21:00:00"
        },
        {
          "dt": 1478390400,
          "main": {
            "temp": 14.07,
            "temp_min": 14.07,
            "temp_max": 14.07,
            "pressure": 998.95,
            "sea_level": 1024.92,
            "grnd_level": 998.95,
            "humidity": 90,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.4,
            "deg": 298.504
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-06 00:00:00"
        },
        {
          "dt": 1478401200,
          "main": {
            "temp": 17.39,
            "temp_min": 17.39,
            "temp_max": 17.39,
            "pressure": 1000.58,
            "sea_level": 1026.31,
            "grnd_level": 1000.58,
            "humidity": 90,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.34,
            "deg": 282.003
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-06 03:00:00"
        },
        {
          "dt": 1478412000,
          "main": {
            "temp": 22.98,
            "temp_min": 22.98,
            "temp_max": 22.98,
            "pressure": 1001,
            "sea_level": 1026.29,
            "grnd_level": 1001,
            "humidity": 88,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.4,
            "deg": 303.503
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-06 06:00:00"
        },
        {
          "dt": 1478422800,
          "main": {
            "temp": 25.27,
            "temp_min": 25.27,
            "temp_max": 25.27,
            "pressure": 999.36,
            "sea_level": 1024.52,
            "grnd_level": 999.36,
            "humidity": 70,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.69,
            "deg": 308.509
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-06 09:00:00"
        },
        {
          "dt": 1478433600,
          "main": {
            "temp": 23.16,
            "temp_min": 23.16,
            "temp_max": 23.16,
            "pressure": 999.23,
            "sea_level": 1024.55,
            "grnd_level": 999.23,
            "humidity": 59,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.02,
            "deg": 311.012
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-06 12:00:00"
        },
        {
          "dt": 1478444400,
          "main": {
            "temp": 18.63,
            "temp_min": 18.63,
            "temp_max": 18.63,
            "pressure": 1000.53,
            "sea_level": 1026.02,
            "grnd_level": 1000.53,
            "humidity": 78,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.21,
            "deg": 309.501
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-06 15:00:00"
        },
        {
          "dt": 1478455200,
          "main": {
            "temp": 16.1,
            "temp_min": 16.1,
            "temp_max": 16.1,
            "pressure": 1000.27,
            "sea_level": 1026.12,
            "grnd_level": 1000.27,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.06,
            "deg": 305.5
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-06 18:00:00"
        },
        {
          "dt": 1478466000,
          "main": {
            "temp": 15.63,
            "temp_min": 15.63,
            "temp_max": 15.63,
            "pressure": 999.44,
            "sea_level": 1025.28,
            "grnd_level": 999.44,
            "humidity": 87,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.41,
            "deg": 310.501
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-06 21:00:00"
        },
        {
          "dt": 1478476800,
          "main": {
            "temp": 14.57,
            "temp_min": 14.57,
            "temp_max": 14.57,
            "pressure": 998.94,
            "sea_level": 1024.98,
            "grnd_level": 998.94,
            "humidity": 92,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.67,
            "deg": 313.005
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-07 00:00:00"
        },
        {
          "dt": 1478487600,
          "main": {
            "temp": 16.49,
            "temp_min": 16.49,
            "temp_max": 16.49,
            "pressure": 1000.21,
            "sea_level": 1026.06,
            "grnd_level": 1000.21,
            "humidity": 81,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.21,
            "deg": 298
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-07 03:00:00"
        },
        {
          "dt": 1478498400,
          "main": {
            "temp": 22.18,
            "temp_min": 22.18,
            "temp_max": 22.18,
            "pressure": 1000.55,
            "sea_level": 1025.89,
            "grnd_level": 1000.55,
            "humidity": 81,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.66,
            "deg": 303.502
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-07 06:00:00"
        },
        {
          "dt": 1478509200,
          "main": {
            "temp": 24.35,
            "temp_min": 24.35,
            "temp_max": 24.35,
            "pressure": 998.98,
            "sea_level": 1024.13,
            "grnd_level": 998.98,
            "humidity": 66,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 5.23,
            "deg": 304.506
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-07 09:00:00"
        },
        {
          "dt": 1478520000,
          "main": {
            "temp": 22.16,
            "temp_min": 22.16,
            "temp_max": 22.16,
            "pressure": 998.86,
            "sea_level": 1024.07,
            "grnd_level": 998.86,
            "humidity": 56,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.23,
            "deg": 301.007
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-07 12:00:00"
        },
        {
          "dt": 1478530800,
          "main": {
            "temp": 17.77,
            "temp_min": 17.77,
            "temp_max": 17.77,
            "pressure": 1000.05,
            "sea_level": 1025.75,
            "grnd_level": 1000.05,
            "humidity": 74,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.57,
            "deg": 297.503
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-07 15:00:00"
        },
        {
          "dt": 1478541600,
          "main": {
            "temp": 15.61,
            "temp_min": 15.61,
            "temp_max": 15.61,
            "pressure": 1000.2,
            "sea_level": 1026.11,
            "grnd_level": 1000.2,
            "humidity": 86,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.52,
            "deg": 299.505
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-07 18:00:00"
        },
        {
          "dt": 1478552400,
          "main": {
            "temp": 14.56,
            "temp_min": 14.56,
            "temp_max": 14.56,
            "pressure": 999.73,
            "sea_level": 1025.79,
            "grnd_level": 999.73,
            "humidity": 89,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.82,
            "deg": 295.5
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-07 21:00:00"
        },
        {
          "dt": 1478563200,
          "main": {
            "temp": 13.27,
            "temp_min": 13.27,
            "temp_max": 13.27,
            "pressure": 999.49,
            "sea_level": 1025.63,
            "grnd_level": 999.49,
            "humidity": 89,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.85,
            "deg": 307.002
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-08 00:00:00"
        },
        {
          "dt": 1478574000,
          "main": {
            "temp": 15.98,
            "temp_min": 15.98,
            "temp_max": 15.98,
            "pressure": 1001.17,
            "sea_level": 1027.06,
            "grnd_level": 1001.17,
            "humidity": 77,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.47,
            "deg": 291.5
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-08 03:00:00"
        },
        {
          "dt": 1478584800,
          "main": {
            "temp": 22.36,
            "temp_min": 22.36,
            "temp_max": 22.36,
            "pressure": 1001.68,
            "sea_level": 1027.01,
            "grnd_level": 1001.68,
            "humidity": 79,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.92,
            "deg": 298.504
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-08 06:00:00"
        },
        {
          "dt": 1478595600,
          "main": {
            "temp": 24.67,
            "temp_min": 24.67,
            "temp_max": 24.67,
            "pressure": 1000.52,
            "sea_level": 1025.71,
            "grnd_level": 1000.52,
            "humidity": 64,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.57,
            "deg": 301.001
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-08 09:00:00"
        },
        {
          "dt": 1478606400,
          "main": {
            "temp": 22.07,
            "temp_min": 22.07,
            "temp_max": 22.07,
            "pressure": 1000.43,
            "sea_level": 1025.74,
            "grnd_level": 1000.43,
            "humidity": 55,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.36,
            "deg": 296.505
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-08 12:00:00"
        },
        {
          "dt": 1478617200,
          "main": {
            "temp": 16.71,
            "temp_min": 16.71,
            "temp_max": 16.71,
            "pressure": 1001.94,
            "sea_level": 1027.62,
            "grnd_level": 1001.94,
            "humidity": 79,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.4,
            "deg": 299
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-08 15:00:00"
        },
        {
          "dt": 1478628000,
          "main": {
            "temp": 14.65,
            "temp_min": 14.65,
            "temp_max": 14.65,
            "pressure": 1002.19,
            "sea_level": 1028.18,
            "grnd_level": 1002.19,
            "humidity": 83,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.58,
            "deg": 307.501
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-08 18:00:00"
        },
        {
          "dt": 1478638800,
          "main": {
            "temp": 12.69,
            "temp_min": 12.69,
            "temp_max": 12.69,
            "pressure": 1001.42,
            "sea_level": 1027.56,
            "grnd_level": 1001.42,
            "humidity": 87,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.45,
            "deg": 312.502
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-08 21:00:00"
        },
        {
          "dt": 1478649600,
          "main": {
            "temp": 11.65,
            "temp_min": 11.65,
            "temp_max": 11.65,
            "pressure": 1001.18,
            "sea_level": 1027.33,
            "grnd_level": 1001.18,
            "humidity": 85,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.46,
            "deg": 291.001
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-09 00:00:00"
        },
        {
          "dt": 1478660400,
          "main": {
            "temp": 15.47,
            "temp_min": 15.47,
            "temp_max": 15.47,
            "pressure": 1003.07,
            "sea_level": 1029.01,
            "grnd_level": 1003.07,
            "humidity": 82,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.26,
            "deg": 281.501
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-09 03:00:00"
        },
        {
          "dt": 1478671200,
          "main": {
            "temp": 22.22,
            "temp_min": 22.22,
            "temp_max": 22.22,
            "pressure": 1003.85,
            "sea_level": 1029.27,
            "grnd_level": 1003.85,
            "humidity": 83,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.34,
            "deg": 305.511
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-09 06:00:00"
        },
        {
          "dt": 1478682000,
          "main": {
            "temp": 24.52,
            "temp_min": 24.52,
            "temp_max": 24.52,
            "pressure": 1002.37,
            "sea_level": 1027.57,
            "grnd_level": 1002.37,
            "humidity": 68,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.8,
            "deg": 312.006
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-09 09:00:00"
        },
        {
          "dt": 1478692800,
          "main": {
            "temp": 21.69,
            "temp_min": 21.69,
            "temp_max": 21.69,
            "pressure": 1002.01,
            "sea_level": 1027.32,
            "grnd_level": 1002.01,
            "humidity": 57,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.36,
            "deg": 299.5
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2016-11-09 12:00:00"
        },
        {
          "dt": 1478703600,
          "main": {
            "temp": 16.49,
            "temp_min": 16.49,
            "temp_max": 16.49,
            "pressure": 1002.98,
            "sea_level": 1028.75,
            "grnd_level": 1002.98,
            "humidity": 81,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.04,
            "deg": 302.502
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2016-11-09 15:00:00"
        }
      ];
      this.currentWeather = {
        "coord": {
          "lon": 76.32,
          "lat": 29.32
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 17.99,
          "pressure": 1000.35,
          "humidity": 84,
          "temp_min": 17.99,
          "temp_max": 17.99,
          "sea_level": 1025.91,
          "grnd_level": 1000.35
        },
        "wind": {
          "speed": 1.31,
          "deg": 304
        },
        "clouds": {
          "all": 0
        },
        "dt": 1478277401,
        "sys": {
          "message": 0.1692,
          "country": "IN",
          "sunrise": 1478221829,
          "sunset": 1478261143
        },
        "id": 1268907,
        "name": "Jind",
        "cod": 200
      };
    });
  }

  itemClicked(item: any) {
    this.navCtrl.push(WeatherDetailPage, {weatherObj: item, metric: this.metric, timeFormat: this.timeFormat})
  }
}
