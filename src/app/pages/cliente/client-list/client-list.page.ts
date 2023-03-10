import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { clientList } from '../../../interfaces';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {
  clientL = {
    name: ''
  };
  public clientList: any;
  cuentaId: string;
  id: any;
  asesor_name: any;

  constructor(
      private naveCtrl: NavController,
      private storage: Storage,
      private usuarioService: UsuarioService
  ) { this.as(); }

  ngOnInit() {
  }

  async as() {
    const storage = await this.storage.create();
    const email = await this.storage.get('correo_electronico');
    const cuenta = await this.storage.get('cuenta_id');
    this.usuarioService.getClientList(email, cuenta).subscribe( (resp: clientList) => {
    this.clientList = resp;
    console.log(this.clientList);

    });

  }

  async verClient(id: string) {

    await this.storage.create();
    await this.storage.remove('cliente_id');
    await this.storage.set('cliente_id', id);
    const store = new Storage();

    this.naveCtrl.navigateRoot('/card-client', {animated: true});


  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
