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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    IndexComponent,
    AddToCartComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
