import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './component/index/index.component';

const routes: Routes = [
  {path: '' , component: IndexComponent},
  {path: 'products' , component: ProductComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
