/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
/*export class AppComponent {
  title = 'angular4-theory';
}*/

/*export class AppComponent {
    headerText = 'Создание своей директивы';
    items = [1,2,3,4,5];
    current = 1;

    onClick(number: number) {
        this.current=number;
    }
}*/

//--------------------------------------пайпы-------------------------------------------

/*import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="col-xs-8 col-xs-offset-2">
        <!--<h2>{{name}}</h2>
        <h2>{{name | lowercase }}</h2>
        <h2>{{name | uppercase }}</h2>
        <h2>{{name | slice:0:3 }}</h2>
        <h2>{{name | slice:3:name.length | uppercase }}</h2>
        <hr>
        <h2>{{pi}}</h2>
        <h2>{{pi | number}}</h2>
        <h2>{{pi | number: '1.3-4'}}</h2>
        <h2>{{pi | number: '2.2-2'}}</h2>
        <hr>
        <h2>{{money | currency: 'USD':true}}</h2>
        <hr>
        <h2>{{date}}</h2>
        <h2>{{date | date}}</h2>
        <h2>{{date | date: 'fullDate'}}</h2>
        <h2>{{date | date: 'shortDate'}}</h2>
        <hr>
        <h2>{{amount}}</h2>
        <h2>{{amount | percent}}</h2>
        <hr>
        <h2>{{object}}</h2>
        <h2><pre>{{object | json}}</pre></h2>
----------------------------------------------------------------------------
        <h2>{{num}}</h2>
        <h2>{{num | appPow:12:'='}}</h2>
            </div>`})
 ================================================================================================-->


/*export class AppComponent {
    /*name = 'WebForMyself';
    pi = Math.PI;
    money = 350;
    date = new Date();
    amount = 0.45;
    object = {
        foo: 'bar',
        baz: 'qux',
        nested:
            {
                xyz: 3,
                numbers: [1, 2, 3]
            }
    };

    //num = 4;
}*/

//================================================================================================
/*import { Component } from '@angular/core';
import "rxjs";
import {Observable, of} from 'rxjs';*/
/*@Component({
    selector: 'app-root',
    template: `<div class="col-xs-8 col-xs-offset-2">
        <h1>{{ asyncTitle | async }}</h1>
        <input type="text" class="form-control" [(ngModel)]="searchCar">
        <button class="btn btn-primary" (click)="addCar()">Добавить</button>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar; let i = index" >
                <b>{{i+1+'. '}}</b>{{car.name}}<i>{{"  "+car.descr}}</i>
            </li>
        </ul>
</div>`})


export class AppComponent {
    searchCar = '';
    cars = [
        {name: 'Ford', descr: 'WFM 1'},
        {name: 'Mazda', descr: 'WFM 2'},
        {name: 'Bently', descr: 'WFM 3'},
        {name: 'Audi', descr: 'WFM 4'},
        {name: 'Mercedes', descr: 'WFM 5'},
        {name: 'BWM', descr: 'WFM 6'}
    ];


    asyncTitle = of('Async title 3seconds');


    addCar() {
        this.cars.push({
            name: 'new car',
            descr: 'wfm'

        })
    }

}
------------------------------------------------------------------------------------------------------------*/




/*import {Component, OnInit} from '@angular/core';
import { CarsService } from "./cars.service";
import { ConsoleService } from "./console.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    //providers: [ CarsService ]
})*/
/*export class AppComponent implements OnInit{*/
    /*cars = [
        {
            name: 'Ford',
            isSold: false
        },
        {
            name: 'Mazda',
            isSold: true
        },
        {
            name: 'Mercedes',
            isSold: false
        }
    ];*/

/*    cars=[];
    constructor(private service: CarsService){}

    ngOnInit() {
        this.cars=this.service.cars
    }

}
---------------------------------------------------------------------------------------------*/



/*import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {

    @ViewChild("form") form: NgForm;

    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    defaultAnswer="no";
    defaultCountry="ru";

    formData = {};
    isSubmited = false;

    addRandEmail(){
        const randEmail = "wfm@gmail.com";
        this.form.form.patchValue({
                user: {email: randEmail}
        });
    }


    submitForm(){
        this.isSubmited=true;
        this.formData=this.form.value;
        this.form.reset()
       // console.log("submited!", this.form)
    }
}
--------------------------------------------------------------------------------------------------*/





/*import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {reject} from "q";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    charsCount=5;

    form: FormGroup;

    ngOnInit() {

        this.form=new FormGroup({
            user: new FormGroup({
                email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
                pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
            }),
            country: new FormControl('ru'),
            answer: new FormControl('no'),
        });
    }

    onSubmit() {
        console.log('submited!', this.form)
    }

    checkForLength(control: FormControl){

        if(control.value.length <= this.charsCount ){
            return {
                'lengthError': true
            };
        }
        return null;
    }

    checkForEmail(control: FormControl): Promise<any>{

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{if(control.value==='test@mail.ru'){
                resolve ({
                    'emailIsUsed': true
                })
             } else {
                resolve(null)
            }

            }, 3000);
        });
    }
}
--------------------------------------------------------------------------------------------*/

/*
import {Component, OnInit} from '@angular/core';
import {CarsjService} from "./carsj.service";
//import { MapOperator } from "rxjs/internal/operators/map";
//import { Observable, of } from 'rxjs';
//import { Subscription } from 'rxjs';
//import { Response } from  "selenium-webdriver/http";
//import { HttpResponse } from "@angular/common/http";

interface Cars {

    name: string;
    color: string;
    id: number;
    
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    colors = [
        'red',
        'blue',
        'green',
        'pink',
        'yellow',
        'grey'
    ]
    cars: Cars[] = [];
    carName: string = '';
    appTitle;
    //public appTitle$: Observable<string>;
    constructor(private carsjService: CarsjService){}


    ngOnInit(){

        //this.appTitle = this.carsjService.getAppTitle();
        this.carsjService.getAppTitle().subscribe((title:string)=>  this.appTitle = title );

    }

    loadCars(){

        return this.carsjService
            .getCars()
            .subscribe((cars: Cars[])=>{
            this.cars = cars;
        },
                (error)=>{
                    alert(error)
                }
        ) ;
    }

    adddCar() {
        this.carsjService.adddCar(this.carName)
            .subscribe((car: Cars)=>{
                this.cars.push(car);
            })
        this.carName='';
    }

    getRandColor(){
        const  num = Math.round(Math.random()* (this.colors.length-1))
        return this.colors[num];
    }

    setNewColor(car: Cars) {

        this.carsjService.changeColor(car, this.getRandColor())
            .subscribe((dt)=>{console.log(dt)})
    }

    deleteCar(car: Cars){

        this.carsjService.deleteCar(car)
            .subscribe((dt)=>{
                this.cars=this.cars.filter(c=>c.id !== car.id);
            })
    }


}
-------------------------------------------------------------------------------------------------*/



import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

}