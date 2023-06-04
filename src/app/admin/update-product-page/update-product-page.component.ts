import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IData, IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss'],
})
export class UpdateProductPageComponent {
  product!: IProduct;
  
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param) => {
      const _id = param.get('id');
      this.productService.getOne(_id).subscribe((product) => {
        this.product = product;

        this.productForm.patchValue({
          name: product.data?.name,
          price: product.data?.price,
          description: product.data?.description,
        });
      });
    });
  }
  productForm = this.fb.group({
    name: [''],
    price: 0,
    description: [''],
  });
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
      };
      this.productService.editProduct(product).subscribe((data) => {
        console.log(data);
        this.router.navigate(['admin/products']);
      });
    }
  }
}
