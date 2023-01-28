import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-view-propertie',
  templateUrl: './view-propertie.page.html',
  styleUrls: ['./view-propertie.page.scss'],
})
export class ViewPropertiePage implements OnInit {


  constructor() { }

  ngOnInit() {
    this.showsection();
  }

  showsection(){
      $('.Drop_submenu').click(function(e){

          $(this).children('ul').slideToggle();

      });


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
