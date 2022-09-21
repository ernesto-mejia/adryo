import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryPropertiePageRoutingModule } from './galery-propertie-routing.module';

import { GaleryPropertiePage } from './galery-propertie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleryPropertiePageRoutingModule
  ],
  declarations: [GaleryPropertiePage]
})
export class GaleryPropertiePageModule {}
