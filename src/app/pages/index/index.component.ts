import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit} from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  products!:IProduct[]
  p=1
  p1=1
  p2=1
  constructor(private productSevice: ProductService){}
  ngOnInit() {
    const categoryId = '64758ce2fa762b2092bfa2ae'
    this.getProductsByCategoryId(categoryId); 
  }
  getProductsByCategoryId(categoryId: string) {
    this.productSevice.getProductsByCategoryId(categoryId).subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      
      error => {
        console.log('Error:', error);
      }
    );
  }
}
