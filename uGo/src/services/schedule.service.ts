export class ScheduleService {
  places: Array<any>;

  setSchedule(places) {
    this.places = places;
  }

  getSchedule() {
    return this.places;
  }

  find(item) {
    for(let i=0; i<this.places.length; i++) {
      if(this.places[i].id === item.id) return i;
    }
  }

  movedown(item) {
    let index = this.find(item);
    if(index - 1 < 0) return ;
    let tmp = this.places[index - 1];
    this.places[index - 1] = this.places[index];
    this.places[index] = tmp;
  }

  moveup(item) {
    let index = this.find(item);
    if(index + 1 > this.places.length - 1) return ;
    let tmp = this.places[index];
    this.places[index] = this.places[index + 1];
    this.places[index + 1] = tmp;
  }
}
