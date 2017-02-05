import { Component } from '@angular/core';

import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-my-trip',
  templateUrl: 'add-my-trip.html'
})
export class AddMyTripPage {

  location;
  days;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {

  }

  submit() {
    let days = [];
    for(let i=1; i<=this.days; i++) days.push(i);
    this.params.get('addTrip')({
      name: this.location,
      days: days
    });
    this.viewCtrl.dismiss();
  }


}
