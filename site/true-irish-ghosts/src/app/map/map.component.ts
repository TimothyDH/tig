import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {GMap} from 'primeng/primeng';
import {OverlayPanel} from 'primeng/primeng';
import MapData from './map.data';
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
  mapMarkers: MapData[];

 options: any;
    
 overlays: any[];
 
    
  constructor(public http: Http) { }

  ngOnInit() {
        this.options = {
            center: {lat: 53.587922, lng: -7.905928},
            zoom: 7,
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
    this.loading = true;
    //this.http.request('/ghosts')
    this.http.request('../../main/resources/ghosts.json')
      .subscribe((res: Response) => {
        this.mapMarkers = res.json() as MapData[];
        console.log(this.mapMarkers.length);
        this.loadMapMarkers();
        //this.overlays = res.json() as MapData[];
        this.loading = false;
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
    }
  }

  handleOverlayClick(event, overlaypanel: OverlayPanel) {
        //event.originalEvent: MouseEvent of Google Maps api
        //event.overlay: Clicked overlay     
        //event.map: Map instance  
        var marker = event.overlay; 
        console.log("Overlay Clicked" + marker.title);
        overlaypanel.show(event);
  }

}
