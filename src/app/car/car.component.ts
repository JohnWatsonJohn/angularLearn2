/*import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked, AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges, OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';*/

/*@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy{

  //carName = "Ford";
  //carYear = 2015;
  @Input() carItem : {name: string, year: number};
  @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;
   /* ngAfterContentInit () {
        console.log(this.carHeading)
    }*/

  /*getName() {
    return this.carName
  }*/

  /*constructor(){
    console.log('constructor');
  }

    ngOnInit(){
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('ngOnChanges', changes);
    }

    ngDoCheck() {
      console.log('ngDoCheck');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }

}
--------------------------------------------------------------------------------------------------*/
/*
import { Component, Input } from '@angular/core';
import { ConsoleService } from "../console.service";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
   // providers: [ ConsoleService ]
})
export class CarComponent {

    @Input() car;
    constructor(private consServ: ConsoleService) {}


    getClass() {
        return {
            'list-group-item-success': !this.car.isSold,
            'list-group-item-danger': this.car.isSold,
            'list-group-item': true
        }
    }

    onAction(type: string) {
        this.car.isSold = type === 'buy' ? true : false;
        //const service = new ConsoleService();
        //service.log(`${this.car.name} status = ${type}`)
        this.consServ.log(`${this.car.name} status = ${type}`);
    }

}*/
