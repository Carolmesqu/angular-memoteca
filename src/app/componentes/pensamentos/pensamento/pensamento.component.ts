import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  // Para receber informações do componente pai vamos inserir o decorator @input

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular Cli',
    autoria: 'Pain Nagato',
    modelo: 'modelo3'
  }

  constructor() {}

  ngOnInit(): void {

  }

  // Vamos utilizar o [ngClass] pra podermos trabalhar com o CSS de forma dinamica,
  // Se ele for maior que 256 caracteres uma classe é atribuida a ele
  // Se ele for menor que 256 outra classe é atribuida a ele
  // Essa forma estamos utilizando o metodo no componente, mas existem
  // Outras formas de utilizar o [ngClass]
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
