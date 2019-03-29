import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs';
import { of } from 'rxjs';
import {Observable} from 'rxjs';


@Pipe({
  name: 'carFilter',
    pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string) {

      console.log('filter pipe started');

    if (carList.length===0 || searchStr==='') {
      return carList;
    }
   return carList.filter(car=>car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)
  }

}
