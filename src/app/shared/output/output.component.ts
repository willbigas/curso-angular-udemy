import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    {nome: "William", idade: 25},
    {nome: "Gabriel", idade: 20},
    {nome: "João", idade: 7}
  ]

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
    console.log(this.list[event]);
  }
}
