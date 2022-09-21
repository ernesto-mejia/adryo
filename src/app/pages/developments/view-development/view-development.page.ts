import { Share } from '@capacitor/share';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-development',
  templateUrl: './view-development.page.html',
  styleUrls: ['./view-development.page.scss'],
})
export class ViewDevelopmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showsection();
  }
  share() {
    Share.share({
      title: 'Hola',
      text: 'Descripcion',
      url: 'url a compartir',
    });

  }
  showsection(){
    $('.Drop_submenu').click(function(e){

        $(this).children('ul').slideToggle();

    });


}
}
