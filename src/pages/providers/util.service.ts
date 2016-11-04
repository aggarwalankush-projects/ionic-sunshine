import {Injectable} from "@angular/core";
import * as moment from "moment";

@Injectable()
export class UtilService {

  getTempUnit(): string {
    //TODO
    return 'F';
  }

  formatTemp(temp: number): string {
    return this.roundVal(temp) + '&deg;' + this.getTempUnit();
  }

  getFriendlyDayString(epoch: number): string {
    return moment.unix(epoch).format('ddd, MMM D hh:mm A');
  }

  getFullDayString(epoch: number): string {
    return moment.unix(epoch).format('dddd, MMMM D hh:mm A');
  }

  getTimeString(epoch: number): string {
    return moment.unix(epoch).format('hh:mm A');
  }

  getTodayString(epoch: number): string {
    return 'Today, ' + moment.unix(epoch).format('MMMM D hh:mm A');
  }

  getWeatherIcon(weatherObj: any, epoch: number): string {
    let weatherId: number = weatherObj.id;
    let iconSrc = 'assets/img/weather';
    const hour = moment.unix(epoch).get('hour');
    if (hour >= 18 || hour <= 6) {
      iconSrc += '/night';
    } else {
      iconSrc += '/day';
    }
    if (weatherId >= 200 && weatherId <= 232) {
      return iconSrc + '/storm.png';
    } else if (weatherId >= 300 && weatherId <= 321) {
      return iconSrc + '/drizzle.png';
    } else if (weatherId >= 500 && weatherId <= 504) {
      return iconSrc + '/rain.png';
    } else if (weatherId == 511) {
      return iconSrc + '/snow.png';
    } else if (weatherId >= 520 && weatherId <= 531) {
      return iconSrc + '/rain.png';
    } else if (weatherId >= 600 && weatherId <= 622) {
      return iconSrc + '/snow.png';
    } else if (weatherId >= 701 && weatherId <= 761) {
      return iconSrc + '/fog.png';
    } else if (weatherId == 761 || weatherId == 781) {
      return iconSrc + '/storm.png';
    } else if (weatherId == 800) {
      return iconSrc + '/clear.png';
    } else if (weatherId >= 801 && weatherId <= 804) {
      return iconSrc + '/cloud.png';
    }
    return 'http://openweathermap.org/img/w/' + weatherObj.icon + '.png';
  }

  getFormattedWind(windSpeed: number, degrees: number): string {
    let windFormat: string = 'km/h';
    if (this.getTempUnit() === 'F') {
      windFormat = 'mph';
      windSpeed = 0.621371192237334 * windSpeed;
    }

    let direction: string = "Unknown";
    if (degrees >= 337.5 || degrees < 22.5) {
      direction = "N";
    } else if (degrees >= 22.5 && degrees < 67.5) {
      direction = "NE";
    } else if (degrees >= 67.5 && degrees < 112.5) {
      direction = "E";
    } else if (degrees >= 112.5 && degrees < 157.5) {
      direction = "SE";
    } else if (degrees >= 157.5 && degrees < 202.5) {
      direction = "S";
    } else if (degrees >= 202.5 && degrees < 247.5) {
      direction = "SW";
    } else if (degrees >= 247.5 && degrees < 292.5) {
      direction = "W";
    } else if (degrees >= 292.5 && degrees < 337.5) {
      direction = "NW";
    }
    return this.roundVal(windSpeed) + ' ' + windFormat + ' ' + direction;
  }

  roundVal(val:number):number{
    return Math.round(val);
  }
}
