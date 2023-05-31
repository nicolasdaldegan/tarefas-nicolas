import { Injectable } from '@angular/core';
import { TipoDeReceitas, create } from '../model/tipo-de-receita.model';
import { FirebaseApp } from '@firebase/app';
import { FirebaseService } from './firebase.service';
import { getFirestore, collection, doc, Firestore, 
  getDocs, getDoc, addDoc } 
from 'firebase/firestore';
import { Receita, create2 } from '../model/receital.model';
@Injectable({
  providedIn: 'root'
})
export class TipoDeReceitaService {
  private firestoreDB;


  constructor(private fireServ: FirebaseService) { 
    this.firestoreDB = getFirestore(
                        this.fireServ.getaApp()
                      );
  }
  public async getAll(){
    const tipoCol = collection(
      this.firestoreDB,
      'tipodereceita'
    );

    const tipoSnapshot = await getDocs(
      tipoCol
    );

      const tipoList = tipoSnapshot.docs.map(
        function (doc) {
          const item = { ...doc.data()};
          return {
            id: doc.id,
            nome: item['nome'],
            foto: item['foto']
          }
        }
      );
        return tipoList;
  }

  public async get(id:string): Promise<TipoDeReceitas> {
    const docRef = doc(this.firestoreDB, 'tipodereceita', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const item = { ...docSnap.data()};

      return {
        id: docSnap.id,
        nome: item['nome'],
        foto: item['foto'],
      };
    }

    return create();
  }

  public async getAll2(){
    const receitaCol = collection(
      this.firestoreDB,
      'receitas'
    );

    const receitaSnapshot = await getDocs(
      receitaCol
    );

      const receitaList = receitaSnapshot.docs.map(
        function (doc) {
          const item = { ...doc.data()};
          return {
            id: doc.id,
            nome: item['nome'],
            foto: item['foto'],
            descricao: item['descricao'],
            ingredientes: item['ingredientes'],
            tipo: item['tipo']
          }
        }
      );
        return receitaList;
  }

  public async get2(id:string): Promise<Receita> {
    const docRef = doc(this.firestoreDB, 'receitas', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const item = { ...docSnap.data()};

      return {
        id: docSnap.id,
        nome: item['nome'],
        foto: item['foto'],
        descricao: item['descricao'],
        ingredientes: item['ingredientes'],
        tipo: item['tipo']
      };
    }

    return create2();
  }

  public async getAll3(){
    const snacksCol = collection(
      this.firestoreDB,
      'snacks'
    );

    const snacksSnapshot = await getDocs(
      snacksCol
    );

      const snacksList = snacksSnapshot.docs.map(
        function (doc) {
          const item = { ...doc.data()};
          return {
            id: doc.id,
            nome: item['nome'],
            foto: item['foto'],
            descricao: item['descricao'],
            ingredientes: item['ingredientes'],
            tipo: item['tipo']
          }
        }
      );
        return snacksList;
  }

  public async get3(id:string): Promise<Receita> {
    const docRef = doc(this.firestoreDB, 'snacks', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const item = { ...docSnap.data()};

      return {
        id: docSnap.id,
        nome: item['nome'],
        foto: item['foto'],
        descricao: item['descricao'],
        ingredientes: item['ingredientes'],
        tipo: item['tipo']
      };
    }

    return create2();
  }

  public async getAll4(){
    const bebidasCol = collection(
      this.firestoreDB,
      'bebidas'
    );

    const bebidasSnapshot = await getDocs(
      bebidasCol
    );

      const bebidasList = bebidasSnapshot.docs.map(
        function (doc) {
          const item = { ...doc.data()};
          return {
            id: doc.id,
            nome: item['nome'],
            foto: item['foto'],
            descricao: item['descricao'],
            ingredientes: item['ingredientes'],
            tipo: item['tipo']
          }
        }
      );
        return bebidasList;
  }

  public async get4(id:string): Promise<Receita> {
    const docRef = doc(this.firestoreDB, 'bebidas', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const item = { ...docSnap.data()};

      return {
        id: docSnap.id,
        nome: item['nome'],
        foto: item['foto'],
        descricao: item['descricao'],
        ingredientes: item['ingredientes'],
        tipo: item['tipo']
      };
    }

    return create2();
  }

  public async getAll5(){
    const sobremesasCol = collection(
      this.firestoreDB,
      'sobremesas'
    );

    const sobremesasSnapshot = await getDocs(
      sobremesasCol
    );

      const sobremesasList = sobremesasSnapshot.docs.map(
        function (doc) {
          const item = { ...doc.data()};
          return {
            id: doc.id,
            nome: item['nome'],
            foto: item['foto'],
            descricao: item['descricao'],
            ingredientes: item['ingredientes'],
            tipo: item['tipo']
          }
        }
      );
        return sobremesasList;
  }

  public async get5(id:string): Promise<Receita> {
    const docRef = doc(this.firestoreDB, 'sobremesas', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const item = { ...docSnap.data()};

      return {
        id: docSnap.id,
        nome: item['nome'],
        foto: item['foto'],
        descricao: item['descricao'],
        ingredientes: item['ingredientes'],
        tipo: item['tipo']
      };
    }

    return create2();
  }

  public async getAll6(){
    const fitnessCol = collection(
      this.firestoreDB,
      'fitness'
    );

    const fitnessSnapshot = await getDocs(
      fitnessCol
    );

      const fitnessList = fitnessSnapshot.docs.map(
        function (doc) {
          const item = { ...doc.data()};
          return {
            id: doc.id,
            nome: item['nome'],
            foto: item['foto'],
            descricao: item['descricao'],
            ingredientes: item['ingredientes'],
            tipo: item['tipo']
          }
        }
      );
        return fitnessList;
  }

  public async get6(id:string): Promise<Receita> {
    const docRef = doc(this.firestoreDB, 'fitness', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const item = { ...docSnap.data()};

      return {
        id: docSnap.id,
        nome: item['nome'],
        foto: item['foto'],
        descricao: item['descricao'],
        ingredientes: item['ingredientes'],
        tipo: item['tipo']
      };
    }

    return create2();
  }
  // public async add(tipo: TipoDeReceitas) {
  //   try {
  //     // @ts-ignore
  //     delete tipo.id;
  //     const docRef = await addDoc(
  //       collection(this.firestoreDB, 'tipodereceita'),
  //       {
  //         ...tipo
  //       }
  //     );

  //     return docRef;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }

  // public async update(tipo: TipoDeReceitas) {
  //   try {
  //     const produtosRef = collection(
  //                           this.fireServ.getFirestoreDB(),
  //                           'tipodereceita');
      
  //     return await setDoc( doc(produtosRef, produto.id), {
  //       ...produto
  //     });


  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }

  // public async delete(id: string) {
  //   try {
  //     return await deleteDoc(
  //       doc(this.fireServ.getFirestoreDB(), 'produtos',id)
  //     );

  //   } catch (error) {
  //     console.error(error);
  //     return error;
  //   }
  // }

}
