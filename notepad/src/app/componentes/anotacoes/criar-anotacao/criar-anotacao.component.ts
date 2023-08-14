import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao';
import { AnotacaoService } from '../anotacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-anotacao',
  templateUrl: './criar-anotacao.component.html',
  styleUrls: ['./criar-anotacao.component.css']
})
export class CriarAnotacaoComponent {

  pensamento: Anotacao = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: AnotacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  criarAnotacao(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarAnotacao'])
    })
  }

}
