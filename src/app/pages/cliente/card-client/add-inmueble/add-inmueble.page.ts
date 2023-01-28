import { Component, OnInit ,  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-add-inmueble',
  templateUrl: './add-inmueble.page.html',
  styleUrls: ['./add-inmueble.page.scss'],
})
export class AddInmueblePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
}
