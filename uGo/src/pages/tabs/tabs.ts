import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { WhereToGoPage } from '../where-to-go/where-to-go';
import { WatchlistPage } from '../watchlist/watchlist';
import { MyTripPage } from '../my-trip/my-trip';
import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  map: any = MapPage;
  myTrip: any = MyTripPage;
  whereToGo: any = WhereToGoPage;
  watchlist: any = WatchlistPage;
  schedule: any = SchedulePage;

  constructor() {

  }
}
