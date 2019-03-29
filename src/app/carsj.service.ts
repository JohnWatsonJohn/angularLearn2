import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import {delay, map, tap} from "rxjs/operators";
import {Observable, pipe} from "rxjs";
import { catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

//import { Http } from "@angular/common/http";


@Injectable()
export class CarsjService {

    constructor(private http: HttpClient) {}


    getAppTitle() {

        return this.http.get('http://localhost:3000/title')
           // .pipe(map((response:Response)=>response.json()))
            .pipe(delay(3000))
            .pipe(map((dt)=>dt.value))
            //.pipe(tap(dt.value)=>console.log(dt.value))
    }

    getCars(){
        const headers = new HttpHeaders({
            'Content-type': 'application/json; charset=utf8'
        })
        return this.http.get('http://localhost:3000/cars', {headers: headers})
            .pipe(catchError((error: Response)=> {
                return throwError('Сервер не доступен! Попробуйте позже')
            }))
            //.pipe(map((response: Response)=> response.json()))


    }

    adddCar(carName: string) {
        const dt = {
            name: carName,
            color: 'blue'
        }
        return this.http.post('http://localhost:3000/cars', dt)
    }

    changeColor(car: any, color: string) {

        car.color = color;

       return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
    }


    deleteCar(car: any) {

        return this.http.delete(`http://localhost:3000/cars/${car.id}`)

    }
}