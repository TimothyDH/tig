import { ActionReducer, Action } from '@ngrx/store';
import { MapData } from '../../map/map.data';

//export function ghostlocationsReducer (state: MapData[] = MapData[], action: Action) {
  export function ghostlocationsReducer (state = [], action: Action) {
  switch(action.type){
    case 'ADD_LOCATION':
      return [
        ...state,
        Object.assign({}, {id: action.payload.id, title: action.payload.title, position:Object.assign({}, {lat: action.payload.position.lat, lng: action.payload.position.lng})})
      ];
    default:
      return state;
  }
}