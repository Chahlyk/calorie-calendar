import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMeal } from "../interfaces";
import { SubjectsService } from "../subjects.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-current-meal',
  templateUrl: './current-meal.component.html',
  styleUrls: ['./current-meal.component.css']
})
export class CurrentMealComponent implements OnInit, OnDestroy{

  public currentMeal!: IMeal;
  private sub: Subscription = new Subscription();

  constructor(private subjectService: SubjectsService) {}

  ngOnInit(): void {
    this.getMeal();
  }

  private getMeal(): void {
    this.sub.add(
      this.subjectService.getMeal()
        .subscribe((meal) => {
          this.currentMeal = meal.data;
        })
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
