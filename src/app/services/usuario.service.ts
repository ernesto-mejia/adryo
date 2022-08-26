/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  @Input() message;
  user: string = null;
  email: string = null;

  constructor(private http: HttpClient,
              private storage: Storage,
              private naveCtrl: NavController,) { }


    login(email: string, password: string) {

      const data = {email, password};

      return new Promise(resolve => {
        this.http.post(`https://adryo.com.mx/users/login_app`, data)
        .subscribe(resp => {
          //console.log(resp);
          // eslint-disable-next-line @typescript-eslint/dot-notation
          if ( resp['Ok'] ) {
            this.saveUserId(resp['user_id']);
            this.message = resp['mensaje'];
            resolve(true);
          };
          if (!resp['Ok']) {

            console.log(resp['mensaje']);
            this.storage.create();
            this.storage.clear();
            this.user = null;
            this.storage.clear();
            resolve(false);
            this.message = resp['mensaje'];
          };
        });
      });

    }

    async saveUserId(user: string) {

      await this.storage.create();
      this.user = user;
      await this.storage.set('user_id', user);
      const store = new Storage();

    };

    logout() {
      this.user = null;
      this.storage.clear();
      this.naveCtrl.navigateRoot('/login', {animated: true});
    };


    recover(email: string) {

      const data = {email};

      return new Promise(resolve => {
        this.http.post(`https://adryo.com.mx/users/validate_user`, data)
        .subscribe(resp => {
          console.log(resp);
          // eslint-disable-next-line @typescript-eslint/dot-notation
          if ( resp['Ok'] ) {
            console.log(resp['mensaje']);
            resolve(true);
          };
          if (resp['Ok']) {
            console.log(resp['mensaje']);
            resolve(false);
          };
        });
      });

    }

}
