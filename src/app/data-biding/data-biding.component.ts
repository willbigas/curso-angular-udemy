import {Component} from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = "William";
  public idade: number = 25;
  public maisUm: number = 1;

  public imgSrc: string = "https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg";

  public checkedDisable: boolean = true;
  public imgTitle: string = "Property binding";
}
