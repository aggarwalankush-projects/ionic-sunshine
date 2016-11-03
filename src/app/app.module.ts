import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home";
import {WorldPage} from "../pages/world";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    WorldPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    WorldPage
  ],
  providers: []
})
export class AppModule {
}
