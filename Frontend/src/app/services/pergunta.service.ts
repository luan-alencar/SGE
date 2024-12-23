import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perguntas } from 'src/app/domain/Perguntas';
import { environment } from 'src/environments/environment';

@Injectable()
export class PerguntaService {

  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  getPerguntas(): Observable<Perguntas[]>{
    return this.http.get<Perguntas[]>(`${this.url}/perguntas`)
  }

  getPergunta(id: number): Observable<Perguntas>{
    return this.http.get<Perguntas>(`${this.url}/perguntas/${id}`)
  }

  salvarPergunta(pergunta: Perguntas): Observable<Perguntas>{
    return this.http.post<Perguntas>(`${this.url}/perguntas`, pergunta)
  }


}
