import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pensamento } from 'src/app/interface/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe(pensamento=>{
      this.pensamento = pensamento
    })
  }
  editarPensamento(){
    this.service.editarPensamento(this.pensamento).subscribe((pensamento)=>{
      this.router.navigate(['listarPensamento'])
    })
  }
  cancelarPensamento(){
    this.router.navigate(['listarPensamento'])
  }

}
