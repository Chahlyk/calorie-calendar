import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISettings } from "../interfaces";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  public form!: FormGroup;
  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public toggle: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      gender: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.gender),
      weight: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.weight, Validators.required),
      height: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.height, Validators.required),
      minKcal: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.minKcal, Validators.required),
      maxKcal: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.maxKcal, Validators.required),
      fats: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.fats, Validators.required),
      proteins: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.proteins, Validators.required),
      carb: new FormControl((this.settingsData === null || this.settingsData === undefined) ? '' : this.settingsData.carb, Validators.required),
    })
  }

  public save(): void {
    const settingsData = {...this.form.value}
    localStorage.setItem('settingsData', JSON.stringify(settingsData));
  }
}
