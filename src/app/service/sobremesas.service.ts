import { Injectable } from '@angular/core';
import { Sobremesas } from '../model/sobremesas.model';

@Injectable({
  providedIn: 'root'
})
export class SobremesasService {
  public sobremesas: Sobremesas[] = [
    {
      id:1,
      foto:"../../assets/icon/bolo.jpg",
      nome:"Bolo de Chocolate",
    },
    {
      id:2,
      foto:"../../assets/icon/pudin.png",
      nome:"Pudin",
    },
    {
      id:3,
      foto:"../../assets/icon/sorvete.jpg",
      nome:"Sorvete caseiro"
    }

  ]
  constructor() { }
  public obterTodas(): Array<Sobremesas>{
    return this.sobremesas;
  }
}
