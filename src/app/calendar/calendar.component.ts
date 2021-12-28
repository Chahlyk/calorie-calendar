import { Component, OnInit } from '@angular/core';
import { IMeal, ISettings } from "../interfaces";
import { SubjectsService } from "../subjects.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public data!: Array<any>;
  public monKcal: number = 0;
  public tueKcal: number = 0;
  public wedKcal: number = 0;
  public thuKcal: number = 0;
  public friKcal: number = 0;
  public sutKcal: number = 0;
  public sunKcal: number = 0;
  public sumKcal: Array<any> = [];
  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public rows: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public week: Array<Date> = [];
  public hours: Array<string> = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',]
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
  private monday: Date = new Date();
  private date: Date = new Date();
  private days!: Date;
  private daysInMs!: number;
  private daysPerWeek: number = 0;
  private idxOfMon: number = 1;
  private delta: number = this.idxOfMon - this.date.getDay();

  constructor(private subjectService: SubjectsService) {}

  ngOnInit(): void {
    this.data = [this.monMeal, this.tueMeal, this.wedMeal, this.thuMeal, this.friMeal, this.sutMeal, this.sunMeal];
    this.dateArray();
    this.getSum();
    this.storageClear();
  }

  public sendMeal(obj: Array<IMeal>, hour: string): void {
    let data = this;
    obj.forEach(item => {
      if (item.time.slice(0, 2) === hour.slice(0, 2)) {
        data.subjectService.sendMeal(item);
      }
    })
  }

  public sendDay(obj: object, d: Date): void {
    let data = this;
    data.subjectService.sendDay({obj, d});
  }

  public changeColor(item: any): string {
    if (this.settingsData != undefined) {
      switch (true) {
        case (item > this.settingsData.maxKcal):
          this.color = '#F47981';
          break;
        case (item < this.settingsData.minKcal && item != 0):
          this.color = '#F5D45E';
          break;
        case (item === 0):
          this.color = '#ffffff';
          break;
        default:
          this.color = '#799CF4';
      }
    }
    return this.color;
  }

  private getSum(): void {
    if (this.monMeal != undefined) {
      for (let meal of this.monMeal) {
        this.monKcal += +meal.kcal;
      }
    }
    if (this.tueMeal != undefined) {
      for (let meal of this.tueMeal) {
        this.tueKcal += +meal.kcal;
      }
    }
    if (this.wedMeal != undefined) {
      for (let meal of this.wedMeal) {
        this.wedKcal += +meal.kcal;
      }
    }
    if (this.thuMeal != undefined) {
      for (let meal of this.thuMeal) {
        this.thuKcal += +meal.kcal;
      }
    }
    if (this.friMeal != undefined) {
      for (let meal of this.friMeal) {
        this.friKcal += +meal.kcal;
      }
    }
    if (this.sutMeal != undefined) {
      for (let meal of this.sutMeal) {
        this.sutKcal += +meal.kcal;
      }
    }
    if (this.sunMeal != undefined) {
      for (let meal of this.sunMeal) {
        this.sunKcal += +meal.kcal;
      }
    }
    this.sumKcal.push(this.monKcal, this.tueKcal, this.wedKcal, this.thuKcal, this.friKcal, this.sutKcal, this.sunKcal);
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

  private storageClear(): void {
    if (this.tueMeal != null && this.today.getDay() === 1) {
      localStorage.removeItem('sunMeal');
      localStorage.removeItem('monMeal');
      localStorage.removeItem('tueMeal');
      localStorage.removeItem('wedMeal');
      localStorage.removeItem('thuMeal');
      localStorage.removeItem('friMeal');
      localStorage.removeItem('sutMeal');
    }
  }
}
