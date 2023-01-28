import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import {FormGroup, FormBuilder, Validators}   from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: '',
    password: ''
  };
  //mensaje: [];
  message: any;
  @Input() mensaje;

  ionicForm: FormGroup;
  user: string;

  constructor(private usuarioService: UsuarioService,
              private naveCtrl: NavController,
              private storage: Storage,
              private uiService: UiServiceService,
              public formBuilder: FormBuilder) { }

  ngOnInit() {

  }
  async login(fLogin: NgForm) {
    if (fLogin.invalid) {
      return;
    }

    const valido = await this.usuarioService.login(this.loginUser.email,this.loginUser.password);

    if (valido) {
      this.naveCtrl.navigateRoot('inicio', {animated: true});
      this.mensaje = this.message;
      this.saveUserEmail(this.loginUser.email);

    } else {
      this.error();
      this.mensaje = this.message;
      console.log(this.mensaje);
    }

  }
  async saveUserEmail(user: string) {

    await this.storage.create();
    this.user = user;
    await this.storage.set('correo_electronico', user);
    const store = new Storage();

  };
  error() {
    $('#error').removeClass('d-none');
    $('.cont_input').addClass('input_error');

  }
}
