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
  cuentaId: string;




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
    const name = await this.storage.get('user_id');
    const cuenta = await this.storage.get('cuenta_id');
    const foto = await this.storage.get('cuenta_logo');
    this.avatar = foto;
    this.usuarioService.getUserData(name).subscribe(resp => {
      this.adviser = resp;

      //console.log(this.events);

    });
  }

  logout() {
    this.storage.create();
    this.storage.clear();
    this.user = null;
    this.storage.clear();
    this.naveCtrl.navigateRoot('/login', {animated: true});
  };

}
