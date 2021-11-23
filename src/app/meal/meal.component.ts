import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  public form!: FormGroup;

  public constructor() { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('Dinner shit', Validators.required),
      kcal: new FormControl('1230', Validators.required),
      time: new FormControl('17:50', Validators.required),
      fats: new FormControl('55', Validators.required),
      proteins: new FormControl('55', Validators.required),
      carb: new FormControl('55', Validators.required),
    })
  }

  public add(): void {
    const mealData = {...this.form.value}
    localStorage.setItem('meal', JSON.stringify(mealData));
  }
}
