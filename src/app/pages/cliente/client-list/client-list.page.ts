import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

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
      private naveCtrl: NavController,
      private storage: Storage,
      private usuarioService: UsuarioService
  ) { this.as(); }

  public clients: clientList;
  cuentaId: string;



  ngOnInit() {
  }

  async as() {
    const storage = await this.storage.create();
    const name = await this.storage.get('correo_electronico');
    const cuenta = await this.storage.get('cuenta_id');
    this.usuarioService.getClientList(cuenta, name).subscribe( (resp: clientList) => {
    this.clients = resp;
    });

  }

  async verClient(id: string) {

    await this.storage.create();
    await this.storage.remove('cliente_id');
    await this.storage.set('cliente_id', id);
    const store = new Storage();

    this.naveCtrl.navigateRoot('/card-client', {animated: true});


  };

}
