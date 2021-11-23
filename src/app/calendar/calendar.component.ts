import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public week: Array<number> = [];
  public daysPerWeek: number = 0;
  public firstDay: Date = new Date();
  public daysInMs!: number;
  public days!: number;
  public date: Date = new Date;

  constructor() { }

  ngOnInit(): void {
    this.dateArray();
  }

  public dateArray(): any {
    for( let i = 0; i < 7; i++) {
      this.daysPerWeek = i;
      this.daysInMs = this.date.setTime(this.firstDay.getTime() + (this.daysPerWeek * 24 * 60 * 60 * 1000));
      this.days = new Date(this.daysInMs).getDate();
      this.week.push(this.days);
    }
  }

}
