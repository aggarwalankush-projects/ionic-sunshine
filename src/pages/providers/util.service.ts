import {Injectable} from "@angular/core";
import * as moment from "moment";

@Injectable()
export class UtilService {

  formatTemp(temp: number): string {
    return Math.round(temp) + '&deg;F';
  }

  getFriendlyDayString(epoch: number): string {
    return moment.unix(epoch).format('ddd, MMM D hh:mm A');
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
}
