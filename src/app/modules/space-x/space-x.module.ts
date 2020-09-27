import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceXRoutingModule } from './space-x-routing.module';
import { SpaceXComponent } from './space-x/space-x.component';


@NgModule({
  declarations: [SpaceXComponent],
  imports: [
    CommonModule,
    SpaceXRoutingModule,
  ]
})
export class SpaceXModule { }
