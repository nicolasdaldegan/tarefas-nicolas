import { Injectable } from '@angular/core';
import { Fitnes } from '../model/fitnes.model';

@Injectable({
  providedIn: 'root'
})
export class FitnesService {
  public fitnes: Fitnes[] = [
    {
      id:1,
      foto:"../../assets/icon/granola.jpg",
      nome:"Granola Caseira",
    },
    {
      id:2,
      foto:"../../assets/icon/boloamendoas.jpg",
      nome:"Bolo de amêndoas",
    },
    {
      id:3,
      foto:"../../assets/icon/pão.jpg",
      nome:"Pão integral de microondas"
    }

  ]
  constructor() { }
  public obterTodas(): Array<Fitnes>{
    return this.fitnes;
  }
}
