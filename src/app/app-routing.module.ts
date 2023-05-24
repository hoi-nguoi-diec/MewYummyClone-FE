import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddToCartComponent } from './component/add-to-cart/add-to-cart.component';
const routes: Routes = [
  {path: '' , component: LayoutPageComponent, children: [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent },
    {path: 'products' , component: ProductComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cart', component:AddToCartComponent},
    {path:'products1', component:ProductDetailComponent},
  ]},
 
  { path: 'admin', component: LayoutAdminComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'product', component: ProductPageComponent},
    { path: 'product/add', component: AddProductPageComponent},
    { path: 'product/edit', component: UpdateProductPageComponent},
    { path: 'category', component: CategoryPageComponent},
    { path: 'category/addd', component: AddCategoryPageComponent},
    { path: 'category/editt', component: UpdateCategoryPageComponent},
  ]}
]

import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { AddProductPageComponent } from './admin/add-product-page/add-product-page.component';
import { UpdateProductPageComponent } from './admin/update-product-page/update-product-page.component';
import { CategoryPageComponent } from './admin/category-page/category-page.component';
import { AddCategoryPageComponent } from './admin/add-category-page/add-category-page.component';
import { UpdateCategoryPageComponent } from './admin/update-category-page/update-category-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
