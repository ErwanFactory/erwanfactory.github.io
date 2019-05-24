(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenu {\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenu\">\n    <app-biographie></app-biographie>\n    <app-projets></app-projets>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'site-cv';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _biographie_biographie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biographie/biographie.component */ "./src/app/biographie/biographie.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _projets_projets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projets/projets.component */ "./src/app/projets/projets.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _projets_projets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projets/projets.service */ "./src/app/projets/projets.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _biographie_biographie_component__WEBPACK_IMPORTED_MODULE_3__["BiographieComponent"],
                _projets_projets_component__WEBPACK_IMPORTED_MODULE_5__["ProjetsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]
            ],
            providers: [_projets_projets_service__WEBPACK_IMPORTED_MODULE_9__["ProjetsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/biographie/biographie.component.css":
/*!*****************************************************!*\
  !*** ./src/app/biographie/biographie.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nom {\r\n    font-size: 2em;\r\n}\r\n\r\n.biographie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    border-bottom: 1px solid #34495e;\r\n}\r\n\r\n.logo, .nom {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.texte-biographie {\r\n    font-style: italic;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.annonce {\r\n    font-weight: bold;\r\n    font-size: 1.1em;\r\n    margin-bottom: 0.5em;\r\n    color: #c0392b;\r\n}\r\n\r\n.liste-cv {\r\n    display: flex;\r\n    padding: 0.3em;\r\n    padding-left: 1em;\r\n    align-items: center;\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .liste-cv {\r\n        display: flex;\r\n        padding: 0.3em;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .cv {\r\n        margin-bottom: 0.3em;\r\n        margin-top: 0.3em;\r\n    }\r\n}\r\n\r\n.titre-cv {\r\n    font-weight: bold;\r\n    margin-right: 0.3em;\r\n}\r\n\r\n.cv {\r\n    border-radius: 100px;\r\n    background-color: #ecf0f1;\r\n    margin-left: 0.3em;\r\n    margin-right: 0.3em;\r\n    color: #595959;\r\n}"

/***/ }),

/***/ "./src/app/biographie/biographie.component.html":
/*!******************************************************!*\
  !*** ./src/app/biographie/biographie.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"biographie\" id=\"biographie\">\n  <div class=\"logo\"><img src=\"/assets/logo-erwan.png\" alt=\"Erwan\" height=\"60px\" width=\"60px\" /></div>\n  <div class=\"nom\">Erwan <b>AZZOUG</b></div>\n  <div class=\"texte-biographie\">\n    <div class=\"annonce\"></div>\n    Je suis donc Erwan, jeune diplômé en ingénierie informatique de l'école Polytech Nantes. Je suis intéressé par\n    le monde de l'expérience utilisateur et des interactions innovantes (Réalité virtuelle, mobile, IoT, ...). Mes \n    connaissances et ma capacité à me former facilement me permettent de m'adapter facilement aux projets qui me sont \n    proposés. Sur mon temps libre, il m'arrive de bidouiller des applications et développer des petits jeux vidéo.\n    <br/><br/>\n    Si vous souhaitez discuter, n'hésitez pas à me contacter sur les différents réseaux sociaux en bas de cette page !\n  </div>\n  <div class=\"liste-cv\">\n    <div class=\"titre-cv\">CV</div>\n    <a mat-button class=\"cv\" href=\"/assets/cv/francais/cv-erwan-azzoug.pdf\" target=\"_blank\">français</a>\n    <a mat-button class=\"cv\" href=\"/assets/cv/english/cv-erwan-azzoug-en.pdf\" target=\"_blank\">english</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/biographie/biographie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/biographie/biographie.component.ts ***!
  \****************************************************/
/*! exports provided: BiographieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographieComponent", function() { return BiographieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BiographieComponent = /** @class */ (function () {
    function BiographieComponent() {
    }
    BiographieComponent.prototype.ngOnInit = function () {
    };
    BiographieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biographie',
            template: __webpack_require__(/*! ./biographie.component.html */ "./src/app/biographie/biographie.component.html"),
            styles: [__webpack_require__(/*! ./biographie.component.css */ "./src/app/biographie/biographie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BiographieComponent);
    return BiographieComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.perso {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding: 0;\r\n    color: #3498db;\r\n}\r\n\r\n.perso a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.perso li {\r\n    margin-right: 0.5em;\r\n}\r\n\r\n.liens-utiles {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.liens-utiles a {\r\n    text-decoration: none;\r\n    margin-right: 1em;\r\n    color: #7f7f7f;\r\n    display: block;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.liens-utiles a:hover {\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .footer {\r\n        width: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    .liens-utiles {\r\n        text-align: center;\r\n    }\r\n\r\n    .perso {\r\n        justify-content: center;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <ul class=\"perso\">\n        <li>#cinephile</li>\n        <li>#jeuxvideo</li>\n        <li>#gamedev</li>\n        <li>#nouvellestechnologies</li>\n        <li>#opensource</li>\n        <li>#urbex</li>\n        <li>#theatre</li>\n        <li>#improvisation</li>\n    </ul>\n    <ul class=\"liens-utiles\" id=\"liens-utiles\">\n        <li>\n            <a href=\"mailto:azzerwa@gmail.com\" target=\"_blank\">\n                azzerwa@gmail.com\n            </a>\n        </li>\n        <li>\n            <a href=\"https://www.linkedin.com/in/erwan-azzoug/\" target=\"_blank\">\n                LinkedIn\n            </a>\n        </li>\n        <li>\n            <a href=\"https://github.com/ErwanFactory\" target=\"_blank\">\n                Github\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/projets/projets.component.css":
/*!***********************************************!*\
  !*** ./src/app/projets/projets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projets {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.liste-projets, .liste-experiences {\r\n    margin-top: 1em;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.projet {\r\n    max-width: 300px;\r\n    margin: 1em;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.intitule {\r\n    text-overflow: ellipsis;\r\n    font-weight: bold;\r\n}\r\n\r\n.technologies {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.liste-liens {\r\n    display: flex;\r\n    padding: 0.3em;\r\n    padding-left: 1em;\r\n}\r\n\r\n.lien {\r\n    border-radius: 100px;\r\n    background-color: #ecf0f1;\r\n    margin-left: 0.3em;\r\n    margin-right: 0.3em;\r\n    color: #595959;\r\n}\r\n\r\n@media (max-width:1200px) {\r\n    .projets {\r\n        width : 100%;\r\n    }\r\n\r\n    .liste-experiences, .liste-projets {\r\n        justify-content: center;\r\n    }\r\n\r\n    h3 {\r\n        text-align: center;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/projets/projets.component.html":
/*!************************************************!*\
  !*** ./src/app/projets/projets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projets\">\n  <h3>Expériences</h3>\n  <div class=\"liste-experiences\">\n    <mat-card class=\"projet\" *ngFor=\"let experience of experiences\">\n      <mat-card-header>\n        <mat-card-title class=\"intitule\">{{ experience.intitule }}</mat-card-title>\n        <mat-card-subtitle> {{ experience.contexte }} </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <b>{{ experience.date }}</b>\n        <p class=\"description\">{{ experience.description }}</p>\n        <div class=\"technologies\">\n          -&nbsp;\n          <nav class=\"technologie\" *ngFor=\"let technologie of experience.technologies\">\n            {{ technologie }} -&nbsp;\n          </nav>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <div class=\"liste-liens\">\n          <a mat-button *ngFor=\"let lien of experience.liens\" class=\"lien\" href=\"{{ lien.url }}\" target=\"_blank\">\n            {{ lien.libelle }}</a>\n        </div>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  <h3>Projets</h3>\n  <div class=\"liste-projets\">\n    <mat-card class=\"projet\" *ngFor=\"let projet of projets\">\n      <mat-card-header>\n        <mat-card-title class=\"intitule\">{{ projet.intitule }}</mat-card-title>\n        <mat-card-subtitle> {{ projet.contexte }} </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <b>{{ projet.date }}</b>\n        <p class=\"description\">{{ projet.description }}</p>\n        <div class=\"technologies\">\n            -&nbsp;\n            <nav class=\"technologie\" *ngFor=\"let technologie of projet.technologies\">\n            {{ technologie }} -&nbsp;\n          </nav>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <div class=\"liste-liens\">\n          <a mat-button *ngFor=\"let lien of projet.liens\" class=\"lien\" href=\"{{ lien.url }}\" target=\"_blank\">\n            {{ lien.libelle }}</a>\n        </div>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projets/projets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/projets/projets.component.ts ***!
  \**********************************************/
/*! exports provided: ProjetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsComponent", function() { return ProjetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projets.service */ "./src/app/projets/projets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjetsComponent = /** @class */ (function () {
    function ProjetsComponent(projetsService) {
        this.projetsService = projetsService;
    }
    ProjetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projetsService.getProjets().subscribe(function (data) {
            _this.projets = data;
        });
        this.projetsService.getExperiences().subscribe(function (data) {
            _this.experiences = data;
        });
    };
    ProjetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projets',
            template: __webpack_require__(/*! ./projets.component.html */ "./src/app/projets/projets.component.html"),
            styles: [__webpack_require__(/*! ./projets.component.css */ "./src/app/projets/projets.component.css")]
        }),
        __metadata("design:paramtypes", [_projets_service__WEBPACK_IMPORTED_MODULE_1__["ProjetsService"]])
    ], ProjetsComponent);
    return ProjetsComponent;
}());



/***/ }),

/***/ "./src/app/projets/projets.service.ts":
/*!********************************************!*\
  !*** ./src/app/projets/projets.service.ts ***!
  \********************************************/
/*! exports provided: ProjetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsService", function() { return ProjetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjetsService = /** @class */ (function () {
    function ProjetsService(http) {
        this.http = http;
    }
    ProjetsService.prototype.getProjets = function () {
        return this.http.get('assets/donnees/projets.json');
    };
    ProjetsService.prototype.getExperiences = function () {
        return this.http.get('assets/donnees/experiences.json');
    };
    ProjetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjetsService);
    return ProjetsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\erwaz\Documents\a-documents\projets\developpements\site-cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map