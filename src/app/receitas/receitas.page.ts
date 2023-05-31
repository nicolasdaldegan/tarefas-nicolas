import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoDeReceitaService } from '../service/tipo-de-receita.service'
import { RouterLink, RouterModule } from '@angular/router';
import { Receita, create2 } from '../model/receital.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class ReceitasPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  public receita : Receita = create2();
  public snacks :Receita = create2();
  public bebidas : Receita = create2();
  public sobremesas: Receita = create2();
  public fitness: Receita = create2();
  constructor(private rotaAtiva: ActivatedRoute,private tipoServ: TipoDeReceitaService) { }

  ngOnInit() {
    const id: string = this.rotaAtiva.snapshot
                            .paramMap.get('id') || '';

    this.tipoServ.get2(id).then((receita: Receita)=>{
      this.receita = receita;
      console.log(this.receita)
    });
    this.tipoServ.get3(id).then((snacks: Receita)=>{
      this.snacks = snacks;
      console.log(this.snacks)
    });
    this.tipoServ.get4(id).then((bebidas: Receita)=>{
      this.bebidas = bebidas;
      console.log(this.bebidas)
    });
    this.tipoServ.get5(id).then((sobremesas: Receita)=>{
      this.sobremesas = sobremesas;
      console.log(this.sobremesas)
    });
    this.tipoServ.get6(id).then((fitness: Receita)=>{
      this.fitness = fitness;
      console.log(this.fitness)
    });
  }

}
