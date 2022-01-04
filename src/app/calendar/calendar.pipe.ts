import { Pipe, PipeTransform } from '@angular/core';
import { IMeal } from "../interfaces";

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  public meal!: boolean | object;

  transform(days: Array<IMeal>, hours: string, param: string): any {
    days.forEach(item => {
      if (item.time.slice(0, 2) === hours.slice(0, 2)) {
        param === 'object' ? this.meal = item : this.meal = true;
      }
    })
    return this.meal;
  }

}
