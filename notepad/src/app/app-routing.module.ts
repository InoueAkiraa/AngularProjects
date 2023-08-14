import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAnotacaoComponent } from './componentes/anotacoes/criar-anotacao/criar-anotacao.component';
import { ListarAnotacaoComponent } from './componentes/anotacoes/listar-anotacao/listar-anotacao.component';
import { ExcluirAnotacaoComponent } from './componentes/anotacoes/excluir-anotacao/excluir-anotacao.component';
import { EditarAnotacaoComponent } from './componentes/anotacoes/editar-anotacao/editar-anotacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarAnotacao',
    pathMatch: 'full'
  },
  {
    path: 'criarAnotacao',
    component: CriarAnotacaoComponent
  },
  {
    path: 'listarAnotacao',
    component: ListarAnotacaoComponent
  },
  {
    path: 'anotacoes/excluirAnotacao/:id',
    component: ExcluirAnotacaoComponent
  },
  {
    path: 'anotacoes/editarAnotacao/:id',
    component: EditarAnotacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
