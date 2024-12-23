import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chave } from 'src/app/domain/Chave';
import { Inscricao } from 'src/app/domain/Inscricao';
import { ListagemInscricoes } from 'src/app/domain/ListagemInscricoes';
import { PreinscricaoUsuario } from 'src/app/domain/PreinscricaoUsuario';
import { environment } from 'src/environments/environment';

@Injectable()

export class InscricaoService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getInscricao(): Observable<Inscricao[]>{
    return this.http.get<Inscricao[]>(`${this.url}/preinscricao`)
  }

  getInscricaoPorId(id: number): Observable<Inscricao>{
    return this.http.get<Inscricao>(`${this.url}/preinscricao/${id}`)
  }

  getInscricoesPorIdEvento(id: number): Observable<ListagemInscricoes[]>{
    return this.http.get<ListagemInscricoes[]>(`${this.url}/preinscricao/eventoinscricoes/${id}`)
  }

  getInscricoesPorIdUsuario(id: number): Observable<PreinscricaoUsuario[]> {
    return this.http.get<PreinscricaoUsuario[]>(`${this.url}/preinscricao/usuarioinscricoes/${id}`);
  }

  salvarInscricao(inscricao: Inscricao): Observable<Inscricao>{
    return this.http.post<Inscricao>(`${this.url}/preinscricao`, inscricao)
  }

  editarInscricao(inscricao: Inscricao): Observable<Inscricao>{
    return this.http.put<Inscricao>(`${this.url}/preinscricao`, inscricao)
  }

  deletarInscricaoChave(chave: Chave): Observable<any> {
    return this.http.delete(`${this.url}/preinscricao/${chave}`);
  }
  getInscricaoUsuario(id : number): Observable<Inscricao[]>{
    return this.http.get<Inscricao[]>(`${this.url}/preinscricao/inscricoes/${id}`)
  }
}
