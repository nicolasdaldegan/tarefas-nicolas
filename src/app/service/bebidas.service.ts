import { Injectable } from '@angular/core';
import { Bebidas } from '../model/bebidas.model';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {
  public bebidas: Bebidas[] = [
    {
      id:1,
      foto:"../../assets/icon/iogurte morango.jpeg",
      nome:"Iogurte de morango",
    },
    {
      id:2,
      foto:"../../assets/icon/chá mate.jpg",
      nome:"Chá mate",
    },
    {
      id:3,
      foto:"../../assets/icon/drink morango.jpg",
      nome:"Drink de morango"
    }

  ]
  constructor() { }
  public obterTodas(): Array<Bebidas>{
    return this.bebidas;
  }
}
