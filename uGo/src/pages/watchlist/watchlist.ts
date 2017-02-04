import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html'
})
export class WatchlistPage {

  watchlist = [
    'aaa',
    'bbb',
    'ccc'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public placeService: PlaceService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

  openPlaceDetails(item) {
    this.navCtrl.push(PlaceDetailsPage, { item: item });
  }

}
