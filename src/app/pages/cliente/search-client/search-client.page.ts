import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.page.html',
  styleUrls: ['./search-client.page.scss'],
})
export class SearchClientPage implements OnInit {
  search = {
    name: ''
  };
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
