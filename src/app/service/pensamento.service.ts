import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from '../interface/pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { }

  buscarListaPensamentos():Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>("http://localhost:3000/pensamentos")
  }
  criarPensamento(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>("http://localhost:3000/pensamentos",pensamento)
  }
  excluirPensamento(id: number): Observable<Pensamento>{
    return this.http.delete<Pensamento>(`http://localhost:3000/pensamentos/${id}`)
  }
  buscarPorId(id: number): Observable<Pensamento>{
    return this.http.get<Pensamento>(`http://localhost:3000/pensamentos/${id}`)
  }
  editarPensamento(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.put<Pensamento>(`http://localhost:3000/pensamentos/${pensamento.id}`, pensamento)
  }
}
