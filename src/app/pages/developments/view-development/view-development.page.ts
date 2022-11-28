
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { developments } from '../../../interfaces';
@Component({
  selector: 'app-view-development',
  templateUrl: './view-development.page.html',
  styleUrls: ['./view-development.page.scss'],
})
export class ViewDevelopmentPage implements OnInit {
  avatar: any;

  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService
  ) {  this.devs(); }
  public developments: developments;
  ngOnInit() {
    this.showsection();
  }

  showsection(){
    $('.Drop_submenu').click(function(e){

        $(this).children('ul').slideToggle();

    });


  }

  advId = {
    cuenta_id: '178',
    desarrollo_id: '246'
  };


  async devs() {
    const storage = await this.storage.create();
    const cuenta = await this.storage.get('cuenta_id');
    const desarrollo = await this.storage.get('cuenta_id');
    const foto = await this.storage.get('cuenta_logo');
    this.avatar = foto;
    this.usuarioService.getDevelopment(this.advId.cuenta_id, this.advId.desarrollo_id).subscribe( (resp: developments) => {
    this.developments = resp;
      console.log(this.developments);
    });

  }
}
