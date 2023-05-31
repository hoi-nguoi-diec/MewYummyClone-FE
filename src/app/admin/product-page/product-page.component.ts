import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  products: IProduct[] =[]
  product!:IProduct
  constructor (private productService:ProductService){
    this.productService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
  onHandleRemove(_id:any){
    const confirmDelete = confirm("Bạn muốn xóa không")
    if(confirmDelete){
      this.productService.deleteProduct(_id).subscribe(() =>{
        this.products = this.products.filter(item => item._id !== _id)
      })
    }
  }
}
