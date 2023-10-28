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
  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: "William Bigas Mauro"}];

  public date: Date = new Date();
  public valorMonetario: number = 15465988784848.5487814697;
  public valorPercentual: number = 1.25;
  public cpf: number = 10052185958;

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

  public salvar() {
    this.list.push({nome: this.nome})
    this.nome = "";
  }
}
