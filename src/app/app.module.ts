import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { HeaderComponent } from './header/header.component';
import { ProductsModule } from './products/products.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DressesComponent } from './products/dresses/dresses.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  // { path: 'Admin', loadChildren:()=> System.import('./Admin').then((comp: any) => comp.default) },
  // { path: 'Employee', loadChildren:()=> System.import('./Employee').then((comp: any) => comp.default) },
];
@NgModule({
  declarations: [AppComponent, ImageComponent, HeaderComponent], //1 module and twee components
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
