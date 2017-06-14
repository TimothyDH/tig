webpackJsonp([1,3],{

/***/ 402:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(529);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/main.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'True Irish Ghosts';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(754),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/app.component.js.map

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statemanagement_reducers_ghostlocations_reducer__ = __webpack_require__(532);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["b" /* StoreModule */].provideStore({ ghostlocations: __WEBPACK_IMPORTED_MODULE_8__statemanagement_reducers_ghostlocations_reducer__["a" /* ghostlocationsReducer */] })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/app.module.js.map

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statemanagement_actions_actions__ = __webpack_require__(531);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var MapComponent = (function () {
    function MapComponent(http, store) {
        this.http = http;
        this.store = store;
        this.currentview = "Identified Locations";
        this.locationTypes = [];
        this.locationTypes.push({ label: 'Identified Locations', value: 'Identified Locations' });
        this.locationTypes.push({ label: 'Counties', value: 'Counties' });
        this.locationTypes.push({ label: 'Dublin', value: 'Dublin' });
    }
    MapComponent.prototype.ngOnInit = function () {
        this.options = {
            center: { lat: 53.587922, lng: -7.905928 },
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
    };
    MapComponent.prototype.getGhosts = function () {
        var _this = this;
        var url;
        if (this.currentview === "Identified Locations") {
            url = '/ghosts';
        }
        else if (this.currentview === "Counties") {
            url = '/county_ghosts';
        }
        else if (this.currentview === "Dublin") {
            //TODO - no data file for Dublin yet
            url = '/dublinghosts';
            this.zoomOnDublin();
        }
        console.log("getting ghosts:" + this.currentview);
        this.loading = true;
        this.http.request(url)
            .subscribe(function (res) {
            _this.mapMarkers = res.json();
            console.log(_this.mapMarkers.length);
            _this.loadMapMarkers();
            //this.overlays = res.json() as MapData[];
            _this.loading = false;
            console.log("got ghosts" + JSON.stringify(_this.overlays));
        });
    };
    MapComponent.prototype.loadMapMarkers = function () {
        for (var i = 0; i < this.mapMarkers.length; i++) {
            // console.log("reloading map:" + this.mapMarkers[i].title);
            // Create a marker and set its position.
            var marker = new google.maps.Marker({
                // map: this.map,
                position: this.mapMarkers[i].position,
                title: this.mapMarkers[i].title
            });
            this.overlays.push(marker);
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__statemanagement_actions_actions__["a" /* ADD_LOCATION */], payload: this.mapMarkers[i] });
        }
    };
    MapComponent.prototype.handleOverlayClick = function (event) {
        //event.originalEvent: MouseEvent of Google Maps api
        //event.overlay: Clicked overlay     
        //event.map: Map instance  
        var marker = event.overlay;
        //console.log("Overlay Clicked " + marker.title);
        this.headerText = marker.title;
        this.getGhostDetails(marker.title);
    };
    MapComponent.prototype.getGhostDetails = function (locationtitle) {
        var _this = this;
        console.log("getting ghost details:" + locationtitle);
        this.loading = true;
        this.http.request('/ghostlocation/' + locationtitle)
            .subscribe(function (res) {
            _this.storydetail = res.json();
            _this.ghostStory = _this.storydetail.references[0].text;
            //console.log(JSON.stringify(marker));
            _this.displayDialog = true;
        });
    };
    MapComponent.prototype.changeView = function (obj) {
        console.log(obj.value);
        this.overlays = [];
        this.getGhosts();
    };
    MapComponent.prototype.zoomOnDublin = function () {
        this.options.center.lat = 53.348573;
        this.options.center.lng = -6.256490;
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(755),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === 'function' && _b) || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/map.component.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ADD_LOCATION; });
var ADD_LOCATION = 'ADD_LOCATION';
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/actions.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = ghostlocationsReducer;
//export function ghostlocationsReducer (state: MapData[] = MapData[], action: Action) {
function ghostlocationsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_LOCATION':
            return state.concat([
                Object.assign({}, { id: action.payload.id, title: action.payload.title, position: Object.assign({}, { lat: action.payload.position.lat, lng: action.payload.position.lng }) })
            ]);
        default:
            return state;
    }
}
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/ghostlocations.reducer.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/environment.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/workspaces/tigs/site/true-irish-ghosts/src/polyfills.js.map

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<app-map></app-map>\n"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "\n    <h2>Ghost Map - {{currentview}}</h2>\n    <p-selectButton [options]=\"locationTypes\" [(ngModel)]=\"currentview\" (onChange)=\"changeView($event)\"></p-selectButton>\n    <!--div id=\"gmap\" style=\"width:500px;height:380px;\"></div-->\n    <p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"{'width':'100%','height':'500px'}\" (onOverlayClick)=\"handleOverlayClick($event)\" ></p-gmap>\n    <div *ngIf=\"loading\">loading...</div>\n    <p-dialog [(visible)]=\"displayDialog\" >\n    <p-header>\n        {{headerText}}\n    </p-header>\n        {{ghostStory}}\n    <p-footer>\n       Do you know something about this ghost story? \n    </p-footer>\n    </p-dialog>\n\n    <!--pre>{{data | json}}</pre-->\n    \n"

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ }

},[790]);
//# sourceMappingURL=main.bundle.map