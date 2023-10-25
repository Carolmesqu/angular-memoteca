import { Router } from '@angular/router';
import { PensamentosService } from './pensamentos.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent {

  //Atributo para representar o formulario
  //Sinal de excessao de operador não nulo !
  formulario!: FormGroup;

  constructor(
    private service: PensamentosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)])
      ],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)])
      ],
      modelo: ['modelo2']
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors);
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
