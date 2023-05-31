import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoDeReceitas, create } from '../model/tipo-de-receita.model';
import { TipoDeReceitaService } from '../service/tipo-de-receita.service'
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router'




@Component({
  selector: 'app-tipodereceita',
  templateUrl: './tipodereceita.page.html',
  styleUrls: ['./tipodereceita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class TipodereceitaPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  // public tipodereceitas : TipoDeReceitas = {
  //   id:'',
  //     foto:"",
  //     nome:""
  // };
  public sobremesas: any = [];
  public fitness: any = [];
  public tipo : TipoDeReceitas = create();
  public receita : any = [];
  public snacks : any = [];
  public bebidas : any = [];

  constructor(private rotaAtiva: ActivatedRoute,
              private tipoServ: TipoDeReceitaService
              ) { }

  ngOnInit() {
    const id : string = this.rotaAtiva.snapshot.paramMap.get('id') || '';
    this.tipoServ.get(id).then((tipo : TipoDeReceitas)=>{
      this.tipo = tipo;
      console.log(this.tipo)
    })
    this.tipoServ.getAll2().then((documentos)=>{
      this.receita = documentos;
      console.log(this.receita);
    });
    this.tipoServ.getAll3().then((documentos)=>{
      this.snacks = documentos;
      console.log(this.snacks);
    });
    this.tipoServ.getAll4().then((documentos)=>{
      this.bebidas = documentos;
      console.log(this.bebidas);
    });
    this.tipoServ.getAll5().then((documentos)=>{
      this.sobremesas = documentos;
      console.log(this.sobremesas);
    });
    this.tipoServ.getAll6().then((documentos)=>{
      this.fitness = documentos;
      console.log(this.fitness);
    });
  }

}
