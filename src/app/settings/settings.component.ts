import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IValues } from "../interfaces";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  public form!: FormGroup;
  public values: IValues = JSON.parse(<string>localStorage.getItem('settingsData'));

  public constructor() { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      gender: new FormControl(this.values.gender),
      weight: new FormControl(this.values.weight, Validators.required),
      height: new FormControl(this.values.height, Validators.required),
      minKcal: new FormControl(this.values.minKcal, Validators.required),
      maxKcal: new FormControl(this.values.maxKcal, Validators.required),
      fats: new FormControl(this.values.fats, Validators.required),
      proteins: new FormControl(this.values.proteins, Validators.required),
      carb: new FormControl(this.values.carb, Validators.required),
    })
  }

  public save(): void {
    const settingsData = {...this.form.value}
    localStorage.setItem('settingsData', JSON.stringify(settingsData));
  }
}
