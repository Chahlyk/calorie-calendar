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
  }

  public add() {
    const mealData = {...this.form.value}
    if (this.today.getDay() === 0) {
      const sunMeal = JSON.parse(<string>localStorage.getItem('sunMeal'))
      localStorage.setItem('sunMeal', JSON.stringify([...sunMeal, mealData]));
    } else if (this.today.getDay() === 1) {
      const monMeal = JSON.parse(<string>localStorage.getItem('monMeal'))
      localStorage.setItem('monMeal', JSON.stringify([...monMeal, mealData]));
    } else if (this.today.getDay() === 2) {
      const tueMeal = JSON.parse(<string>localStorage.getItem('tueMeal'))
      localStorage.setItem('tueMeal', JSON.stringify([...tueMeal, mealData]));
    } else if (this.today.getDay() === 3) {
      const wedMeal = JSON.parse(<string>localStorage.getItem('wedMeal'))
      localStorage.setItem('wedMeal', JSON.stringify([...wedMeal, mealData]));
    } else if (this.today.getDay() === 4) {
      const thuMeal = JSON.parse(<string>localStorage.getItem('thuMeal'))
      localStorage.setItem('thuMeal', JSON.stringify([...thuMeal, mealData]));
    } else if (this.today.getDay() === 5) {
      const friMeal = JSON.parse(<string>localStorage.getItem('friMeal'))
      localStorage.setItem('friMeal', JSON.stringify([...friMeal, mealData]));
    } else if (this.today.getDay() === 6) {
      const sutMeal = JSON.parse(<string>localStorage.getItem('sutMeal'))
      localStorage.setItem('sutMeal', JSON.stringify([...sutMeal, mealData]));
    }
  }
}
