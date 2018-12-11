import {Component, OnInit} from '@angular/core';

import {AddPlacePage} from '../add-place/add-place';
import {ModalController} from 'ionic-angular';
import {Place} from '../../models/places';
import {PlacePage} from '../place/place';
import {PlacesService} from '../../services/places';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage implements OnInit {

addPlaceDetailPage = AddPlacePage;
  places : Place[] = [];
  //Injecting placesServices and ModalController in the constructor
  constructor(private placesService : PlacesService, private modalCtrl : ModalController) {}
  //call fetchplaces method in the placesService
  ngOnInit() {
    this.placesService.fetchPlaces()
      .then(
        (places: Place[]) => this.places = places
      );
  }
  //returns a copy of places array
  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }
  //create the modal for going to the place detail page
  openPlaceDetailPage(place : Place, index : number) {
    const modal = this.modalCtrl.create(PlacePage, {place: place, index: index });
    modal.present();
  }
}
