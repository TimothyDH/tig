import LatLng from './latlng';

export class MapData {
  id: number;
  title: string;
  position: LatLng;

  constructor(aid: number, atitle: string, aPos: LatLng) {
    // The this keyword is mandatory.
    this.id = aid;
    this.title = atitle;    
    this.position = aPos;
  }
}