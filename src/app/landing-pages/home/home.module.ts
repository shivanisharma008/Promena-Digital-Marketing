import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BrandingConsultancyComponent } from './branding-consultancy/branding-consultancy.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { GreatIdeasComponent } from './great-ideas/great-ideas.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BrandingConsultancyComponent,
    WhoWeAreComponent,
    SolutionsComponent,
    GreatIdeasComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:HomeComponent}]),
  ]
})
export class HomeModule { }
