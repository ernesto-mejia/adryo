
import { Component, OnInit, Input } from '@angular/core';
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
  //desarrollos: string;
  @Input() developments;
  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService
  ) {  this.devs(); }
  //public desarrollos: developments;
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
    const desarrollo = await this.storage.get('desarrollo_id');
    const foto = await this.storage.get('cuenta_logo');
    this.avatar = foto;
    this.usuarioService.getDevelopment(cuenta, desarrollo).subscribe( (resp: developments) => {
      this.developments = resp;
      console.log(this.developments);
    });

  }
}
