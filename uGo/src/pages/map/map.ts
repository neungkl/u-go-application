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
  _markerList: Array<any>;
  _latLngList: Array<any>;
  _randomRange: number = 0.05;

  ionViewDidLoad() {
    this.loadMap();
  }

  constructor(public navCtrl: NavController) {
    this._markerList = [];
    this._latLngList = [];
  }

  loadMap() {

    let latLng = {
      lat: 12.570097,
      lng: 99.927027
    }

    let mapOptions = {
      center: latLng,
      zoom: 14,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    for(let i=0; i<20; i++) {
      var curLatLng = {
        lat: latLng.lat + (Math.random() - .5) * this._randomRange,
        lng: latLng.lng + (Math.random() - .5) * this._randomRange
      };

      var marker = new google.maps.Marker({
        position: curLatLng,
        map: this.map,
        icon: {
          url: 'assets/img/pin-grey.png',
          scaledSize: new google.maps.Size(18, 25)
        }
      });

      this._latLngList.push(curLatLng);
      this._markerList.push(marker);
    }

    this.calculateShortestPath();
  }

  measure (lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
  }

  calculateShortestPath() {

    let centerPos = null;
    let prevList: Array<number> = [];
    let lineSequence = [];
    let prevNode: number = Math.floor(Math.random() * this._markerList.length);

    prevList.push(prevNode);
    lineSequence.push(this._latLngList[prevNode]);
    centerPos = this._latLngList[prevNode];

    for(let connect = 0; connect < 5; connect++) {

      let latLng1 = this._latLngList[prevNode];
      let dist: number = Infinity;
      let nextNode: number = -1;

      for(let i=0; i<this._markerList.length; i++) {
        if(prevList.indexOf(i) === -1) {
          let latLng2 = this._latLngList[i];
          let curDist = this.measure(latLng1.lat, latLng1.lng, latLng2.lat, latLng2.lng)

          if(curDist < dist) {
            dist = curDist;
            nextNode = i;
          }
        }
      }

      if(nextNode != -1) {
        prevNode = nextNode;
        prevList.push(prevNode);
        lineSequence.push(this._latLngList[prevNode]);
      }
    }

    var recommendPath = new google.maps.Polyline({
      path: lineSequence,
      geodesic: true,
      strokeColor: '#ffbc00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    // console.log(centerPos);
    recommendPath.setMap(this.map);
    this.map.setCenter(centerPos);

  }

}
