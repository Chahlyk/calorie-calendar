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
      title: new FormControl('', Validators.required),
      kcal: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      fats: new FormControl('', Validators.required),
      proteins: new FormControl('', Validators.required),
      carb: new FormControl('', Validators.required),
    })
  }

  public add(): void {
    const mealData = {...this.form.value}
    localStorage.setItem('meal', JSON.stringify(mealData));
  }
}
