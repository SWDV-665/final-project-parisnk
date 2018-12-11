import {Camera, CameraOptions} from '@ionic-native/camera';
import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlacesService} from "../../services/places";


@Component({selector: 'page-add-place', templateUrl: 'add-place.html'})
export class AddPlacePage {
//variable for saving image data
  imageUrl = '';
//Injecting PlacesServices and Camera in the constructor
  constructor(private placesService : PlacesService, private camera : Camera) {}
//submit inspection place
  onSubmit(form : NgForm) {
    this.placesService.addPlace(form.value.title, form.value.address, form.value.description, this.imageUrl);
    form.reset();
    this.imageUrl = '';

  }
//function for taking photo by camera
takePhoto() {
  const options : CameraOptions = {
    quality: 50, // picture quality
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options)
  //display image on the screen
    .then((imageData) => {
      this.imageUrl = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
}

}

