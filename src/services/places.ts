import {Injectable} from "@angular/core";
import {Place} from "../models/places";
import {Storage} from '@ionic/storage';

declare var cordova : any;
@Injectable()
export class PlacesService {
  //array of places
  private places : Place[] = [];
  constructor(private storage : Storage) {}
  //adding an inspection place
  addPlace(title : string, address : string, description : string, imageUrl: string) {
    const place = new Place(title, address, description, imageUrl);
    this.places .push(place);
    //set key value pairs in the storage
    this.storage .set('places', this.places)
      .then()
      .catch(err => {
        //if there is an error, removing the last item that was added
        this.places.splice(this.places.indexOf(place), 1);
      })
  }
  loadPlaces() {
    return this.places.slice();
  }
  //retrieve data from storage
  fetchPlaces() {
    return this.storage.get('places')
      .then((places : Place[]) => {
        //assign a place which is not null
        return this.places = places != null ? places : [];
      })
      .catch(err => console.log(err));
  }
  //method for deleting the inspection place
  deletePlace(index : number) {
    //remove the place
    this.places.splice(index, 1);
    //updating the storage
    this.storage.set('places', this.places)
      .then() 
      .catch(err => console.log(err));
  }
  
}
