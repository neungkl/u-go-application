import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad() {
    this.loadMap();
  }

  constructor(public navCtrl: NavController) {

  }

  loadMap() {

    console.log('Load Maps...');

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true
    }

    console.log(this.mapElement.nativeElement);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
