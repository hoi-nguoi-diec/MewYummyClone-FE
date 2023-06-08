import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: IProduct[] =[]
  product!:IProduct
  p=1

  constructor (private productService:ProductService){
    this.productService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
}
