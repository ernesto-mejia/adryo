import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDevelopmentPageRoutingModule } from './add-development-routing.module';

import { AddDevelopmentPage } from './add-development.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDevelopmentPageRoutingModule
  ],
  declarations: [AddDevelopmentPage]
})
export class AddDevelopmentPageModule {}
