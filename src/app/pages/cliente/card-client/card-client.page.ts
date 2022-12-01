import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { clientList } from '../../../interfaces';
@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.page.html',
  styleUrls: ['./card-client.page.scss'],
})
export class CardClientPage implements OnInit {

  constructor(private storage: Storage) {  this.init(); }

  ngOnInit() {
  }
  async init() {
    const storage = await this.storage.create();
    const cliente_id = await this.storage.get('cliente_id');
    console.log(cliente_id);


  }
}
