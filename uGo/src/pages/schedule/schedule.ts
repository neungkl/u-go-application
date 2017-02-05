import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ScheduleService } from '../../services/schedule.service';
import { PlaceDetailsPage } from '../place-details/place-details';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public scheduleService: ScheduleService) {

  }

  openPlaceDetails(item) {
    this.navCtrl.push(PlaceDetailsPage, { item: item });
  }

  timeFormat(minute) {
    function zero(n) {
      if(n < 10) return '0' + n;
      if(n == 0) return '00';
      return '' + n;
    }

    return zero(Math.floor(minute / 60)) + ':' + zero(minute % 60);
  }

  moveup(item) {
    this.scheduleService.moveup(item);
  }

  movedown(item) {
    this.scheduleService.movedown(item);
  }

}
