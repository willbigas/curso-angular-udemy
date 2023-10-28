import {Component, OnInit} from '@angular/core';
import {FoodListService} from "../../services/food-list.service";
import {FoodList} from "../../modules/food-list";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList[] = [];

  constructor(private foodListService: FoodListService) {
  }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      next => this.foodList = next,
      error => error
    );

    this.foodListService.emitEvent.subscribe(
      res => alert(`Olha você add => ${res}`)
    )
  }


}
