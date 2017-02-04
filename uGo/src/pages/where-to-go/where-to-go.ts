import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';

@Component({
  selector: 'page-where-to-go',
  templateUrl: 'where-to-go.html'
})
export class WhereToGoPage {

  categories = ['eiei', 'test', 'aaa'];
  seachResults = [
    {
      title: 'Bangkok'
    },
    {
      title: 'Korat'
    },
    {
      title: 'asdsads'
    }
  ];
  features = [
    {
      title: 'aaaa'
    },
    {
      title: 'bbb'
    },
    {
      title: 'ccc'
    },
    {
      title: 'dddd'
    },
    {
      title: 'eee'
    },
    {
      title: 'fff'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  searchInput(evt) {
    console.log(evt.target.value);
  }

  openPlaceDetails(item) {
    this.navCtrl.push(PlaceDetailsPage, { item: item });
  }

}
