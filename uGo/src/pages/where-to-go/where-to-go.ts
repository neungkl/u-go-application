import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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
    'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'
  ]

  constructor(public navCtrl: NavController) {

  }

  searchInput(evt) {
    console.log(evt.target.value);
  }

}
