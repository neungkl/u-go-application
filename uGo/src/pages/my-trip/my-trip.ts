import { Component } from '@angular/core';
import { AddMyTripPage } from '../add-my-trip/add-my-trip';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-my-trip',
  templateUrl: 'my-trip.html'
})
export class MyTripPage {

  trips = [
    // {
    //   name: 'Hua Hin',
    //   days: [1,2,3]
    // }
  ]

  constructor(public navCtrl: NavController) {

  }

  addTrip(trip) {
    this.trips.push(trip);
  }

  openMap() {
    console.log('eiei')
    this.navCtrl.push(MapPage);
  }

  openAddMyTrip() {
  	 this.navCtrl.push(AddMyTripPage, { addTrip: this.addTrip.bind(this) });
  }
}
