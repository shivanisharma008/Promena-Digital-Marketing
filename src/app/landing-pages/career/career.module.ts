import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:CareerComponent}])
  ]
})
export class CareerModule { }
