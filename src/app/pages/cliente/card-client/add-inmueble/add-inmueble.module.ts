import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInmueblePageRoutingModule } from './add-inmueble-routing.module';

import { AddInmueblePage } from './add-inmueble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInmueblePageRoutingModule
  ],
  declarations: [AddInmueblePage]
})
export class AddInmueblePageModule {}
