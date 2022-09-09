import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InfoAdviser, dataEvents } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  @Input() message;
  user: string = null;
  email: string = null;
  adviserId: string = null;
  

  constructor(private http: HttpClient,
              private storage: Storage,
              private naveCtrl: NavController,) { }

  /* ----------------------------- Iniciar sesion ----------------------------- */

    login(email: string, password: string) {

      const data = {email, password};

      return new Promise(resolve => {
        this.http.post(`https://adryo.com.mx/users/login_app`, data)
        .subscribe(resp => {
          console.log(resp);
          
          if ( resp['Ok'] ) {
            this.saveUserId(resp['user_id']);
            this.message = resp['mensaje'];
            resolve(true);
          };
          if (!resp['Ok']) {

            console.log(resp['mensaje']);
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

  /* -------------------------------------------------------------------------- */

  /* ------------------------------ Cerrar Sesion ----------------------------- */
    logout() {
      this.user = null;
      this.naveCtrl.navigateRoot('/login', {animated: true});
      this.storage.clear();
    };

  /* -------------------------------------------------------------------------- */

  /* -------------------------- Recuperar contraseña -------------------------- */
  
    recover(email: string) {

      const data = {email};

      return new Promise(resolve => {
        this.http.post(`https://adryo.com.mx/users/validate_user`, data)
        .subscribe(resp => {
          console.log(resp);
          
          if (resp['Ok'] ) {
            console.log(resp['mensaje']);
            resolve(true);
          };
          if (!resp['Ok']) {
            console.log(resp['mensaje']);
            resolve(false);
          };
        });
      });

    }

  /* -------------------------------------------------------------------------- */


  /* ----------------------------- Navegacion/Inicio ----------------------------- */
 
    getUserData(adviserId: string):Observable<InfoAdviser> {
    
      var data = {adviserId};

      var dataUser = {
        id: data.adviserId
      };
     
      const url = 'https://beta.adryo.com.mx/users/get_advisor_info';

      return this.http.post<InfoAdviser>(url, dataUser).pipe(map(resp => resp[0]));
      
    }

  /* -------------------------------------------------------------------------- */



}
