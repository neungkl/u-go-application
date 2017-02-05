export class ScheduleService {
  places: Array<any>;

  setSchedule(places) {
    this.places = places;
  }

  getSchedule() {
    return this.places;
  }
}
