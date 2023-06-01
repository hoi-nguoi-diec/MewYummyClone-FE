import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { FormBuilder,Validators,FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent {
  product!:IProduct
  selectedImage: File | null = null;
  constructor(private fb:FormBuilder, private productService:ProductService, private router: Router){

  }

  productForm = this.fb.group({
    name: [''],
    price: 0,
    description: [''],
  })
  onHandleAdd(){
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || "",
        image: this.selectedImage?.name
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data);
        
        })
  }
}
onImageSelected(event:any){
  if (event.target.files && event.target.files.length > 0) {
    this.selectedImage = event.target.files[0];
  }
}
}
