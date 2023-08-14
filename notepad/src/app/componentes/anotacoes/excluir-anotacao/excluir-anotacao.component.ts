import { Component, OnInit } from '@angular/core';
import { AnotacaoService } from '../anotacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Anotacao } from '../anotacao';

@Component({
  selector: 'app-excluir-anotacao',
  templateUrl: './excluir-anotacao.component.html',
  styleUrls: ['./excluir-anotacao.component.css']
})
export class ExcluirAnotacaoComponent {

  anotacao: Anotacao = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }
  constructor(
    private service: AnotacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((anotacao) => {
      this.anotacao = anotacao
    })
  }

  excluirAnotacao(){
    if (this.anotacao.id){
      this.service.excluir(this.anotacao.id).subscribe(() => {
        this.router.navigate(['/listarAnotacao'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarAnotacao'])
  }
}
