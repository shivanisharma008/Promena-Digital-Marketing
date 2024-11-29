import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'landing-page', pathMatch: 'full'},
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./landing-pages/landing-pages.module').then((m) => m.LandingPagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
