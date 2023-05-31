import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { CategoryPageComponent } from './admin/category-page/category-page.component';
import { AddCategoryPageComponent } from './admin/add-category-page/add-category-page.component';
import { AddProductPageComponent } from './admin/add-product-page/add-product-page.component';
import { UpdateProductPageComponent } from './admin/update-product-page/update-product-page.component';
import { UpdateCategoryPageComponent } from './admin/update-category-page/update-category-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    DashboardComponent,
    ProductPageComponent,
    CategoryPageComponent,
    AddCategoryPageComponent,
    AddProductPageComponent,
    UpdateProductPageComponent,
    UpdateCategoryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
