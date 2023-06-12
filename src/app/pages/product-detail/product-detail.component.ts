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
  quantity:number = 0
  constructor (private productService:ProductService,
    private route:ActivatedRoute){
      this.route.paramMap.subscribe(params=>{
        const id = params.get('id')
        this.productService.getOne(id).subscribe(product=>{
          this.product = product
          console.log(product);
          
        })
      })
  }
  increase(){
    this.quantity++;
  }
  decrease(){
    if(this.quantity>0){
      this.quantity--
    }
  }
}
