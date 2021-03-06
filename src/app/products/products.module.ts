import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DressesComponent } from './dresses/dresses.component';
@NgModule({
  declarations: [DressesComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'products',
        component: DressesComponent,
      },
    ]),
  ],
  exports: [DressesComponent],
})
export class ProductsModule {}
