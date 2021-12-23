import { Component, OnInit } from '@angular/core';
import { IMeal, ISettings } from "../interfaces";
import { SubjectsService } from "../subjects.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public one: number = 0;
  public two: number = 0;
  public three: number = 0;
  public four: number = 0;
  public five: number = 0;
  public six: number = 0;
  public seven: number = 0;

  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public hours: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public sum: Array<any> = [];
  public week: Array<Date> = [];
  public time: Array<string> = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',]
  public color: string = '';
  public today: Date = new Date();
  public idx: number = 1;


  private sunMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('sunMeal')) || [];
  private monMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('monMeal')) || [];
  private tueMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('tueMeal')) || [];
  private wedMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('wedMeal')) || [];
  private thuMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('thuMeal')) || [];
  private friMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('friMeal')) || [];
  private sutMeal: Array<IMeal> = JSON.parse(<string>localStorage.getItem('sutMeal')) || [];

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
    this.getSum();
  }

  public sendMeal(obj: object): void {
    let data = this;
    data.subjectService.sendMeal(obj);
  }

  public sendDay(obj: object, d: Date): void {
    let data = this;
    data.subjectService.sendDay({obj, d});
  }

  public getSum() {
    if (this.monMeal != undefined) {
      for (let meal of this.monMeal) {
        this.one += +meal.kcal;
      }
    }
    if (this.tueMeal != undefined) {
      for (let meal of this.tueMeal) {
        this.two += +meal.kcal;
      }
    }
    if (this.wedMeal != undefined) {
      for (let meal of this.wedMeal) {
        this.three += +meal.kcal;
      }
    }
    if (this.thuMeal != undefined) {
      for (let meal of this.thuMeal) {
        this.four += +meal.kcal;
      }
    }
    if (this.friMeal != undefined) {
      for (let meal of this.friMeal) {
        this.five += +meal.kcal;
      }
    }
    if (this.sutMeal != undefined) {
      for (let meal of this.sutMeal) {
        this.six += +meal.kcal;
      }
    }
    if (this.sunMeal != undefined) {
      for (let meal of this.sunMeal) {
        this.seven += +meal.kcal;
      }
    }
    this.sum.push(this.one, this.two, this.three, this.four, this.five, this.six, this.seven);
  }

  public changeColor(item: any): any {
    if (this.settingsData != undefined) {
      if (item > this.settingsData.maxKcal) {
        this.color = '#F47981';
      } else if (item < this.settingsData.minKcal && item != 0) {
        this.color = '#F5D45E';
      } else if (item === 0) {
        this.color = '#ffffff';
      } else {
        this.color = '#799CF4';
      }
    }
    return this.color;
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
}
