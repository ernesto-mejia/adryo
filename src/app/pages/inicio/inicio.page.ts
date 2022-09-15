import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InfoAdviser } from '../../interfaces/index';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage  {
  cliente: string = null;
  user: string = null;
  userId: string = null;
  events: string;

  constructor(private http: HttpClient,
              private storage: Storage,
              private naveCtrl: NavController,
              private usuarioService: UsuarioService
  ) {
    this.as();
  }

  adviser: InfoAdviser = {};

  advId = {
    id: '5'
  };


  async as() {
    const storage = await this.storage.create();
    const name = await this.storage.get('user_id');

    this.usuarioService.getUserData(this.advId.id).subscribe(resp => {
      this.adviser = resp;
      this.events = resp.events;
      console.log(resp);

    });

  }

  logout() {
    this.storage.clear();
    this.user = null;
    this.storage.clear();
    this.naveCtrl.navigateRoot('/login', {animated: true});
  };


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

