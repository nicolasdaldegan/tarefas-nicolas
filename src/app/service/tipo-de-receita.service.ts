import { Injectable } from '@angular/core';
import { TipoDeReceitas } from '../model/tipo-de-receita.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeReceitaService {
  public tipodereceitas: TipoDeReceitas[] = [
    {
      id:1,
      foto:"../../assets/icon/refeicao.jpg",
      nome:"Refeições",
    },
    {
      id:2,
      foto:"../../assets/icon/snacks.png",
      nome:"Snacks",
    },
    {
      id:3,
      foto:"./../assets/icon/bebidas.jpg",
      nome:"Bebidas"
    },
    {
      id:4,
      foto:"../../assets/icon/sobremesas.jpg",
      nome:"Sobremesas"
    },
    {
      id:5,
      foto:"../../assets/icon/fit.png",
      nome:"Fitness"
    }

  ]
  constructor() { }
  public obterTodas(): Array<TipoDeReceitas>{
    return this.tipodereceitas;
  }
  public obter(codigo: number): TipoDeReceitas {
    for(let receita of this.tipodereceitas) {
        if (receita.id === codigo)
         return receita;
    }
  
    return {
        id: 0,
        foto: '',
        nome:''
    };
}
}
