import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TipoDeReceitaService } from '../service/tipo-de-receita.service'
import { RouterLink, RouterModule } from '@angular/router';
import { TipoDeReceitas } from '../model/tipo-de-receita.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class InicioPage implements OnInit {
  public icon: string = "../../assets/icon.jpg"
  public tipodereceitas : any[] = [];

  constructor(private tipoServ: TipoDeReceitaService) { }

  ngOnInit() {

    this.tipoServ.getAll().then((documentos)=>{
      this.tipodereceitas = documentos;
      console.log(this.tipodereceitas);
    })
  }

}
