import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IMeal, ISettings } from "../interfaces";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  public form!: FormGroup;
  public toggle: boolean = false;
  private today: Date = new Date();

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
    console.log(localStorage)
  }

  public okay() {
    const mealData = {...this.form.value},
          eightNine: IMeal = JSON.parse(<string>localStorage.getItem('eightNine')),
          nineTen: IMeal = JSON.parse(<string>localStorage.getItem('nineTen'));
    if (this.today.getDay() === 0) {
      localStorage.setItem('sunMeal', JSON.stringify(mealData));
    } else if (this.today.getDay() === 1) {
      const monMeal = {eightNine: eightNine, nineTen: nineTen}
      localStorage.setItem('monMeal', JSON.stringify(monMeal));
    } else if (this.today.getDay() === 2) {
      localStorage.setItem('tueMeal', JSON.stringify(mealData));
    } else if (this.today.getDay() === 3) {
      localStorage.setItem('wedMeal', JSON.stringify(mealData));
    } else if (this.today.getDay() === 4) {
      localStorage.setItem('thuMeal', JSON.stringify(mealData));
    } else if (this.today.getDay() === 5) {
      localStorage.setItem('friMeal', JSON.stringify(mealData));
    } else if (this.today.getDay() === 6) {
      localStorage.setItem('sutMeal', JSON.stringify(mealData));
    }
  }

  public add(): void {
    const mealData = {...this.form.value};
    const hours = {...this.form.value.time.slice(0, 2)};
    if (hours === 8 || hours === '08') {
      localStorage.setItem('eightNine', JSON.stringify(mealData))
    } else if (hours === 9 || hours === '09') {
      localStorage.setItem('nineTen', JSON.stringify(mealData));
    } else return;
  }
}
