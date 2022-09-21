import { Component, OnInit, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
