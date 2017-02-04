import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { PlaceDetailsPage } from '../place-details/place-details';
import { CategoriesModalPage } from '../categories-modal/categories-modal';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'page-where-to-go',
  templateUrl: 'where-to-go.html'
})
export class WhereToGoPage {

  category = '';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public placeService: PlaceService) {
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

  isStar(item) {
    return this.placeService.isInWatchlist(item.id);
  }

  starToggle(item) {
    this.placeService.toggleWatchlist(item.id);
  }

  viewCategories() {
    let modal = this.modalCtrl.create(CategoriesModalPage, {
      changeCategory: this.changeCategory.bind(this)
    });
    modal.present();
  }

}
