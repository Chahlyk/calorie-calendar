import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public sum: number = 1610;
  public week: any = [];
  public daysPerWeek: number = 0;
  public firstDay: Date = new Date();
  public daysInMs!: number;
  public days!: any;
  public date: Date = new Date();
  public today: Date = new Date();
  public idxOfMon: number = 1;
  public delta: number = this.idxOfMon - this.date.getDay();

  constructor() { }

  ngOnInit(): void {
    this.dateArray();
  }

  public dateArray(): any {
    if (this.delta != 0) {this.firstDay.setDate(this.date.getDate() + this.delta)}
    else {this.firstDay.setDate(this.date.getDate() + 7 + this.delta)}
    for( let i = 0; i < 7; i++) {
      this.daysPerWeek = i;
      this.daysInMs = this.date.setTime(this.firstDay.getTime() + (this.daysPerWeek * 24 * 60 * 60 * 1000));
      this.days = new Date(this.daysInMs);
      this.week.push(this.days);
    }
  }

}
