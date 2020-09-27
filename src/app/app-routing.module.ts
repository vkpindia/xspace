import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'spaceX',
    pathMatch: 'full'
  },
  {
    path: 'spaceX',
    loadChildren: () => import('./modules/space-x/space-x.module').then(m => m.SpaceXModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
