import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './component/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
const routes: Routes = [
  {path: '' , component: IndexComponent},
  {path: 'products' , component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component:AddToCartComponent},
  {path:'products1', component:ProductDetailComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
