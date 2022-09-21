import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryDevelopmentPageRoutingModule } from './gallery-development-routing.module';

import { GalleryDevelopmentPage } from './gallery-development.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryDevelopmentPageRoutingModule
  ],
  declarations: [GalleryDevelopmentPage]
})
export class GalleryDevelopmentPageModule {}
