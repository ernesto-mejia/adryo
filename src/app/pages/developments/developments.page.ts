import { Component, OnInit, Input  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { developments } from '../../interfaces';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-developments',
  templateUrl: './developments.page.html',
  styleUrls: ['./developments.page.scss'],
})
export class DevelopmentsPage implements OnInit {
  //@Input() developments;
  //developments: string;
  portada: string;
  constructor(
    private naveCtrl: NavController,
    private storage: Storage,
    private usuarioService: UsuarioService
  ) { this.devs();}

  //public developments: developments;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public developments: any;
  ngOnInit() {
  }

  async devs() {
    const storage = await this.storage.create();
    const cuenta = await this.storage.get('cuenta_id');
    this.usuarioService.getDevelopmentsList(cuenta).subscribe( (resp: developments) => {
    this.developments = resp;
      console.log(this.developments);
    });

  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  advId = {
    cuenta_id: '178',
    desarrollo_id: '246'
  };

  async verDeatelle(id: string) {

    await this.storage.create();
    await this.storage.remove('desarrollo_id');
    await this.storage.set('desarrollo_id', id);
    const store = new Storage();

    this.naveCtrl.navigateRoot('/view-development', {animated: true});


  };


}
