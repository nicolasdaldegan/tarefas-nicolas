import { Injectable } from '@angular/core';
import { Receita, TipoReceita } from '../model/receital.model';


@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  public receitas: Receita[] = [
    {
        id:1,
        foto:"../../assets/icon/strogonoff.jpg",
        nome:"Stronoff",
        descricao: '',
        nota: 0,
        tipo: TipoReceita.refeicao,
        comentarios: [],
        ingredientes:[]
    },
    {
        id:2,
        foto:"../../assets/icon/pudin.png",
        nome:"Pudin",
        descricao: '',
        nota: 0,
        tipo: TipoReceita.sobremesas,
        comentarios: [],
        ingredientes:[]
    },
    {
        id:3,
        foto:"../../assets/icon/sorvete.jpg",
        nome:"Sorvete caseiro",
        descricao: '',
        nota: 0,
        tipo: TipoReceita.sobremesas,
        comentarios: [],
        ingredientes:[]
    }

  ]
  constructor() { }

  public obterTodas(): Array<Receita>{
    return this.receitas;
  }

  public obterPorTipo(tipo: TipoReceita) {
    return this.receitas.filter((receita)=>{
        return (receita.tipo === tipo);
    })
  }
}
