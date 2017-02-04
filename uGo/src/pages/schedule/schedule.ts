import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';
import { CategoriesModalPage } from '../categories-modal/categories-modal';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  category = '';
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

  changeCategory(cat) {
    this.category = cat;
  }

  viewCategories() {
    let modal = this.modalCtrl.create(CategoriesModalPage, {
      changeCategory: this.changeCategory.bind(this)
    });
    modal.present();
  }

}
