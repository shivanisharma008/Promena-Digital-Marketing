import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { LandingPagesComponent } from './landing-pages.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LandingPagesComponent
  ],
  imports: [
    CommonModule,
    LandingPagesRoutingModule,
    RouterModule.forChild([{path:'',component:LandingPagesComponent}])
  ]
})
export class LandingPagesModule { }
