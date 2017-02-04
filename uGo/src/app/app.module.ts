import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { WhereToGoPage } from '../pages/where-to-go/where-to-go';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { PlaceDetailsPage } from '../pages/place-details/place-details';
import { CategoriesModalPage } from '../pages/categories-modal/categories-modal';
import { MyTripPage } from '../pages/my-trip/my-trip';
import { TabsPage } from '../pages/tabs/tabs';
import { SchedulePage } from '../pages/schedule/schedule';
import { AddMyTripPage } from '../pages/add-my-trip/add-my-trip';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    WhereToGoPage,
    WatchlistPage,
    PlaceDetailsPage,
    CategoriesModalPage,
    MyTripPage,
    TabsPage,
    SchedulePage,
    AddMyTripPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    WhereToGoPage,
    WatchlistPage,
    PlaceDetailsPage,
    CategoriesModalPage,
    MyTripPage,
    TabsPage,
    SchedulePage,
    AddMyTripPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
