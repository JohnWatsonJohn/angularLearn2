/*import {ConsoleService} from "./console.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CarsService {
    constructor(private consoleService: ConsoleService){}

    cars = [
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
    ];

    addCarL(name: string) {
        this.cars.push({
            name: name,
            isSold: false
        });
        this.consoleService.log(`Машина ${name} была добавлена`)
    }
}
--------------------------------------------------------------------------------*/



import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
    cars = [
        {
            name: 'Ford',
            id: 1,
            year: 2017,
            color: 'red'
        },
        {
            name: 'Audi',
            id: 2,
            year: 2010,
            color: 'blue'
        },
        {
            name: 'BMW',
            id: 3,
            year: 2000,
            color: 'pink'
        },
        {
            name: 'Mercedes',
            id: 4,
            year: 2015,
            color: 'orange'
        }
    ]
}