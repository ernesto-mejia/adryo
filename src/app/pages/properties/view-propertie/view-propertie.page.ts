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
  
  showsection(){
      $('.Drop_submenu').click(function(e){

          $(this).children('ul').slideToggle();

      });


  }
}
