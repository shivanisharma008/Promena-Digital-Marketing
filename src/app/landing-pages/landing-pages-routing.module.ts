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
      {
        path:'services',
        loadChildren:()=>
          import('./services/services.module').then ((m) => m.ServicesModule),
        data: { title: 'Services' }
      },
      {
        path:'career',
        loadChildren:()=>
          import('./career/career.module').then ((m) => m.CareerModule),
        data: { title: 'Career' }
      },
      {
        path:'blogs',
        loadChildren:()=>
          import('./blogs/blogs.module').then ((m) => m.BlogsModule),
        data: { title: 'Blogs' }
      },
      {
        path:'portfolio',
        loadChildren:()=>
          import('./portfolio/portfolio.module').then ((m) => m.PortfolioModule),
        data: { title: 'Blogs' }
      },
      {
        path:'contact',
        loadChildren:()=>
          import('./contact/contact.module').then ((m) => m.ContactModule),
        data: { title: 'Blogs' }
      },
      {
        path:'testimonial',
        loadChildren:()=>
          import('./testimonials/testimonials.module').then ((m) => m.TestimonialsModule),
        data: { title: 'Testimonials' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }
