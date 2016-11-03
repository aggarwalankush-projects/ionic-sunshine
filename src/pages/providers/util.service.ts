import {Injectable} from "@angular/core";

@Injectable()
export class UtilService {

  getWeatherIcon(icon: string): string {
    return 'http://openweathermap.org/img/w/' + icon + '.png';
  }

  formatTemp(temp: number): string {
    return Math.round(temp) + '&deg;F';
  }

}
