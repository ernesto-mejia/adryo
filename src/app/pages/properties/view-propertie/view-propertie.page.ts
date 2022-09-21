import { Share } from '@capacitor/share';
import { Component, OnInit } from '@angular/core';


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
