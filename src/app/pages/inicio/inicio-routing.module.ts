import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            FormsModule,
            ReactiveFormsModule],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
