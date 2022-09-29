import { Component, OnInit, ViewChild } from '@angular/core';
import { event } from 'jquery';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { clientList } from '../../../interfaces';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {

    constructor(
      private storage: Storage,
      private usuarioService: UsuarioService
  ) { this.as(); }

  public clients: clientList;
  cuentaId: string;

 

  ngOnInit() {
  }

  async as() {
    const storage = await this.storage.create();
    const name = await this.storage.get('user_id');
    const cuenta = await this.storage.get('cuenta_id');
    this.usuarioService.getClientList(name, cuenta).subscribe( (resp: clientList) => {
    this.clients = resp;
      console.log(this.clients);

    });

  }
0

}
