import {IonicPage, NavParams, ViewController} from 'ionic-angular';

import {Component} from '@angular/core';
import {Place} from '../../models/places';
import {PlacesService} from '../../services/places';

@IonicPage()
@Component({selector: 'page-place', templateUrl: 'place.html'})
export class PlacePage {
  place : Place;
  index : number;
//Injecting NavParams, ViewController and PlacesService in the constructor
  constructor(public navParams : NavParams, private viewCtrl : ViewController, private placesService : PlacesService) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }
//function for leaving the placeDetailPage
  onLeave() {
    this.viewCtrl.dismiss();
  }
  //function for deleting the inspected place
  onDelete() {
    this.placesService.deletePlace(this.index);
    this.onLeave();
  }

}

