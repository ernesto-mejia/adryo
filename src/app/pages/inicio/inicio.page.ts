import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InfoAdviser } from '../../interfaces/index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage  {

  clientAdd = {
    name: '',
    email: '',
    phoneOne: '',
    phoneTwo: '',
    phoneThree: '',
    type: '',
    development: '',
    contact: '',
  };
  cliente: string = null;
  user: string = null;
  userId: string = null;
  events: string;
  avatar: any;

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
    const foto = await this.storage.get('cuenta_logo');
    this.avatar = foto;
    this.usuarioService.getUserData(this.advId.id).subscribe(resp => {
      this.adviser = resp;

      this.events = resp.events;


    });
    console.log(this.avatar);
  }



  async adClient(fAddClient: NgForm) {

    if (fAddClient.invalid) {
      return;
    }

    const valido = await this.usuarioService.addClient(
      this.clientAdd.name,
      this.clientAdd.email,
      this.clientAdd.phoneOne,
      this.clientAdd.phoneTwo,
      this.clientAdd.phoneThree,
      this.clientAdd.type,
      this.clientAdd.contact,
      this.clientAdd.development
    );

  }


  error() {
    $('#error').removeClass('d-none');
    $('.cont_input').addClass('input_error');

  }

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

