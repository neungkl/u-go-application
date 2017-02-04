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
  searchString = '';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public placeService: PlaceService) {
  }

  searchInput(evt) {
    this.searchString = evt.target.value.toLowerCase();
  }

  getPlaces() {
    return this.placeService.getPlaces().filter(function(val) {
      return val.title.toLowerCase().indexOf(this.searchString) !== -1 ||
        val.description.toLowerCase().indexOf(this.searchString) !== -1;
    }.bind(this));
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
