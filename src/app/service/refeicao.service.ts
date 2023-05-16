import { Injectable } from '@angular/core';
import { FirebaseApp } from '@firebase/app';
import { Refeicao } from '../model/refeicao.model';
import { FirebaseService } from './firebase.service';

import { getFirestore, collection, doc, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {
    private firestoreDB;


    //outro
  public refeicao: Refeicao[] = [
    {
      id:1,
      foto:"../../assets/icon/strogonoff.jpg",
      nome:"Stronoff"
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
  constructor(private fireServ: FirebaseService) { 
    this.firestoreDB = getFirestore(
                        this.fireServ.getaApp()
                      );
  }

  public async getAll(){
    const refeicaoCol = collection(
      this.firestoreDB,
      'refeicoes'
    );

    const refeicaoSnapshot = await getDocs(
      refeicaoCol
    );

      const refeicaoList = refeicaoSnapshot.docs.map(
        doc => doc.data()
      );
        return refeicaoList;
  }

  //outro
  public obterTodas(): Array<Refeicao>{
    return this.refeicao;
  }

}
