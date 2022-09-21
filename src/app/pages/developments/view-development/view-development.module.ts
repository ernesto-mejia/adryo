import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDevelopmentPageRoutingModule } from './view-development-routing.module';

import { ViewDevelopmentPage } from './view-development.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDevelopmentPageRoutingModule
  ],
  declarations: [ViewDevelopmentPage]
})
export class ViewDevelopmentPageModule {}
