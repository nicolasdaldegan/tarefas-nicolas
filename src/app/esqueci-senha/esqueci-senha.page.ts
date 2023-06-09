import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoDeReceitaService } from '../service/tipo-de-receita.service'
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class EsqueciSenhaPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  constructor(private receitaServ: TipoDeReceitaService) { }

  ngOnInit() {
  }

}
