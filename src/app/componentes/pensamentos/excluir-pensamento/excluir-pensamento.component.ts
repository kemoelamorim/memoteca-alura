import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/interface/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    modelo : '',
    autoria: ''
  }
  constructor(
    private router: Router,
    private service: PensamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })
  }
  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluirPensamento(this.pensamento.id).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }
  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
