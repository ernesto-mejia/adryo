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

  public cliens: clientList;

  ngOnInit() {
  }

  async as() {
    const storage = await this.storage.create();
    const name = await this.storage.get('user_id');

    this.usuarioService.getClientList(name).subscribe( (resp: clientList) => {
    this.cliens = resp;

    });

  }
0

}
