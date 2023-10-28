import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodList} from "../modules/food-list";

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  constructor(private httpClient: HttpClient) {
  }

  private url: string = "http://localhost:3000/";

  public foodList(): Observable<FoodList[]> {
    return this.httpClient.get<FoodList[]>(`${this.url}list-food`)
      .pipe(
        res => res,
        error => error
      );
  }
}
