import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public elseBlock: any;
  public list: Array<{ nome: string , idade: number }> =
    [{nome: "William Bigas Mauro" , idade : 25},
      {nome: "Gabriel Bigas Mauro" , idade: 59},
      {nome: "Wellington Bigas", idade: 55}
    ];
  public nome: string = "nay";

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Railane" , idade: 28})
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }
}
