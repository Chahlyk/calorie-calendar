import { Component, OnInit} from '@angular/core';
import { IMeal, ISettings } from "../interfaces";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public sunMeal: IMeal = JSON.parse(<string>localStorage.getItem('sunMeal'));
  public monMeal: IMeal = JSON.parse(<string>localStorage.getItem('monMeal'));
  public tueMeal: IMeal = JSON.parse(<string>localStorage.getItem('tueMeal'));
  public wedMeal: IMeal = JSON.parse(<string>localStorage.getItem('wedMeal'));
  public thuMeal: IMeal = JSON.parse(<string>localStorage.getItem('thuMeal'));
  public friMeal: IMeal = JSON.parse(<string>localStorage.getItem('friMeal'));
  public sutMeal: IMeal = JSON.parse(<string>localStorage.getItem('sutMeal'));

  public sum: any = 1310;
  public week: Array<Date> = [];
  public hours: Array<string> = ['eN', 'nT', 'tE', 'eT', 'tT', 'tF', 'fF', 'fS', 'sS', 'sE', 'eN'];
  public time: Array<string> = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',]
  public color: string = '';
  public today: Date = new Date();
  private monday: Date = new Date();
  private date: Date = new Date();
  private days!: Date;
  private daysInMs!: number;
  private daysPerWeek: number = 0;
  private idxOfMon: number = 1;
  private delta: number = this.idxOfMon - this.date.getDay();


  constructor() { }

  ngOnInit(): void {
    this.dateArray();
    this.changeColor();
    console.log(localStorage);
  }

  private dateArray(): void {
    if (this.delta != 0) {this.monday.setDate(this.date.getDate() + this.delta)}
    else {this.monday.setDate(this.date.getDate() + this.delta)}
    for( let i = 0; i < 7; i++) {
      this.daysPerWeek = i;
      this.daysInMs = this.date.setTime(this.monday.getTime() + (this.daysPerWeek * 24 * 60 * 60 * 1000));
      this.days = new Date(this.daysInMs);
      this.week.push(this.days);
    }
  }

  private changeColor() {
    if (this.settingsData != undefined) {
      if (this.sum > this.settingsData.maxKcal) {
        this.color = '#F47981';
      } else if (this.sum < this.settingsData.minKcal) {
        this.color = '#F5D45E';
      } else {
        this.color = '#799CF4';
      }
    } else {
      this.sum = '';
    }

  }

}
