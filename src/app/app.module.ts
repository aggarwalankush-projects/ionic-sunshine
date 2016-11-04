import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home";
import {WorldPage} from "../pages/world";
import {HttpService, UtilService, DatabaseService, Sql} from "../pages/providers";
import {WeatherDetailPage} from "../pages/weather-detail";
import {SettingPage} from "../pages/setting";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    WorldPage,
    WeatherDetailPage,
    SettingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    WorldPage,
    WeatherDetailPage,
    SettingPage
  ],
  providers: [
    HttpService,
    UtilService,
    DatabaseService,
    Sql
  ]
})
export class AppModule {
}
