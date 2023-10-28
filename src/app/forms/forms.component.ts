import {Component} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public listComidas: Array<{ comida: string, preco: string }> = [
    {comida: "X-Salada", preco: "RS 10,00"},
    {comida: "X-Bacon", preco: "RS 15,00"},
    {comida: "Coxinha", preco: "RS 20,00"}
  ]


}
