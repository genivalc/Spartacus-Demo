import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartDetailsComponent } from './custom-cart-details.component';
import { CmsConfig, FeaturesConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import { CartSharedModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    CustomCartDetailsComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    FeaturesConfigModule,
    CartSharedModule
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CartComponent: {
          component: CustomCartDetailsComponent,
        },
      },
    }),
  ],
  exports: [
    CustomCartDetailsComponent
  ]
})
export class CustomCartDetailsModule { }
