import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPropertiePageRoutingModule } from './view-propertie-routing.module';

import { ViewPropertiePage } from './view-propertie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPropertiePageRoutingModule
  ],
  declarations: [ViewPropertiePage]
})
export class ViewPropertiePageModule {}
