import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.page.html',
  styleUrls: ['./refeicao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RefeicaoPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  constructor() { }

  ngOnInit() {
  }

}
