import { Component, Input } from '@angular/core';
import { Anotacao } from '../anotacao';

@Component({
  selector: 'app-anotacao',
  templateUrl: './anotacao.component.html',
  styleUrls: ['./anotacao.component.css']
})
export class AnotacaoComponent {

  @Input() anotacao: Anotacao = {
    id: 0,
    conteudo: 'I Love Angular',
    autoria: 'Inoue Akira',
    modelo: 'modelo1'
  }

  larguraAnotacao(): string {
    if(this.anotacao.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
