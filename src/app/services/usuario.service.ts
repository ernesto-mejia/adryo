import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InfoAdviser, clientList, recoverPassword, developments } from '../interfaces';
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
  mensaje: Object;


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
            this.saveUserFoto(resp['cuenta_logo']);
            this.saveUserCuenta(resp['cuenta_id']);
            this.saveUserBiometric();
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

    async saveUserFoto(user: string) {

      await this.storage.create();
      this.user = user;
      await this.storage.set('cuenta_logo', user);
      const store = new Storage();

    };

    async saveUserCuenta(user: string) {

      await this.storage.create();
      this.user = user;
      await this.storage.set('cuenta_id', user);
      const store = new Storage();

    };

    async saveUserBiometric() {

      await this.storage.create();
      await this.storage.set('bio', '1');
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

    recover(email: string):Observable<recoverPassword> {

      const data = {email};
      const url = 'https://beta.adryo.com.mx/users/app_send_mail_recovery';

      return this.http.post<recoverPassword>(url, data).pipe(map(resp => resp));


    }

  /* -------------------------------------------------------------------------- */


  /* ----------------------------- Navegacion/Inicio/configuracion ----------------------------- */

    getUserData(adviserId: string):Observable<InfoAdviser> {

      const data = {adviserId};

      const dataUser = {
        id: data.adviserId

      };


      const url = 'https://beta.adryo.com.mx/users/get_advisor_info';

      return this.http.post<InfoAdviser>(url, dataUser).pipe(map(resp => resp[0]));

    }

  /* -------------------------------------------------------------------------- */

  /* ----------------------------- Lista-de-clientes ----------------------------- */

    getClientList(adviserId: string, cuentaId: string):Observable<clientList> {

      const data = {adviserId, cuentaId};

      const dataUser = {
        cuenta_id: data.adviserId,
        email_id: data.cuentaId
      };

      const url = 'https://beta.adryo.com.mx/clientes/get_clientes_info';
      //console.log(data);

      return this.http.post<clientList>(url, dataUser).pipe(map(resp => resp));
    }

  /* -------------------------------------------------------------------------- */


  /* ----------------------------- Agregar cleinte ----------------------------- */

    addClient(
        cuentaId: string,
        nombre: string,
        correoelectronico:string,
        telefono1: string,
        propiedadId: string,
        emailuser: string,
        dicTipoClienteId: string, 
        dicLineaContactoId: string
      ):Observable<developments> {

        const data = {
          cuentaId, 
          nombre, 
          correoelectronico, 
          telefono1, 
          propiedadId, 
          emailuser, 
          dicTipoClienteId, 
          dicLineaContactoId
        };

        const dataUser = {
          cuenta_id: data.cuentaId,
          nombre: data.nombre,
          telefono1: data.telefono1,
          correo_electronico: data.correoelectronico,
          dic_tipo_cliente_id: data.dicTipoClienteId,
          propiedad_id: data.propiedadId,
          dic_linea_contacto_id: data.dicLineaContactoId,
          email_user: data.emailuser
        };

        const url = 'https://beta.adryo.com.mx/clientes/set_add_clientes';

        return this.http.post<developments>(url, dataUser).pipe(map(resp => resp));

    }

  /* -------------------------------------------------------------------------- */


  /* ----------------------------- Lista-de-desarrollos ----------------------------- */

    getDevelopmentsList(cuentaId: string):Observable<developments> {

      const data = {cuentaId};

      const dataUser = {
        cuenta_id: data.cuentaId
      };

      const url = 'https://beta.adryo.com.mx/desarrollos/get_desarrollo_app';

      return this.http.post<developments>(url, dataUser).pipe(map(resp => resp));

    }

  /* -------------------------------------------------------------------------- */

  /* --------------------------- vista de desarrollo -------------------------- */

    getDevelopment(cuentaId: string, desarrolloId: string):Observable<developments> {

      const data = {cuentaId, desarrolloId};

      const dataUser = {
        cuenta_id: data.cuentaId,
        desarrollo_id: data.desarrolloId
      };

      const url = 'https://beta.adryo.com.mx/desarrollos/get_index_app';

      return this.http.post<developments>(url, dataUser).pipe(map(resp => resp));

    }

  /* -------------------------------------------------------------------------- */


}
