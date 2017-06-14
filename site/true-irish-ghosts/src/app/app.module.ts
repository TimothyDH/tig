import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {GMapModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import {StoreModule} from '@ngrx/store';
import {ghostlocationsReducer} from './statemanagement/reducers/ghostlocations.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GMapModule,
    DialogModule,
    SelectButtonModule,
    ButtonModule,
    StoreModule.provideStore({ ghostlocations: ghostlocationsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
