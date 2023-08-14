import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao';
import { AnotacaoService } from '../anotacao.service';

@Component({
  selector: 'app-listar-anotacao',
  templateUrl: './listar-anotacao.component.html',
  styleUrls: ['./listar-anotacao.component.css']
})
export class ListarAnotacaoComponent {

  listaAnotacoes: Anotacao[] = [];

  constructor(private service: AnotacaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaAnotacoes) => {
      this.listaAnotacoes = listaAnotacoes
    })
  }
}
