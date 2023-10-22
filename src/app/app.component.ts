import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--    <app-data-biding></app-data-biding>-->
      <!--    <app-diretivas-estruturais></app-diretivas-estruturais>-->

<!--      <app-diretivas-atributos>-->
<!--          <h1>Aulas de Diretivas Atributos</h1>-->
<!--          <h3>Final da Aula</h3>-->
<!--      </app-diretivas-atributos>-->

<!--      <app-diretivas-atributos>-->
<!--          <h1>William Bigas Mauro</h1>-->
<!--          <h3>Railane Cardoso</h3>-->
<!--      </app-diretivas-atributos>-->

<!--      <app-diretivas-atributos></app-diretivas-atributos>-->

<!--      <app-new-component></app-new-component>-->

<!--      <app-input [contador]="addValue"></app-input>-->
<!--      <br>-->
<!--      <button (click)="add()"> Add </button>-->


      <app-output></app-output>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log("Teste")
  }


  public add() {
    this.addValue += 1;
  }
}
