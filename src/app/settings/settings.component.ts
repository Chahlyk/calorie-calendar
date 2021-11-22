import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public form!: FormGroup;

  public constructor() { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      gender: new FormControl('m'),
      weight: new FormControl('55', Validators.required),
      height: new FormControl('', Validators.required),
      minKcal: new FormControl('1230', Validators.required),
      maxKcal: new FormControl('1510', Validators.required),
      fats: new FormControl('55', Validators.required),
      proteins: new FormControl('55', Validators.required),
      carb: new FormControl('55', Validators.required),
    })
  }

  public save(): void {
    const settingsData = {...this.form.value}
    localStorage.setItem('settingsData', JSON.stringify(settingsData));
  }
}
