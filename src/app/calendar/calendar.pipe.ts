import { Pipe, PipeTransform } from '@angular/core';
import { IMeal } from "../interfaces";

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  public meal!: boolean;

  transform(days: Array<IMeal>, hours: string): any {
    days.forEach(item => {
      if (item.time.slice(0, 2) === hours.slice(0, 2)) {
        this.meal = true;
      }
    })
    return this.meal;
  }

}
