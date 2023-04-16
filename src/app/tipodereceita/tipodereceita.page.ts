import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoDeReceitas } from '../model/tipo-de-receita.model';
import { TipoDeReceitaService } from '../service/tipo-de-receita.service'
import { ActivatedRoute } from '@angular/router';
import { RefeicaoService } from '../service/refeicao.service'
import { Refeicao } from '../model/refeicao.model';
import { RouterLink, RouterModule } from '@angular/router'
import { Snacks } from '../model/snacks.model';
import { SnacksService } from '../service/snacks.service';


@Component({
  selector: 'app-tipodereceita',
  templateUrl: './tipodereceita.page.html',
  styleUrls: ['./tipodereceita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class TipodereceitaPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  public tipodereceitas : TipoDeReceitas = {
    id:0,
      foto:"",
      nome:""
  };
  public refeicao : Refeicao[] = [];
  public snack: Snacks[] = [];

  constructor(private rotaAtiva: ActivatedRoute,
              private receitaServ: TipoDeReceitaService,
              private refeicaoServ: RefeicaoService,
              private snackServ: SnacksService) { }

  ngOnInit() {
    const codigo = Number( this.rotaAtiva.snapshot.paramMap.get('id') );

    this.tipodereceitas = this.receitaServ.obter(codigo);
    this.refeicao = this.refeicaoServ.obterTodas();
    this.snack = this.snackServ.obterTodas();
  }

}
