import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

  openPlaceDetails(item) {
    this.navCtrl.push(PlaceDetailsPage, { item: {title: item} });
  }

}
