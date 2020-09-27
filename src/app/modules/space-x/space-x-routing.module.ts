import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceXComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceXRoutingModule { }
