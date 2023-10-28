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

  public foodList(): Observable<Array<FoodList>> {
    return this.httpClient.get<Array<FoodList>>(`${this.url}list-food`)
      .pipe(
        res => res,
        error => error
      );
  }

  public foodListAdd(value: string): Observable<FoodList> {

    let foodlist:FoodList = {id: 1, nome: value};

    this.foodListAlert(foodlist);
    return this.httpClient.post<FoodList>(`${this.url}list-food`, {nome: value})
      .pipe(
        res => res,
        error => error
      );
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value)
  }
}
