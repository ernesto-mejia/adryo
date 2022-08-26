import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesFunnelPageRoutingModule } from './sales-funnel-routing.module';

import { SalesFunnelPage } from './sales-funnel.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesFunnelPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SalesFunnelPage]
})
export class SalesFunnelPageModule {}
