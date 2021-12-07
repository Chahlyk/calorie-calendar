import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private subject = new BehaviorSubject<object>({});

  public send(meal: object): void {
    this.subject.next({ data: meal });
  }

  public get(): Observable<any> {
    return this.subject.asObservable();
  }

}
