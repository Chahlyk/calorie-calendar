import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(days: { title: string; time: string }[], time: string, idx: number): boolean {
    return days.some((day) => {
      if (day.time.slice(0, 2) === time.slice(0, 2)) {
        return true;
      } else {
        return false;
      }
    });
  }

}
