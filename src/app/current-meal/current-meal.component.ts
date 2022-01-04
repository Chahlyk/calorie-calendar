import { Component, OnInit } from '@angular/core';
import { IMeal } from "../interfaces";
import { SubjectsService } from "../subjects.service";

@Component({
  selector: 'app-current-meal',
  templateUrl: './current-meal.component.html',
  styleUrls: ['./current-meal.component.css']
})
export class CurrentMealComponent implements OnInit {

  public currentMeal!: IMeal;

  constructor(private subjectService: SubjectsService) {}

  ngOnInit(): void {
    this.getMeal();
  }

  private getMeal(): void {
    this.subjectService.getMeal()
      // .pipe() unsibscribe
      .subscribe((meal) => {
      this.currentMeal = meal.data;
    })
  }

}
