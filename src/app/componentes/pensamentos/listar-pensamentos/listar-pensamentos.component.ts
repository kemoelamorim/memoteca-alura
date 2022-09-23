import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/interface/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.buscarListaPensamentos().subscribe((pensamentos: Pensamento[]) => {
      this.listaPensamentos = pensamentos;
    })
  }

}
