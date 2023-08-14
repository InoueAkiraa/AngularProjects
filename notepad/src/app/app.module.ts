import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarAnotacaoComponent } from './componentes/anotacoes/criar-anotacao/criar-anotacao.component';
import { FormsModule } from '@angular/forms';
import { ListarAnotacaoComponent } from './componentes/anotacoes/listar-anotacao/listar-anotacao.component';
import { AnotacaoComponent } from './componentes/anotacoes/anotacao/anotacao.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirAnotacaoComponent } from './componentes/anotacoes/excluir-anotacao/excluir-anotacao.component';
import { EditarAnotacaoComponent } from './componentes/anotacoes/editar-anotacao/editar-anotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarAnotacaoComponent,
    ListarAnotacaoComponent,
    AnotacaoComponent,
    ExcluirAnotacaoComponent,
    EditarAnotacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
