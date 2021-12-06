import { Component, Input, OnInit } from '@angular/core';
import { ISettings } from "../interfaces";

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css']
})
export class CurrentDayComponent implements OnInit {
  public settingsData: ISettings = JSON.parse(<string>localStorage.getItem('settingsData'));
  public kcal: any = 1359;
  public fats: any = 55;
  public proteins: any = 44;
  public carb: any = 60;
  @Input() public someDay!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
