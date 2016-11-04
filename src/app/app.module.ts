import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home";
import {WorldPage} from "../pages/world";
import {HttpService, UtilService} from "../pages/providers";
import {WeatherDetailPage} from "../pages/weather-detail";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    WorldPage,
    WeatherDetailPage
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
    WeatherDetailPage
  ],
  providers: [
    HttpService,
    UtilService
  ]
})
export class AppModule {
}
