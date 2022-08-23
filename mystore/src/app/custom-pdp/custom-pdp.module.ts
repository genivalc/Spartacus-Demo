import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { ConfigModule } from '@spartacus/core';
import { AsmConfig } from '@spartacus/asm/core';
import { IconModule, ListNavigationModule, ProductSummaryComponent, StarRatingModule } from '@spartacus/storefront';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';



@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CustomProductSummaryComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    IconModule,
    ListNavigationModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent
        }
      }
    }as AsmConfig)
  ]
})
export class CustomPdpModule { }
