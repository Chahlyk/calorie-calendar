import { Pipe, PipeTransform } from '@angular/core';
import { IMeal } from "../interfaces";

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(days: Array<IMeal>, hours: string): any {
    return days.forEach(item => {
      if (days != undefined) {
        item.time.slice(0, 2) === hours.slice(0, 2);
      }
    })
  }

}
