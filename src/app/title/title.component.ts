import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy {

  constructor() {}

  // Acontece depois do construtor
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Componente destruido")
  }

}
