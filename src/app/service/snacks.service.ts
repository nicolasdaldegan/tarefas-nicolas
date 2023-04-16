import { Injectable } from '@angular/core';
import { Snacks } from '../model/snacks.model';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {
  public snack: Snacks[] = [
    {
      id:1,
      foto:"../../assets/icon/cookie.jpg",
      nome:"Cookie",
    },
    {
      id:2,
      foto:"../../assets/icon/biscoito-grao.jpg",
      nome:"Biscoito de Grão de Bico",
    },
    {
      id:3,
      foto:"../../assets/icon/parmesao.jpg",
      nome:"Palitinhos de Parmesão"
    }

  ]
  constructor() { }
  public obterTodas(): Array<Snacks>{
    return this.snack;
  }
}
