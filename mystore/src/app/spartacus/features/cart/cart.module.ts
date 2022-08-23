import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartDetailsModule } from './custom-cart-details/custom-cart-details.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomCartDetailsModule
  ],
  exports: [
    CustomCartDetailsModule
  ]
})
export class CustomCartModule { }
