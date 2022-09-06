import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/recover/recover.module').then( m => m.RecoverPageModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./pages/properties/properties.module').then( m => m.PropertiesPageModule)
  },
  {
    path: 'developments',
    loadChildren: () => import('./pages/developments/developments.module').then( m => m.DevelopmentsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'user-settings',
    loadChildren: () => import('./pages/user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
  },
  {
    path: 'sales-funnel',
    loadChildren: () => import('./pages/sales-funnel/sales-funnel.module').then( m => m.SalesFunnelPageModule)
  },
  {
    path: 'client-list',
    loadChildren: () => import('./pages/client-list/client-list.module').then( m => m.ClientListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },  {
    path: 'search-client',
    loadChildren: () => import('./pages/search-client/search-client.module').then( m => m.SearchClientPageModule)
  },
  {
    path: 'card-client',
    loadChildren: () => import('./pages/card-client/card-client.module').then( m => m.CardClientPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
