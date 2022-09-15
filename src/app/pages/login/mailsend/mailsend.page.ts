import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as $ from 'jquery';
@Component({
  selector: 'app-mailsend',
  templateUrl: './mailsend.page.html',
  styleUrls: ['./mailsend.page.scss'],
})
export class MailsendPage implements OnInit {

  constructor( private naveCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.return()
     }, 3000);
  }
 
  return() {

    this.naveCtrl.navigateRoot('login', {animated: true});

  }

}
