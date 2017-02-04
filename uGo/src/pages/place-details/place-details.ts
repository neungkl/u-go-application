import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'page-details',
  templateUrl: 'place-details.html'
})
export class PlaceDetailsPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public placeService: PlaceService) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
  }

}
