import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './component/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { CategoryPageComponent } from './admin/category-page/category-page.component';
import { AddCategoryPageComponent } from './admin/add-category-page/add-category-page.component';
import { AddProductPageComponent } from './admin/add-product-page/add-product-page.component';
import { UpdateProductPageComponent } from './admin/update-product-page/update-product-page.component';
import { UpdateCategoryPageComponent } from './admin/update-category-page/update-category-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    IndexComponent,
    AddToCartComponent,
    ProductDetailComponent,
    LayoutAdminComponent,
    DashboardComponent,
    ProductPageComponent,
    CategoryPageComponent,
    AddCategoryPageComponent,
    AddProductPageComponent,
    UpdateProductPageComponent,
    UpdateCategoryPageComponent,
    LayoutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
