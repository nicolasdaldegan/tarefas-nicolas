import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceitaService } from './../service/receita.service'
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class InicioPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  // public icon2: string = "../../assets/icon/refeicao.jpg"
  constructor(private receitaServ: ReceitaService) { }

  ngOnInit() {
  }

}
