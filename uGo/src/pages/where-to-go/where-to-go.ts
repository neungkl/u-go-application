import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';
import { CategoriesModalPage } from '../categories-modal/categories-modal';

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  searchInput(evt) {
    console.log(evt.target.value);
  }

  openPlaceDetails(item) {
    this.navCtrl.push(PlaceDetailsPage, { item: item });
  }

  viewCategories() {
    let modal = this.modalCtrl.create(CategoriesModalPage);
    modal.present();
  }

}
