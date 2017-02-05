import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PlaceService } from '../../services/place.service';
import { ScheduleService } from '../../services/schedule.service';

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
  ans;
  places;
  best: number = Infinity;

  ionViewDidEnter() {
    this.loadMap();
  }

  constructor(public navCtrl: NavController, public placeService: PlaceService, public scheduleService: ScheduleService) {
  }

  loadMap() {

    this._markerList = [];
    this._latLngList = [];

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

    let places = this.placeService.getPlaces();
    this.places = places;

    for(let i=0; i<places.length; i++) {
      // var curLatLng = {
      //   lat: latLng.lat + (Math.random() - .5) * this._randomRange,
      //   lng: latLng.lng + (Math.random() - .5) * this._randomRange
      // };
      let pos = places[i].Position.split(",");
      let curLatLng = {
        lat: parseFloat(pos[0]),
        lng: parseFloat(pos[1]),
        star: places[i].star
      };

      let icon = {
        url: 'assets/img/pin-grey.png',
        scaledSize: new google.maps.Size(15, 19)
      };

      if(places[i].star) {
        icon = {
          url: 'assets/img/pin-yellow.png',
          scaledSize: new google.maps.Size(25, 32)
        }
      }

      let marker = new google.maps.Marker({
        position: curLatLng,
        map: this.map,
        icon: icon
      });

      let infowindow = new google.maps.InfoWindow({
        content: 'สถานที่ : ' + places[i].Name
      });

      marker.addListener('click', function() {
        infowindow.open(this.map, marker);
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

  find(n,d,dist,ans) {
    if(d >= 5) {
      if(dist < this.best) {
        this.ans = [];
        for(let i=0; i<ans.length; i++) this.ans[i] = ans[i];
        this.best = dist;
      }
      return ;
    } else {
      if(dist > this.best) return ;
      let prev = ans[ans.length - 1];

      let best = Infinity;
      let best2 = Infinity;
      let chooseI = -1;
      let chooseI2 = -1;
      for(let i=0; i<this._latLngList.length; i++) {

        if(ans.indexOf(i) === -1) {
          let latLng1 = this._latLngList[i];
          let latLng2 = this._latLngList[prev];
          let dd = this.measure(latLng1.lat, latLng1.lng, latLng2.lat, latLng2.lng);

          if(dd < best2 && this._latLngList[i].star) {
            best2 = dd;
            chooseI2 = i;
          }
          if(dd < best) {
            best = dd;
            chooseI = i;
          }
        }
      }
      chooseI = chooseI2 === -1 ? chooseI : chooseI2;
      ans.push(chooseI);
      var tmp = [];
      for(let i=0; i<ans.length; i++) tmp.push(ans[i]);
      this.find(chooseI,d + 1,dist + best, tmp);
      ans.pop();
    }
  }

  calculateShortestPath() {

    let lineSequence = [];
    this.best = Infinity;

    for(let i=0; i<this._latLngList.length; i++) {
      if(this._latLngList[i].star) {
        this.find(i,0,0,[i]);
      }
    }

    let scheduleSeq = [];

    for(let i=0; i<this.ans.length; i++){
      lineSequence.push({
        lat: this._latLngList[this.ans[i]].lat,
        lng: this._latLngList[this.ans[i]].lng
      });
      scheduleSeq.push(this.places[this.ans[i]]);
    }

    console.log(this.ans);

    this.scheduleService.setSchedule(scheduleSeq);

    var recommendPath = new google.maps.Polyline({
      path: lineSequence,
      geodesic: true,
      strokeColor: '#ffbc00',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });

    // console.log(centerPos);
    recommendPath.setMap(this.map);
    this.map.setCenter(this._latLngList[this.ans[0]]);

  }

}
