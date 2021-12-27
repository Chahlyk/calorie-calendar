import { Pipe, PipeTransform } from '@angular/core';
import { IMeal } from "../interfaces";

@Pipe({
  name: 'secondCalendar'
})
export class SecondCalendarPipe implements PipeTransform {

  public meal!: object;

  transform(days: Array<IMeal>, hours: string): any {
    days.forEach(item => {
      if (item.time.slice(0, 2) === hours.slice(0, 2)) {
        this.meal = item
      }
    })
    return this.meal;
  }

}
