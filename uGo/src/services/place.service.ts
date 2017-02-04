import Data from './place.data.ts';

export class PlaceService {

  places: Array<any> = Data;

  constructor() {
    for(let i=0; i<this.places.length; i++) {
      this.places[i].id = i;
      this.places[i].star = false;
      this.places[i].recommend = (i > this.places.length * 0.7 ? true : false);
    }
    for(let i=0; i<4; i++) {
      this.places[Math.floor(Math.random() * this.places.length)].star = true;
    }
  }

  getRecommend() {
    return this.places.filter(function(val) { return val.recommend });
  }

  getPlaces() {
    return this.places;
  }

  getWatchlist() {
    return this.places.filter(function(val) { return val.star; });
  }

  toggleWatchlist(id: number) {
    this.places[id].star = !this.places[id].star;
  }

  isInWatchlist(id: number) {
    return this.places[id].star;
  }

}
