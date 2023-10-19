import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  constructor() {}

  // Acontece depois do construtor
  ngOnInit(): void {
  }

  // Somente quando tem um input()
  ngOnChanges(changes: SimpleChanges): void {
  }

}
