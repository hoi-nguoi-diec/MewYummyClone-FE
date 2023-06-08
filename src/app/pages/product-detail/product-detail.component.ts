import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product!:IProduct
  constructor (private productService:ProductService,
    private route:ActivatedRoute){
      this.route.paramMap.subscribe(params=>{
        const id = params.get('id')
        this.productService.getProduct(id).subscribe(product=>{
          this.product = product
          console.log(product);
          
        })
      })
  }
}
