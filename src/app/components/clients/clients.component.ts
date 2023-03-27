import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { clientList } from '../../interfaces';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {

  @Input() clientList: clientList[] = [];

  constructor(
    private naveCtrl: NavController,
    private storage: Storage,) { }

  ngOnInit() {}
  async verClient(id: string) {

    await this.storage.create();
    await this.storage.remove('cliente_id');
    await this.storage.set('cliente_id', id);
    const store = new Storage();

    this.naveCtrl.navigateRoot('/card-client', {animated: true});


  };
}
