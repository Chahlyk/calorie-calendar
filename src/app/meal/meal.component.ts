import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IMeal } from "../interfaces";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  public form!: FormGroup;
  public toggle: boolean = false;
  private today: Date = new Date();
  private sunMeal!: Array<IMeal>;
  private monMeal!: Array<IMeal>;
  private tueMeal!: Array<IMeal>;
  private wedMeal!: Array<IMeal>;
  private thuMeal!: Array<IMeal>;
  private friMeal!: Array<IMeal>;
  private sutMeal!: Array<IMeal>;

  public constructor() { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public add(): void {
    switch (this.today.getDay()) {
      case 0:
        this.localSaver(this.sunMeal, 'sunMeal');
        break;
      case 1:
        this.localSaver(this.monMeal, 'monMeal');
        break;
      case 2:
        this.localSaver(this.tueMeal, 'tueMeal');
        break;
      case 3:
        this.localSaver(this.wedMeal, 'wedMeal');
        break;
      case 4:
        this.localSaver(this.thuMeal, 'thuMeal');
        break;
      case 5:
        this.localSaver(this.friMeal, 'friMeal');
        break;
      case 6:
        this.localSaver(this.sutMeal, 'sutMeal');
        break;
    }
  }

  private localSaver(someMeal: any, name: string): void {
    debugger;
    someMeal = JSON.parse(<string>localStorage.getItem(name)) || [];
    localStorage.setItem(name, JSON.stringify([...someMeal, {...this.form.value}]));
  }

  private buildForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      kcal: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      fats: new FormControl('', Validators.required),
      proteins: new FormControl('', Validators.required),
      carb: new FormControl('', Validators.required),
    })
  }
}
