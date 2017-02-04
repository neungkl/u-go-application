export class PlaceService {

  places: Array<any> = [
    {
      title: 'Bangkok',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Korat',
      description: 'Sed volutpat posuere ante, a viverra mi faucibus in.'
    },
    {
      title: 'asdsads',
      description: 'Cras facilisis lacinia dignissim. Nunc tempor purus dignissim lacus tincidunt ultrices.'
    },
    {
      title: 'aaaa',
      description: 'asdasdasdsao'
    },
    {
      title: 'bbb',
      description: 'test'
    },
    {
      title: 'ccc',
      description: 'kosate'
    },
    {
      title: 'dddd',
      description: 'kosako'
    },
    {
      title: 'eee',
      description: 'ksasas'
    },
    {
      title: 'fff',
      description: 'kosate'
    },
    {
      title: 'eiei',
      description: 'askdoasd'
    },
    {
      title: 'lorem',
      description: 'tem tem tem'
    }
  ];

  constructor() {
    for(let i=0; i<this.places.length; i++) {
      this.places[i].id = i;
      this.places[i].star = false;
      this.places[i].recommend = (i > 6 ? true : false);
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
