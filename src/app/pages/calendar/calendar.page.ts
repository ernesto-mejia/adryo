/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { events } from '../../interfaces';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage  {

  public events: any;

  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService
  ) {this.as(); }

  async as() {
    const storage = await this.storage.create();
    const userEmail = await this.storage.get('correo_electronico');
    this.usuarioService.getEvetnsList(userEmail).subscribe( (resp: events) => {
    this.events = resp['mensaje'];
    console.log(this.events);

    });

  }


  @ViewChild(IonModal) modal: IonModal;


  name: string;

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
