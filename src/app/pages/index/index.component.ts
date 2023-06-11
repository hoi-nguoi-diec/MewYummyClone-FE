import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(products => {
      for (const product of products) {
        if(product.categoryId == "64758cbafa762b2092bfa2a5"){
          this.products == product
        }
      }
      
    });
    console.log(this.products);
    
  }

}
