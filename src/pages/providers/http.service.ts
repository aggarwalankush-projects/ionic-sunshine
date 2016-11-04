import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class HttpService {

  constructor(public http: Http) {
  }

  getDailyWeather(zip: string): Observable<any> {
    return this.get(zip, 'forecast');
  }

  getCurrentWeather(zip: string): Observable<any> {
    return this.get(zip, 'weather');
  }

  private get(zip: string, type: string): Observable<any> {
    let url: string = "http://api.openweathermap.org/data/2.5/" + type;
    let params = new URLSearchParams();
    params.set('zip', zip);
    params.set('units', 'metric');
    params.set('mode', 'json');
    params.set('appid', '108ecdf141fd30a25ba642f98339eaaf');
    return this.http.get(url, {search: params})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
