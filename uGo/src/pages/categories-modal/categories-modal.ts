import { Component } from '@angular/core';

import { NavParams, ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-categories-modal',
  templateUrl: 'categories-modal.html'
})
export class CategoriesModalPage {

  categories = [
    'วัด', 'ทะเล', 'ภูเขา', 'น้ำตก', 'ภา'
  ]

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  choose(category) {
    this.params.get('changeCategory')(category);
    this.dismiss();
  }
}
