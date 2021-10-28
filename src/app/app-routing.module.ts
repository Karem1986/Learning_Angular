import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full', //user can go back to home page
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./products/products.module').then((m) => m.ProductsModule),
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
