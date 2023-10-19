import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Teste de input vindo da escrita do componente"></app-title>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000);
  }
}
