import { Anotacao } from './anotacao';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {

  private readonly API = "http://localhost:3000/anotacoes"

  constructor(private http: HttpClient) { }

  listar(): Observable<Anotacao[]>{
    return this.http.get<Anotacao[]>(this.API)
  }

  criar(anotacao: Anotacao): Observable<Anotacao>{
    return this.http.post<Anotacao>(this.API, anotacao)
  }

  editar(anotacao: Anotacao): Observable<Anotacao>{
    const url = `${this.API}/${anotacao.id}`
    return this.http.put<Anotacao>(url, anotacao)
  }

  excluir(id: number): Observable<Anotacao>{
    const url = `${this.API}/${id}`
    return this.http.delete<Anotacao>(url)
  }

  buscarPorId(id: number): Observable<Anotacao>{
    const url = `${this.API}/${id}`
    return this.http.get<Anotacao>(url)
  }
}
