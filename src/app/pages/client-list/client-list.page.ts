import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {

  data: any[] = Array(100);
  constructor() { }

  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  loadData(event) {
    console.log(event);
  }
}
