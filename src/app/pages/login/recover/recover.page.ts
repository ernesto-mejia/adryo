import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from '../../../services/ui-service.service';
import {FormGroup, FormBuilder, Validators}   from '@angular/forms';
import * as $ from 'jquery';
import { recoverPassword } from 'src/app/interfaces';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverUser = {
    email: ''
  };
  mensaje: recoverPassword = {};

  constructor(private usuarioService: UsuarioService,
    private naveCtrl: NavController,
    private uiService: UiServiceService,
    ) { }

  ngOnInit() {
  }
  async recover(fLogin: NgForm) {
    if (fLogin.invalid) {
      return;
    }
    const valido = await this.usuarioService.recover(this.recoverUser.email);

    if (valido) {
      this.naveCtrl.navigateRoot('mail-send', {animated: true});
    }
    this.usuarioService.recover(this.recoverUser.email).subscribe(resp => {

      if (!resp['flag']) {
        this.error();
        this.mensaje = resp;

      }


    });

  }

  error() {

    $('#error').removeClass('d-none');
    $('.cont_input').addClass('input_error');

  }

}
