import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao';
import { AnotacaoService } from '../anotacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-anotacao',
  templateUrl: './editar-anotacao.component.html',
  styleUrls: ['./editar-anotacao.component.css']
})
export class EditarAnotacaoComponent {

  anotacao: Anotacao = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: AnotacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((anotacao) =>{
      this.anotacao = anotacao
    })
  }

  editarAnotacao() {
    this.service.editar(this.anotacao).subscribe(() => {
      this.router.navigate(['/listarAnotacao'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarAnotacao'])
  }
}
