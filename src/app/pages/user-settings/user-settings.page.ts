import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {
  user: string = null;
  constructor(private storage: Storage, private naveCtrl: NavController) { }

  ngOnInit() {
  }
  logout() {
    this.storage.create();
    this.storage.clear();
    this.user = null;
    this.storage.clear();
    this.naveCtrl.navigateRoot('/login', {animated: true});
  };

}
