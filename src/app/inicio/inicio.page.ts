import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoDeReceitaService } from '../service/tipo-de-receita.service'
import { RouterLink, RouterModule } from '@angular/router';
import { TipoDeReceitas } from '../model/tipo-de-receita.model';
import { RefeicaoService } from '../service/refeicao.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class InicioPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  public tipodereceitas : TipoDeReceitas[] = [];

  public refeicoes: unknown[] = [];
  // public icon2: string = "../../assets/icon/refeicao.jpg"
  constructor(private receitaServ: TipoDeReceitaService, private refeicaoServ: RefeicaoService) { }

  ngOnInit() {
    this.tipodereceitas = this.receitaServ.obterTodas();

    this.refeicaoServ.getAll().then((documentos)=>{
      this.refeicoes = documentos;
      console.log(this.refeicoes);
    })
  }

}
