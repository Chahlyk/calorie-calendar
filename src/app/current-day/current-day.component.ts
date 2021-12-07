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

  public currentDay!: any;

  constructor(private subjectService: SubjectsService) { }

  ngOnInit(): void {
    this.getDay();
  }

  private getDay(): void {
    this.subjectService.get().subscribe((day) => {
      this.currentDay = day.data;
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

}
