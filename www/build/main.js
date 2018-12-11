webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacePage = /** @class */ (function () {
    //Injecting NavParams, ViewController and PlacesService in the constructor
    function PlacePage(navParams, viewCtrl, placesService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.placesService = placesService;
        this.place = this.navParams.get('place');
        this.index = this.navParams.get('index');
    }
    //function for leaving the placeDetailPage
    PlacePage.prototype.onLeave = function () {
        this.viewCtrl.dismiss();
    };
    //function for deleting the inspected place
    PlacePage.prototype.onDelete = function () {
        this.placesService.deletePlace(this.index);
        this.onLeave();
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({ selector: 'page-place',template:/*ion-inline-start:"/Users/Parisa/Desktop/InspectAid/src/pages/place/place.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{place.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <!--adding image to the detail page-->\n    <ion-row>\n      <ion-col text-center>\n        <img [src]=\'place.imageUrl\' />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <!--adding title to the detail page-->\n        <p>{{place.title}}</p>\n      </ion-col>\n    </ion-row>\n        <ion-row>\n          <ion-col>\n              <!--adding address to the detail page-->\n            <p>{{place.address}}</p>\n          </ion-col>\n        </ion-row>\n    <ion-row>\n      <ion-col>\n          <!--adding description to the detail page-->\n        {{place.description}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <!--button for leaving the detail page-->\n        <button ion-button block (click)="onLeave()">\n          Leave\n        </button>\n      </ion-col>\n      <ion-col>\n          <!--button for deleting the inspected place-->\n        <button ion-button color="danger" (click)="onDelete()">\n          Delete\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Parisa/Desktop/InspectAid/src/pages/place/place.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_places__["a" /* PlacesService */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/place/place.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPlacePage = /** @class */ (function () {
    //Injecting PlacesServices and Camera in the constructor
    function AddPlacePage(placesService, camera) {
        this.placesService = placesService;
        this.camera = camera;
        //variable for saving image data
        this.imageUrl = '';
    }
    //submit inspection place
    AddPlacePage.prototype.onSubmit = function (form) {
        this.placesService.addPlace(form.value.title, form.value.address, form.value.description, this.imageUrl);
        form.reset();
        this.imageUrl = '';
    };
    //function for taking photo by camera
    AddPlacePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.imageUrl = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AddPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({ selector: 'page-add-place',template:/*ion-inline-start:"/Users/Parisa/Desktop/InspectAid/src/pages/add-place/add-place.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add the place inspected</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!--form for submitting the place inspected-->\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input type="text" placeholder="Add the title here" name="title" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Address</ion-label>\n        <ion-input type="text" placeholder="Add the address here" name="address" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Brief Description</ion-label>\n        <ion-textarea name="description" ngModel required></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n      <!--taking photo using native camera-->\n        <ion-col text-center>\n          <!--custom color color for text Take a photo-->\n          <h5 class="no-item">Take a photo</h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left block outline type="button" (click)="takePhoto()">\n            <ion-icon name="camera"></ion-icon>\n            Open Camera\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <!--only show image when it is not an empty string-->\n        <ion-col *ngIf="imageUrl != \'\'">\n          <img [src]=\'imageUrl\' />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n        <!--Adding the inspected place, submit is not valid if the fields or image are empty-->\n          <button ion-button color="primary" block type="submit" [disabled]="!f.valid || imageUrl ==\'\' ">\n            Add this place\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Parisa/Desktop/InspectAid/src/pages/add-place/add-place.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_places__["a" /* PlacesService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]])
    ], AddPlacePage);
    return AddPlacePage;
}());

//# sourceMappingURL=add-place.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_place_add_place__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_places__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    //Injecting placesServices and ModalController in the constructor
    function HomePage(placesService, modalCtrl) {
        this.placesService = placesService;
        this.modalCtrl = modalCtrl;
        this.addPlaceDetailPage = __WEBPACK_IMPORTED_MODULE_1__add_place_add_place__["a" /* AddPlacePage */];
        this.places = [];
    }
    //call fetchplaces method in the placesService
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.fetchPlaces()
            .then(function (places) { return _this.places = places; });
    };
    //returns a copy of places array
    HomePage.prototype.ionViewWillEnter = function () {
        this.places = this.placesService.loadPlaces();
    };
    //create the modal for going to the place detail page
    HomePage.prototype.openPlaceDetailPage = function (place, index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__place_place__["a" /* PlacePage */], { place: place, index: index });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-home',template:/*ion-inline-start:"/Users/Parisa/Desktop/InspectAid/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <!--adding a button for navigation going from home page to place detail page-->\n      <button ion-button icon-only [navPush]="addPlaceDetailPage">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      InspectAid\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Displaying image of the inspected place with the title given to it-->\n<ion-content padding>\n  <ion-card *ngFor="let place of places; let i = index" (click)="openPlaceDetailPage(place, i)">\n    <img [src]=\'place.imageUrl\' />\n    <ion-card-content text-center>\n      <ion-card-title>\n        {{place.title}}\n      </ion-card-title>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Parisa/Desktop/InspectAid/src/pages/home/home.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_places__["a" /* PlacesService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_place_add_place__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_place_place__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_places__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_3__pages_add_place_add_place__["a" /* AddPlacePage */], __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_3__pages_add_place_add_place__["a" /* AddPlacePage */], __WEBPACK_IMPORTED_MODULE_8__pages_place_place__["a" /* PlacePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */], {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__services_places__["a" /* PlacesService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
//Defining a model for the inspection place
var Place = /** @class */ (function () {
    function Place(title, address, description, imageUrl) {
        this.title = title;
        this.address = address;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    return Place;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Parisa/Desktop/InspectAid/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Parisa/Desktop/InspectAid/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_places__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacesService = /** @class */ (function () {
    function PlacesService(storage) {
        this.storage = storage;
        //array of places
        this.places = [];
    }
    //adding an inspection place
    PlacesService.prototype.addPlace = function (title, address, description, imageUrl) {
        var _this = this;
        var place = new __WEBPACK_IMPORTED_MODULE_1__models_places__["a" /* Place */](title, address, description, imageUrl);
        this.places.push(place);
        //set key value pairs in the storage
        this.storage.set('places', this.places)
            .then()
            .catch(function (err) {
            //if there is an error, removing the last item that was added
            _this.places.splice(_this.places.indexOf(place), 1);
        });
    };
    PlacesService.prototype.loadPlaces = function () {
        return this.places.slice();
    };
    //retrieve data from storage
    PlacesService.prototype.fetchPlaces = function () {
        var _this = this;
        return this.storage.get('places')
            .then(function (places) {
            //assign a place which is not null
            return _this.places = places != null ? places : [];
        })
            .catch(function (err) { return console.log(err); });
    };
    //method for deleting the inspection place
    PlacesService.prototype.deletePlace = function (index) {
        //remove the place
        this.places.splice(index, 1);
        //updating the storage
        this.storage.set('places', this.places)
            .then()
            .catch(function (err) { return console.log(err); });
    };
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PlacesService);
    return PlacesService;
}());

//# sourceMappingURL=places.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map