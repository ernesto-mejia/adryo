import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InfoAdviser } from '../../interfaces/index';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage  {

  cliente: string = null;
  user: string = null;
  userId: string = null;
  events: string;
  avatar: any;
  bio: any;
  cuentaId: string;
  asesor_avatar: any;
  user_Photo: any;
  asesor_email: any;
  asesor_name: any;
  asesor_phone: any;

  constructor(private storage: Storage,
              private naveCtrl: NavController,
              private http: HttpClient,
              private usuarioService: UsuarioService
    ) {
      this.as();
    }


  adviser: InfoAdviser = {};

  async as() {
    const storage = await this.storage.create();

    const bio = await this.storage.get('bio');
    this.bio = bio;

    const asesor_name = await this.storage.get('user_name');
    this.asesor_name = asesor_name;

    const asesor_email = await this.storage.get('correo_electronico');
    this.asesor_email = asesor_email;

    const asesor_phone = await this.storage.get('telefono1');
    this.asesor_phone = asesor_phone;

    const asesor_avatar = await this.storage.get('user_avatar');
    this.user_Photo = asesor_avatar;
      console.log(asesor_avatar);

  }

  logout() {
    this.storage.create();
    this.storage.clear();
    this.user = null;
    this.storage.clear();
    this.naveCtrl.navigateRoot('/login', {animated: true});
  };

  bioOff() {
    this.offUserBiometric();
  };
  bioOn() {
    this.onUserBiometric();
  };
  async offUserBiometric() {
    await this.storage.create();
    await this.storage.set('bio', '0');
    const store = new Storage();

  };
  async onUserBiometric() {
    await this.storage.create();
    await this.storage.set('bio', '1');
    const store = new Storage();

  };
}
