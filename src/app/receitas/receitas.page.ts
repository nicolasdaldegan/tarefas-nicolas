import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceitaService } from './../service/receita.service'
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class ReceitasPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  constructor(private receitaServ: ReceitaService) { }

  ngOnInit() {
  }

}
