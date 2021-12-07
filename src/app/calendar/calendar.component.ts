import { Component, OnInit } from '@angular/core';
import { ISettings } from "../interfaces";
import { SubjectsService } from "../subjects.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public hours: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public sum: any = 0;
  public week: Array<Date> = [];
  public time: Array<string> = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',]
  public color: string = '';
  public today: Date = new Date();

  private sunMeal: Array<object> = JSON.parse(<string>localStorage.getItem('sunMeal'));
  private monMeal: Array<object> = JSON.parse(<string>localStorage.getItem('monMeal'));
  private tueMeal: Array<object> = JSON.parse(<string>localStorage.getItem('tueMeal'));
  private wedMeal: Array<object> = JSON.parse(<string>localStorage.getItem('wedMeal'));
  private thuMeal: Array<object> = JSON.parse(<string>localStorage.getItem('thuMeal'));
  private friMeal: Array<object> = JSON.parse(<string>localStorage.getItem('friMeal'));
  private sutMeal: Array<object> = JSON.parse(<string>localStorage.getItem('sutMeal'));
  public data: Array<any> = [this.monMeal, this.tueMeal, this.wedMeal, this.thuMeal, this.friMeal, this.sutMeal, this.sunMeal];
  private monday: Date = new Date();
  private date: Date = new Date();
  private days!: Date;
  private daysInMs!: number;
  private daysPerWeek: number = 0;
  private idxOfMon: number = 1;
  private delta: number = this.idxOfMon - this.date.getDay();

  constructor(private subjectService: SubjectsService) {
  }

  ngOnInit(): void {
    this.dateArray();
    this.changeColor();
  }

  public sendMeal(obj: object): void {
    let data = this;
    data.subjectService.send(obj);
  }

  public sendDay(obj: object): void {
    let data = this;
    data.subjectService.send(obj);
  }

  private dateArray(): void {
    if (this.delta != 0) {this.monday.setDate(this.date.getDate() + this.delta)}
    else {this.monday.setDate(this.date.getDate() + this.delta)}
    for( let i = 0; i < 7; i++) {
      if (this.data[i] != undefined) {
        for(let r of this.data[i]) {
          this.sum += +r.kcal;
        }
      }
      this.daysPerWeek = i;
      this.daysInMs = this.date.setTime(this.monday.getTime() + (this.daysPerWeek * 24 * 60 * 60 * 1000));
      this.days = new Date(this.daysInMs);
      this.week.push(this.days);
    }
  }

  private changeColor(): void {
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
