import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {GMap} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {Button, SelectButton, SelectItem} from 'primeng/primeng';
//import {SelectItem} from 'primeng/primeng';
import {Observable} from 'rxjs';
import {MapData} from './map.data';
import {LatLng} from './latlng';
import {StoryDetail} from './story.detail';
import { Store } from '@ngrx/store';
import {
  ADD_LOCATION
} from '../statemanagement/actions/actions'

interface AppState {
  mapData: MapData[];
};


declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //google: any;
  //map: any;
  data: Object;
  loading: boolean;
  displaystorydetails: boolean;
  mapMarkers: MapData[];
  storydetail: StoryDetail;
  headerText: String;
  ghostStory: String[];
  currentview: String = "Identified Locations";
  locationTypes: SelectItem[];

 options: any;
    
 overlays: any[];
  counter: Observable<MapData[]>;

    
  constructor(public http: Http, private store: Store<AppState>) { 
    this.locationTypes = [];
    this.locationTypes.push({label:'Identified Locations', value:'Identified Locations'});
    this.locationTypes.push({label:'Dublin', value:'Dublin'});
    this.locationTypes.push({label:'Unidentified Locations', value:'Unidentified Locations'});
    this.displaystorydetails = false;
  }

  ngOnInit() {
        this.options = {
            center: {lat: 53.587922, lng: -7.905928},
            zoom: 6,
             mapTypeId: google.maps.MapTypeId.ROADMAP
        };
   
    /*var mapProp = {
      center: new google.maps.LatLng(53.587922, -7.905928),
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };*/
    //this.map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    this.overlays = [];
    this.getGhosts();
  }


  getGhosts() {
    var url: string;
    if(this.currentview==="Identified Locations"){
      //url = '/ghosts';
      url = '/data/ided_ghosts.json';
    }
    else if(this.currentview==="Unidentified Locations"){
      //url = '/unided_ghosts';
      url = '/data/unided_ghosts.json';
    }
     else if(this.currentview==="Dublin"){
      //url = '/dublinghosts';
      url = '/data/dublin_ghosts.json';
    }
    console.log("getting ghosts:" + this.currentview);
    this.loading = true;
    this.http.request(url)
    //this.http.request('../../main/resources/ghosts.json')
      .subscribe((res: Response) => {
        this.mapMarkers = res.json() as MapData[];
        //console.log(this.mapMarkers.length);
        this.loadMapMarkers();
        //this.overlays = res.json() as MapData[];
        this.loading = false;
        //console.log("got ghosts" + JSON.stringify(this.overlays));
      });
  }

  loadMapMarkers() {
    for (var i = 0; i < this.mapMarkers.length; i++) {
      // console.log("reloading map:" + this.mapMarkers[i].title);
      // Create a marker and set its position.
      var marker = new google.maps.Marker({
       // map: this.map,
        position: this.mapMarkers[i].position,
        title: this.mapMarkers[i].title
      });
      this.overlays.push(marker);
      this.store.dispatch({type: ADD_LOCATION, payload: this.mapMarkers[i]});
    }
  }

  handleOverlayClick(event) {
        //event.originalEvent: MouseEvent of Google Maps api
        //event.overlay: Clicked overlay     
        //event.map: Map instance  
        var marker = event.overlay; 
        //console.log("Overlay Clicked " + marker.title);
        this.headerText = marker.title;
        this.getGhostDetails(marker.title);
  }

   getGhostDetails(locationtitle :String) {
    console.log("getting ghost details:" + locationtitle);
    this.displaystorydetails = false;
    //this.http.request('/ghostlocation/' + locationtitle)
    this.http.request('/data/data/' + locationtitle + '.json')
      .subscribe((res: Response) => {
        this.storydetail = res.json() as StoryDetail;
        //this.ghostStory = this.storydetail.references[0].text;
        //this.ghostStory = this.storydetail.references;//"";
        this.ghostStory = new Array();
        for (let story of this.storydetail.references) {
            this.ghostStory.push(story.text);// += "<H2>Story</H2>\n";
        //    this.ghostStory += story.text;
        //    this.ghostStory += "<BR>";
        }
        //console.log(JSON.stringify(marker));
        this.displaystorydetails=true;
      });
  }

  public changeView(obj:any, map:any){
    //console.log(obj.value);
    this.displaystorydetails = false;
    this.overlays = [];
    this.getGhosts();
    if(this.currentview==="Dublin"){
      map.setZoom(10);
      map.setCenter({lat: 53.34857, lng: -6.2564908});
    }
    else{
      map.setZoom(6);
      map.setCenter({lat: 53.587922, lng: -7.905928});
    }
 }

 zoomOnDublin(){
//   this.options.center.lat = 53.348573;
//   this.options.center.lng = -6.256490;
 // console.log("setting Options");
 }



}
