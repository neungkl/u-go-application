import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { WhereToGoPage } from '../pages/where-to-go/where-to-go';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { PlaceDetailsPage } from '../pages/place-details/place-details';
import { CategoriesModalPage } from '../pages/categories-modal/categories-modal';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    WhereToGoPage,
    WatchlistPage,
    PlaceDetailsPage,
    CategoriesModalPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    WhereToGoPage,
    WatchlistPage,
    PlaceDetailsPage,
    CategoriesModalPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
