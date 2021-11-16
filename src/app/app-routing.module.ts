import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { TitlePageComponent } from "./title-page/title-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/titlePage', pathMatch: 'full' },
  {path: 'titlePage', component: TitlePageComponent},
  {path: 'calendar', component: CalendarComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
