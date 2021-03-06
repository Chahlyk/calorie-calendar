import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MealComponent } from './meal/meal.component';
import { CurrentDayComponent } from './current-day/current-day.component';
import { CurrentMealComponent } from './current-meal/current-meal.component';
import { SubjectsService } from "./subjects.service";
import { CalendarPipe } from './calendar/calendar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    CalendarComponent,
    SettingsComponent,
    MealComponent,
    CurrentDayComponent,
    CurrentMealComponent,
    CalendarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
