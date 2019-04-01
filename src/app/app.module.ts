/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
//import { CarsComponent } from './cars/cars.component';
//import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { BackgroundDirective } from "./directives/background.directive";
import { MyDirectiveDirective } from './directives/my-directive.directive';
import {PowPipe} from "./pow.pipe";
import { MyPipePipe } from './my-pipe.pipe';
import { CarFilterPipe } from './car-filter.pipe';
//import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    //CarsComponent,
    //CarComponent,
    //AddCarComponent,
     // BackgroundDirective,
   // MyDirectiveDirective
      PowPipe,
    MyPipePipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
----------------------------------------------------------------------------------------*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { CarComponent } from './car/car.component';
//import { AddCarComponent } from './add-car/add-car.component';
//import {CarsService} from "./cars.service";
//import {ConsoleService} from "./console.service";
//import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
//import {CarsjService} from "./carsj.service";
//import { Subscription } from 'rxjs';
//import { RequestOptions, ResponseContentType } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarsService } from './cars.service';
import {AppRoutingModule} from "./app-routing.module";
import { AboutCarComponent } from './about-car/about-car.component';
//import {Routes, RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CarsPageComponent,
        AboutCarComponent
       // CarComponent,
        //AddCarComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        //HttpModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
        //Subscription
    ],
    providers: [
        CarsService,
         //ConsoleService


    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
