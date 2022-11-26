import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { developments } from '../../interfaces';
@Component({
  selector: 'app-developments',
  templateUrl: './developments.page.html',
  styleUrls: ['./developments.page.scss'],
})
export class DevelopmentsPage implements OnInit {

  constructor(

    private storage: Storage,
    private usuarioService: UsuarioService
  ) { this.devs();}

  public developments: developments;

  ngOnInit() {
  }

  async devs() {
    const storage = await this.storage.create();
    const cuenta = await this.storage.get('cuenta_id');
    this.usuarioService.getDevelopmentsList(cuenta).subscribe( (resp: developments) => {
    this.developments = resp;
      console.log(this.developments);
    });

  }

}
