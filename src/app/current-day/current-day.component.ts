import { Component, Input, OnInit } from '@angular/core';
import { ISettings } from "../interfaces";
import { SubjectsService } from "../subjects.service";

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {
  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public kcal: any = 0;
  public fats: any = 0;
  public proteins: any = 0;
  public carb: any = 0;
  public colorKcal: string = '';
  public colorFats: string = '';
  public colorProteins: string = '';
  public colorCarb: string = '';

  public currentDay!: any;
  public date!: Date;
  public today: Date = new Date();

  constructor(private subjectService: SubjectsService) { }

  ngOnInit(): void {
    this.getDay();
    this.changeColor();
  }

  private getDay(): void {
    this.subjectService.getDay().subscribe((day) => {
      this.currentDay = day.data.obj;
      this.date = day.data.d;
      if (this.currentDay != undefined || null) {
        for ( let meal of this.currentDay ) {
          this.kcal += +meal.kcal;
          this.fats += +meal.fats;
          this.proteins += +meal.proteins;
          this.carb += +meal.carb;
        }
      }
    })
  }

  private changeColor(): void {
    if ( this.settingsData != undefined ) {
      if ( this.kcal > this.settingsData.maxKcal ) {
        this.colorKcal = '#F47981';
      } else if ( this.kcal < this.settingsData.minKcal ) {
        this.colorKcal = '#F5D45E';
      } else {
        this.colorKcal = '#799CF4';
      }
      if ( this.fats > this.settingsData.fats ) {
        this.colorFats = '#F47981';
      } else if ( this.fats < this.settingsData.fats ) {
        this.colorFats = '#F5D45E';
      } else {
        this.colorFats = '#799CF4';
      }
      if ( this.proteins > this.settingsData.proteins ) {
        this.colorProteins = '#F47981';
      } else if ( this.proteins < this.settingsData.proteins ) {
        this.colorProteins = '#F5D45E';
      } else {
        this.colorProteins = '#799CF4';
      }
      if ( this.carb > this.settingsData.carb ) {
        this.colorCarb = '#F47981';
      } else if ( this.carb < this.settingsData.carb ) {
        this.colorCarb = '#F5D45E';
      } else {
        this.colorCarb = '#799CF4';
      }
    } else {
      this.kcal = '';
      this.fats = '';
      this.proteins = '';
      this.carb = '';
    }
  }
}
