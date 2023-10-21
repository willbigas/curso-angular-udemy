import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public altura: string = "20px";
  public backgroundColor: string = "red";

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;

      if (this.altura == "20px") {
        this.altura = "50px";
        this.backgroundColor = "blue";
      } else {
        this.altura = "20px";
        this.backgroundColor = "red";
      }
    }, 2000)


  }


}
