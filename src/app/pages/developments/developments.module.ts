import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopmentsPageRoutingModule } from './developments-routing.module';

import { DevelopmentsPage } from './developments.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopmentsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DevelopmentsPage]
})
export class DevelopmentsPageModule {}
