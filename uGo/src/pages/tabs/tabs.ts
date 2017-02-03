import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';
import { WhereToGoPage } from '../where-to-go/where-to-go';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab3Root: any = ContactPage;
  map: any = MapPage;
  whereToGo: any = WhereToGoPage;

  constructor() {

  }
}
