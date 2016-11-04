import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";
import {DatabaseService} from "../providers";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  metric: string;
  timeFormat: string;
  location: string;

  constructor(public alertCtrl: AlertController,
              public databaseService: DatabaseService) {
  }

  ionViewWillEnter() {
    this.databaseService.get('location')
      .then(value=>this.location = value);
    this.databaseService.get('metric')
      .then(value=>this.metric = value);
    this.databaseService.get('timeFormat')
      .then(value=>this.timeFormat = value);
  }

  changeLocation() {
    let alert = this.alertCtrl.create({
      title: 'Location',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'location',
      value: this.location,
      placeholder: 'Enter ZipCode',
      type: 'tel'
    });
    alert.addButton({
      text: 'Save',
      handler: data => {
        if (data.location.trim() === '') {
          return false;
        }
        this.location = data.location;
        this.databaseService.set('location', this.location);
      }
    });
    alert.present();
  }

  timeFormatChange() {
    this.databaseService.set('timeFormat', this.timeFormat);
  }

  metricChange() {
    this.databaseService.set('metric', this.metric);
  }
}
