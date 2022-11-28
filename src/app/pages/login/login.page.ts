import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @Input() message;

  ionicForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
              private naveCtrl: NavController,
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
    } else {
      this.error();
      this.message = this.message;
    }
    
  }
  error() {
    $('#error').removeClass('d-none');
    $('.cont_input').addClass('input_error');

  }
}
