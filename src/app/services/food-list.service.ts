import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodList} from "../modules/food-list";

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


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
    return this.httpClient.post<FoodList>(`${this.url}list-food`, {nome: value})
      .pipe(
        res => res,
        error => error
      );
  }

   public foodListPut(id: number , value: string): Observable<FoodList> {
    return this.httpClient.put<FoodList>(`${this.url}list-food/${id}`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.httpClient.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value)
  }
}
