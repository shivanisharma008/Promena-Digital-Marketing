import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { LandingPagesComponent } from './landing-pages.component';
import { RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    LandingPagesComponent
  ],
  imports: [
    CommonModule,
    LandingPagesRoutingModule,
    MainModule,
    MatSidenavModule
    // RouterModule.forChild([{path:'',component:LandingPagesComponent}])
  ]
})
export class LandingPagesModule { }
