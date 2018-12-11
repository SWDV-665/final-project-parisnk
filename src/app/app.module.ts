import {Camera, CameraOptions} from '@ionic-native/camera';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {AddPlacePage} from '../pages/add-place/add-place';
import {BrowserModule} from '@angular/platform-browser';
import {HomePage} from '../pages/home/home';
import {IonicStorageModule} from '@ionic/storage';
import {MyApp} from './app.component';
import {PlacePage} from '../pages/place/place';
import { PlacesService } from '../services/places';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp, HomePage, AddPlacePage, PlacePage
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, HomePage, AddPlacePage, PlacePage

  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Camera,
    PlacesService,
    
  ]
})
export class AppModule {}
