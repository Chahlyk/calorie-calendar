import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { TitlePageComponent } from "./title-page/title-page.component";
import { SettingsComponent } from "./settings/settings.component";
import { MealComponent } from "./meal/meal.component";
import { CurrentDayComponent } from "./calendar/current-day/current-day.component";
import { CurrentMealComponent } from "./calendar/current-meal/current-meal.component";

const routes: Routes = [
  { path: '', redirectTo: '/titlePage', pathMatch: 'full' },
  {path: 'titlePage', component: TitlePageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'meal', component: MealComponent},
  {path: 'day', component: CurrentDayComponent},
  {path: 'thatMeal', component: CurrentMealComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
