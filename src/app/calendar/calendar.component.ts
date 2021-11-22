import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public date: number = new Date().getDate();
  public dates: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.dateArray();
  }

  public dateArray(): any {
    for (let i = 0; i < 7; i++ ) {
      this.dates.push(this.date + i)
    }

  }

}
