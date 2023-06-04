import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss']
})
export class UpdateProductPageComponent {
  product!: IProduct
  productForm = this.fb.group({
    name: [''],
    price: 0,
    description: [''],
    image: ''
  })
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService, private route: ActivatedRoute, private routees: Router) {
    this.route.paramMap.subscribe(param => {
      const _id = param.get('id');
      this.productService.getProduct(_id).subscribe(product => {
        // Sản phẩm dựa theo ID
        this.product = product;

        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          description: product.description,
        })
      })
    })
  }

  
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || "",
        image: this.selectedImage?.name
      }
      this.productService.editProduct(product).subscribe(data => {
        console.log(data);
        this.routees.navigate(['admin/products'])
      })
    }
  }
  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
    }
  }
}
