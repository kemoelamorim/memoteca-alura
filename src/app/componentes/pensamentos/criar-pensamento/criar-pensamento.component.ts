import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/interface/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'Modelo 1'
  }

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criarPensamento(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })

  }
  cancelarPensamento(){
    this.router.navigate(['listarPensamento'])
  }
}
