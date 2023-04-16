import { Injectable } from '@angular/core';
import { Refeicao } from '../model/refeicao.model';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {
  public refeicao: Refeicao[] = [
    {
      id:1,
      foto:"../../assets/icon/strogonoff.jpg",
      nome:"Stronoff",
    },
    {
      id:2,
      foto:"../../assets/icon/arrozcarreteiro.jpg",
      nome:"Arroz Carreteiro",
    },
    {
      id:3,
      foto:"../../assets/icon/frangocombata.jpg",
      nome:"Frango com Batata"
    }

  ]
  constructor() { }
  public obterTodas(): Array<Refeicao>{
    return this.refeicao;
  }
}
