import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subjectMeal = new BehaviorSubject<object>({});
  private subjectDay = new BehaviorSubject<object>({});

  public sendDay(day: object): void {
    this.subjectDay.next({ data: day });
  }

  public sendMeal(meal: object): void {
    this.subjectMeal.next({ data: meal });
  }

  public getMeal(): Observable<any> {
    return this.subjectMeal.asObservable();
  }

  public getDay(): Observable<any> {
    return this.subjectDay.asObservable();
  }

}
