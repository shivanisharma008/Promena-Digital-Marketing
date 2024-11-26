import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPagesComponent } from './landing-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPagesComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path:'home',
        loadChildren:()=>
          import('./home/home.module').then ((m) => m.HomeModule),
        data: { title: 'Home' }
      },
      {
        path:'about',
        loadChildren:()=>
          import('./about/about.module').then ((m) => m.AboutModule),
        data: { title: 'About' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }
