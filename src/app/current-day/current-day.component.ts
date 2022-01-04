import { Component, OnInit } from '@angular/core';
import { ISettings } from "../interfaces";
import { SubjectsService } from "../subjects.service";

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {
  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public kcal: number = 0;
  public fats: number = 0;
  public proteins: number = 0;
  public carb: number = 0;
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
      this.currentDay = day.data.value;
      this.date = day.data.day;
      if (this.currentDay != undefined || null) {
        for ( let meal of this.currentDay ) {
          this.kcal += +meal.kcal;
          this.fats += +meal.fats;
          this.proteins += +meal.proteins;
          this.carb += +meal.carb;
        }
      }
    });
  }

  private colorCheck(param: any, setting: any): string {
    let color!: string;
    if ( param > setting ) {
      color = '#F47981';
      return color;
    } else if ( param < setting ) {
      color = '#F5D45E';
      return color;
    } else {
      color = '#799CF4';
      return color;
    }
  }

  private changeColor(): void {
    if ( this.settingsData ) {
      this.colorFats = this.colorCheck(this.fats, this.settingsData.fats);
      this.colorProteins = this.colorCheck(this.proteins, this.settingsData.proteins);
      this.colorCarb = this.colorCheck(this.carb, this.settingsData.carb);
      if ( this.kcal > this.settingsData.maxKcal ) {
        this.colorKcal = '#F47981';
      } else if ( this.kcal < this.settingsData.minKcal ) {
        this.colorKcal = '#F5D45E';
      } else {
        this.colorKcal = '#799CF4';
      }
    }
  }
}
