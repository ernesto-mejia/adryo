import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormGroup, FormBuilder, Validators}   from '@angular/forms';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {}

}
