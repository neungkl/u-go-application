import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>
        {{ item.title }}
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}"></ion-icon>
    {{ item.description }}
  </ion-content>
  `
})
export class PlaceDetailsPage {
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
  }

}
