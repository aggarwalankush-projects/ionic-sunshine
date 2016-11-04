import {Component} from "@angular/core";
import {HttpService, UtilService} from "../providers";
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dailyWeatherList: Array<any> = [];
  currentWeather: any;

  constructor(public httpService: HttpService, public utilService: UtilService) {
  }

  ionViewWillEnter() {
    let zip = '95134';
    // this.httpService.getDailyWeather(zip).subscribe(
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
    // this.httpService.getCurrentWeather(zip).subscribe(
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
        "dt": 1478196000,
        "main": {
          "temp": 58.28,
          "temp_min": 58.28,
          "temp_max": 63.9,
          "pressure": 1004.03,
          "sea_level": 1029.85,
          "grnd_level": 1004.03,
          "humidity": 88,
          "temp_kf": -3.13
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
          "speed": 2.98,
          "deg": 292.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-03 18:00:00"
      },
      {
        "dt": 1478206800,
        "main": {
          "temp": 58.17,
          "temp_min": 58.17,
          "temp_max": 61.92,
          "pressure": 1003.16,
          "sea_level": 1028.94,
          "grnd_level": 1003.16,
          "humidity": 86,
          "temp_kf": -2.08
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
          "speed": 2.82,
          "deg": 303.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-03 21:00:00"
      },
      {
        "dt": 1478217600,
        "main": {
          "temp": 58.42,
          "temp_min": 58.42,
          "temp_max": 60.3,
          "pressure": 1002.21,
          "sea_level": 1028.18,
          "grnd_level": 1002.21,
          "humidity": 86,
          "temp_kf": -1.04
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 2.84,
          "deg": 303.502
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-04 00:00:00"
      },
      {
        "dt": 1478228400,
        "main": {
          "temp": 67.02,
          "temp_min": 67.02,
          "temp_max": 67.02,
          "pressure": 1003.03,
          "sea_level": 1028.61,
          "grnd_level": 1003.03,
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
          "speed": 2.86,
          "deg": 256.505
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-04 03:00:00"
      },
      {
        "dt": 1478239200,
        "main": {
          "temp": 77.65,
          "temp_min": 77.65,
          "temp_max": 77.65,
          "pressure": 1002.64,
          "sea_level": 1027.9,
          "grnd_level": 1002.64,
          "humidity": 87,
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
          "speed": 4.61,
          "deg": 296.001
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-04 06:00:00"
      },
      {
        "dt": 1478250000,
        "main": {
          "temp": 80.86,
          "temp_min": 80.86,
          "temp_max": 80.86,
          "pressure": 1000.23,
          "sea_level": 1025.28,
          "grnd_level": 1000.23,
          "humidity": 73,
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
          "speed": 4.59,
          "deg": 308.502
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-04 09:00:00"
      },
      {
        "dt": 1478260800,
        "main": {
          "temp": 76.82,
          "temp_min": 76.82,
          "temp_max": 76.82,
          "pressure": 999.41,
          "sea_level": 1024.69,
          "grnd_level": 999.41,
          "humidity": 61,
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
          "speed": 4.27,
          "deg": 311.501
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-04 12:00:00"
      },
      {
        "dt": 1478271600,
        "main": {
          "temp": 68.36,
          "temp_min": 68.36,
          "temp_max": 68.36,
          "pressure": 1000.41,
          "sea_level": 1025.81,
          "grnd_level": 1000.41,
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
          "speed": 5.68,
          "deg": 312.5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-04 15:00:00"
      },
      {
        "dt": 1478282400,
        "main": {
          "temp": 63.83,
          "temp_min": 63.83,
          "temp_max": 63.83,
          "pressure": 1000.27,
          "sea_level": 1025.85,
          "grnd_level": 1000.27,
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
          "speed": 2.84,
          "deg": 313.002
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-04 18:00:00"
      },
      {
        "dt": 1478293200,
        "main": {
          "temp": 61.99,
          "temp_min": 61.99,
          "temp_max": 61.99,
          "pressure": 999.6,
          "sea_level": 1025.3,
          "grnd_level": 999.6,
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
          "speed": 2.93,
          "deg": 314.508
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-04 21:00:00"
      },
      {
        "dt": 1478304000,
        "main": {
          "temp": 60.62,
          "temp_min": 60.62,
          "temp_max": 60.62,
          "pressure": 999.15,
          "sea_level": 1024.99,
          "grnd_level": 999.15,
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
          "speed": 3.15,
          "deg": 322.001
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-05 00:00:00"
      },
      {
        "dt": 1478314800,
        "main": {
          "temp": 67.25,
          "temp_min": 67.25,
          "temp_max": 67.25,
          "pressure": 1000.52,
          "sea_level": 1026.13,
          "grnd_level": 1000.52,
          "humidity": 80,
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
          "speed": 2.95,
          "deg": 283.501
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-05 03:00:00"
      },
      {
        "dt": 1478325600,
        "main": {
          "temp": 76.5,
          "temp_min": 76.5,
          "temp_max": 76.5,
          "pressure": 1000.62,
          "sea_level": 1025.92,
          "grnd_level": 1000.62,
          "humidity": 84,
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
          "speed": 5.28,
          "deg": 319.507
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-05 06:00:00"
      },
      {
        "dt": 1478336400,
        "main": {
          "temp": 79.04,
          "temp_min": 79.04,
          "temp_max": 79.04,
          "pressure": 998.63,
          "sea_level": 1023.62,
          "grnd_level": 998.63,
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
          "speed": 9.13,
          "deg": 319.001
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-05 09:00:00"
      },
      {
        "dt": 1478347200,
        "main": {
          "temp": 75.15,
          "temp_min": 75.15,
          "temp_max": 75.15,
          "pressure": 998.19,
          "sea_level": 1023.32,
          "grnd_level": 998.19,
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
          "speed": 7.61,
          "deg": 314.5
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-05 12:00:00"
      },
      {
        "dt": 1478358000,
        "main": {
          "temp": 67.8,
          "temp_min": 67.8,
          "temp_max": 67.8,
          "pressure": 999.24,
          "sea_level": 1024.66,
          "grnd_level": 999.24,
          "humidity": 77,
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
          "speed": 7.43,
          "deg": 307.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-05 15:00:00"
      },
      {
        "dt": 1478368800,
        "main": {
          "temp": 63.32,
          "temp_min": 63.32,
          "temp_max": 63.32,
          "pressure": 999.52,
          "sea_level": 1025.23,
          "grnd_level": 999.52,
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
          "speed": 4.7,
          "deg": 310.505
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-05 18:00:00"
      },
      {
        "dt": 1478379600,
        "main": {
          "temp": 60.84,
          "temp_min": 60.84,
          "temp_max": 60.84,
          "pressure": 999.01,
          "sea_level": 1024.89,
          "grnd_level": 999.01,
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
          "speed": 6.22,
          "deg": 305.502
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-05 21:00:00"
      },
      {
        "dt": 1478390400,
        "main": {
          "temp": 57.94,
          "temp_min": 57.94,
          "temp_max": 57.94,
          "pressure": 998.84,
          "sea_level": 1024.83,
          "grnd_level": 998.84,
          "humidity": 93,
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
          "speed": 4.12,
          "deg": 293.013
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-06 00:00:00"
      },
      {
        "dt": 1478401200,
        "main": {
          "temp": 63.21,
          "temp_min": 63.21,
          "temp_max": 63.21,
          "pressure": 1000.28,
          "sea_level": 1025.91,
          "grnd_level": 1000.28,
          "humidity": 85,
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
          "deg": 292.504
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-06 03:00:00"
      },
      {
        "dt": 1478412000,
        "main": {
          "temp": 72.94,
          "temp_min": 72.94,
          "temp_max": 72.94,
          "pressure": 1000.47,
          "sea_level": 1025.68,
          "grnd_level": 1000.47,
          "humidity": 87,
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
          "speed": 5.5,
          "deg": 308.5
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-06 06:00:00"
      },
      {
        "dt": 1478422800,
        "main": {
          "temp": 77.16,
          "temp_min": 77.16,
          "temp_max": 77.16,
          "pressure": 998.82,
          "sea_level": 1023.89,
          "grnd_level": 998.82,
          "humidity": 69,
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
          "speed": 7.76,
          "deg": 305.503
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-06 09:00:00"
      },
      {
        "dt": 1478433600,
        "main": {
          "temp": 73.21,
          "temp_min": 73.21,
          "temp_max": 73.21,
          "pressure": 998.5,
          "sea_level": 1023.79,
          "grnd_level": 998.5,
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
          "speed": 6.85,
          "deg": 308.51
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-06 12:00:00"
      },
      {
        "dt": 1478444400,
        "main": {
          "temp": 65.14,
          "temp_min": 65.14,
          "temp_max": 65.14,
          "pressure": 999.8,
          "sea_level": 1025.36,
          "grnd_level": 999.8,
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
          "speed": 7.52,
          "deg": 311.002
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-06 15:00:00"
      },
      {
        "dt": 1478455200,
        "main": {
          "temp": 60.86,
          "temp_min": 60.86,
          "temp_max": 60.86,
          "pressure": 999.87,
          "sea_level": 1025.79,
          "grnd_level": 999.87,
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
          "speed": 4.61,
          "deg": 302.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-06 18:00:00"
      },
      {
        "dt": 1478466000,
        "main": {
          "temp": 59.53,
          "temp_min": 59.53,
          "temp_max": 59.53,
          "pressure": 999.41,
          "sea_level": 1025.32,
          "grnd_level": 999.41,
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
          "speed": 7.54,
          "deg": 312.512
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-06 21:00:00"
      },
      {
        "dt": 1478476800,
        "main": {
          "temp": 57.35,
          "temp_min": 57.35,
          "temp_max": 57.35,
          "pressure": 999.33,
          "sea_level": 1025.36,
          "grnd_level": 999.33,
          "humidity": 94,
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
          "speed": 6.26,
          "deg": 312.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-07 00:00:00"
      },
      {
        "dt": 1478487600,
        "main": {
          "temp": 62.46,
          "temp_min": 62.46,
          "temp_max": 62.46,
          "pressure": 1000.5,
          "sea_level": 1026.32,
          "grnd_level": 1000.5,
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
          "speed": 5.84,
          "deg": 300.502
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-07 03:00:00"
      },
      {
        "dt": 1478498400,
        "main": {
          "temp": 72.04,
          "temp_min": 72.04,
          "temp_max": 72.04,
          "pressure": 1000.76,
          "sea_level": 1026.1,
          "grnd_level": 1000.76,
          "humidity": 80,
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
          "speed": 9.1,
          "deg": 305.511
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-07 06:00:00"
      },
      {
        "dt": 1478509200,
        "main": {
          "temp": 75.99,
          "temp_min": 75.99,
          "temp_max": 75.99,
          "pressure": 999.12,
          "sea_level": 1024.25,
          "grnd_level": 999.12,
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
          "speed": 10.6,
          "deg": 308.007
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-07 09:00:00"
      },
      {
        "dt": 1478520000,
        "main": {
          "temp": 71.85,
          "temp_min": 71.85,
          "temp_max": 71.85,
          "pressure": 998.62,
          "sea_level": 1023.93,
          "grnd_level": 998.62,
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
          "speed": 8.79,
          "deg": 304.504
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-07 12:00:00"
      },
      {
        "dt": 1478530800,
        "main": {
          "temp": 63.94,
          "temp_min": 63.94,
          "temp_max": 63.94,
          "pressure": 999.61,
          "sea_level": 1025.26,
          "grnd_level": 999.61,
          "humidity": 75,
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
          "speed": 8.25,
          "deg": 301.503
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-07 15:00:00"
      },
      {
        "dt": 1478541600,
        "main": {
          "temp": 59.78,
          "temp_min": 59.78,
          "temp_max": 59.78,
          "pressure": 999.5,
          "sea_level": 1025.46,
          "grnd_level": 999.5,
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
          "speed": 8.19,
          "deg": 303.004
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-07 18:00:00"
      },
      {
        "dt": 1478552400,
        "main": {
          "temp": 57.64,
          "temp_min": 57.64,
          "temp_max": 57.64,
          "pressure": 998.7,
          "sea_level": 1024.74,
          "grnd_level": 998.7,
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
          "speed": 9.42,
          "deg": 298.5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-07 21:00:00"
      },
      {
        "dt": 1478563200,
        "main": {
          "temp": 55.97,
          "temp_min": 55.97,
          "temp_max": 55.97,
          "pressure": 998.26,
          "sea_level": 1024.41,
          "grnd_level": 998.26,
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
          "speed": 9.28,
          "deg": 303.507
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-08 00:00:00"
      },
      {
        "dt": 1478574000,
        "main": {
          "temp": 60.36,
          "temp_min": 60.36,
          "temp_max": 60.36,
          "pressure": 999.27,
          "sea_level": 1025.26,
          "grnd_level": 999.27,
          "humidity": 73,
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
          "speed": 9.73,
          "deg": 300.501
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-08 03:00:00"
      },
      {
        "dt": 1478584800,
        "main": {
          "temp": 71.89,
          "temp_min": 71.89,
          "temp_max": 71.89,
          "pressure": 999.75,
          "sea_level": 1025.05,
          "grnd_level": 999.75,
          "humidity": 74,
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
          "speed": 10.54,
          "deg": 302.001
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-08 06:00:00"
      },
      {
        "dt": 1478595600,
        "main": {
          "temp": 76.29,
          "temp_min": 76.29,
          "temp_max": 76.29,
          "pressure": 998.47,
          "sea_level": 1023.66,
          "grnd_level": 998.47,
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
          "speed": 11.9,
          "deg": 302.5
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-08 09:00:00"
      },
      {
        "dt": 1478606400,
        "main": {
          "temp": 71.26,
          "temp_min": 71.26,
          "temp_max": 71.26,
          "pressure": 998.65,
          "sea_level": 1023.86,
          "grnd_level": 998.65,
          "humidity": 50,
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
          "speed": 9.53,
          "deg": 300
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2016-11-08 12:00:00"
      },
      {
        "dt": 1478617200,
        "main": {
          "temp": 61.88,
          "temp_min": 61.88,
          "temp_max": 61.88,
          "pressure": 999.88,
          "sea_level": 1025.69,
          "grnd_level": 999.88,
          "humidity": 72,
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
          "speed": 6.76,
          "deg": 299.001
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2016-11-08 15:00:00"
      }
    ];
    this.currentWeather = {
      coord: {
        "lon": 76.32,
        "lat": 29.32
      },
      weather: [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      base: "stations",
      main: {
        "temp": 69.44,
        "pressure": 1004.5,
        "humidity": 75,
        "temp_min": 69.44,
        "temp_max": 69.44,
        "sea_level": 1029.98,
        "grnd_level": 1004.5
      },
      wind: {
        "speed": 6.08,
        "deg": 298.5
      },
      clouds: {
        "all": 0
      },
      dt: 1478187614,
      sys: {
        "message": 0.0098,
        "country": "IN",
        "sunrise": 1478135381,
        "sunset": 1478174787
      },
      id: 1268907,
      name: "Jind",
      cod: 200
    };
  }
}
