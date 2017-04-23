
export default class MapData {
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

export class LatLng {
  lat: number;
  lng: number;

  constructor(alat: number, alng: number) {
    this.lat = alat;
    this.lng = alng;
  }

}