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
    this.buildForm();
  }

  public save(): void {
    const settingsData = {...this.form.value}
    localStorage.setItem('settingsData', JSON.stringify(settingsData));
  }

  public exit(): void {
    localStorage.clear();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      gender: new FormControl(this.settingsData ? this.settingsData.gender : '', Validators.required),
      weight: new FormControl(this.settingsData ? this.settingsData.weight : '', Validators.required),
      height: new FormControl(this.settingsData ? this.settingsData.height : '', Validators.required),
      minKcal: new FormControl(this.settingsData ? this.settingsData.minKcal : '', Validators.required),
      maxKcal: new FormControl(this.settingsData ? this.settingsData.maxKcal : '', Validators.required),
      fats: new FormControl(this.settingsData ? this.settingsData.fats : '', Validators.required),
      proteins: new FormControl(this.settingsData ? this.settingsData.proteins : '', Validators.required),
      carb: new FormControl(this.settingsData ? this.settingsData.carb : '', Validators.required),
    })
  }
}

