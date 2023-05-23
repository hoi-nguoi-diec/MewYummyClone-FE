import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {path: '', component:ProductDetailComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
