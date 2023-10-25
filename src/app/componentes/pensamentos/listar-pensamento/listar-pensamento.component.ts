import { PensamentosService } from './../pensamentos.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  // Componente pai do pensamento.component
  listaPensamentos: Pensamento[] = [
    // {
    //   id: 1,
    //   conteudo: 'Minha propriedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2'
    // },
    // {
    //   id: 2,
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3'
    // },
    // {
    //   id: 3,
    //   conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris. Nunc mi ipsum faucibus vitae aliquet. Platea dictumst quisque sagittis purus sit. Eget aliquet nibh praesent tristique magna sit amet purus. Congue eu consequat ac felis. Sit amet est placerat in. Aliquam nulla facilisi cras fermentum odio eu. Odio eu feugiat pretium nibh ipsum consequat. Risus nec feugiat in fermentum posuere urna nec tincidunt. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Purus in mollis nunc sed id. Cum sociis natoque penatibus et. Viverra accumsan in nisl nisi. Arcu non sodales neque sodales ut etiam sit amet. Aliquam ultrices sagittis orci a scelerisque.',
    //   autoria: '',
    //   modelo: 'modelo1'
    // }
  ];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(
    private service: PensamentosService
  ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!this.listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
      //Fizemos essa logica para acessar os pensamentos que foram acrescidos a cada página
    })
  }
}
