/*import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    //carName = '';
    //carYear = 2017;
    @Output() onAddCar = new EventEmitter<{name: string, year: number}>();
    @ViewChild('carYearInput') carYearInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
    addCar(carNameEl: HTMLInputElement) {

        //console.log(this.carYearInput)
        this.onAddCar.emit({
            name: carNameEl.value,
            year: +this.carYearInput.nativeElement.value
        })
        carNameEl.value = '';
        this.carYearInput.nativeElement.value = 2017;
    }


}
---------------------------------------------------------------------------*/


import { Component,
   // EventEmitter, Output
} from '@angular/core';
import {CarsService} from "../cars.service";

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css'],
   // providers: [ CarsService ]
})
export class AddCarComponent{

    //@Output() onCarAdd = new EventEmitter<String>();
    carName = '';

    constructor(private service: CarsService){}

    addCarL() {
        //debugger;
        this.service.addCarL(this.carName);
        this.carName = '';
    }

}
