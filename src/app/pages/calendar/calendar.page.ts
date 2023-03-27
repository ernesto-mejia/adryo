/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { events } from '../../interfaces';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage  {

  public events: any;
  fCancelClient: FormGroup;
  eventCancel = {
    motivo: ''
  };
  id: any;
  mensaje: any;
  @Input() resp;
  @Output() clickEvent = new EventEmitter();
  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService,
    public formBuilder: FormBuilder,
    private naveCtrl: NavController,
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

  cancel_() {
    this.modal.dismiss(null, 'cancel');

  }  showModalResp(){
    $('#respEvent').removeClass('d-none');
  }
  hideCancelEvent(){
    location.reload();
  }


  async cancelClient(fCancelClient: NgForm) {

    if (fCancelClient.invalid) {
      return;
    }
    const storage = await this.storage.create();
    const id = await this.storage.get('event_id');
    const valido = await this.usuarioService.postCancelEvent(id, this.eventCancel.motivo);
    //console.log(valido);

    this.hideCancelEvent();
    if (valido['Ok']) {
      this.naveCtrl.navigateRoot('/calendar', {animated: true});
      console.log(valido['mensaje']);
    } else if (!valido['Ok']){
      console.log(valido['mensaje']);
      this.naveCtrl.navigateRoot('/calendar', {animated: true});
    }
    //console.log(fCancelClient);
  }

  async saveEventId(id: string) {
    await this.storage.create();
    await this.storage.set('event_id', id);
    const store = new Storage();
  }

  onOffEvents(tag: string) {
    const id = "#"+tag;
    const className = ".tipoTarea-"+tag;

    // eslint-disable-next-line @typescript-eslint/quotes
    if($(id).prop("checked") === true){
      $(className).each(
        function() {
          $(this).removeClass('d-none');
        }
      );
    }
    else if($(id).prop("checked") === false){
      $(className).each(
        function() {
          $(this).addClass('d-none');
        }
      );
    }
  }
}
