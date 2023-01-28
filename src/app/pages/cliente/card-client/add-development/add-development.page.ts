import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-add-development',
  templateUrl: './add-development.page.html',
  styleUrls: ['./add-development.page.scss'],
})
export class AddDevelopmentPage  {

  constructor() { }

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
