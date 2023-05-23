import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
