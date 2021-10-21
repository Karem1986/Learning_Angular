import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DressesComponent } from './dresses/dresses.component';
const routes: Routes = [{ path: 'products', component: DressesComponent }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
})
export class ProductsModule {}
