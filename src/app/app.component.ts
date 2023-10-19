import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit, OnDestroy {

  public destruir: boolean = true;

  public destruirComponent() {
    console.log("Teste")
    this.destruir = false;
  }

  ngOnInit(): void {
    console.log("Teste")
  }

  ngOnDestroy(): void {

  }


}
