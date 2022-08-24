import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCategoryNavigationComponent } from './custom-category-navigation/custom-category-navigation.component';
import { ConfigModule } from '@spartacus/core';
import { AsmConfig } from '@spartacus/asm/core';

@NgModule({
  declarations: [
    CustomCategoryNavigationComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CategoryNavigationComponent: {
          component: CustomCategoryNavigationComponent
        }
      }
    }as AsmConfig)
  ]
})
export class CustomNavigationModule { }
