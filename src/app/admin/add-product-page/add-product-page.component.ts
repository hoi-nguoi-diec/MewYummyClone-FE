import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { FormBuilder,Validators,FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent {
  product!:IProduct
  categories: ICategory[] = [];


  selectedImage: File | null = null;
  // imageUrl: string | null = null;
  // isUploading: boolean = false;
  // selectedFile: File | null = null;
  constructor(private fb:FormBuilder, private productService:ProductService, private routers: Router,
    // private cloudinary: Cloudinary, private http: HttpClient,
     private categoryService:CategoryService
    ){}

    ngOnInit() {
      this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
      });
    }
  productForm = this.fb.group({
    name: ['', [Validators.required]],
    price: 0,
    description: ['', [Validators.required]],
    image: ''
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
        this.routers.navigate(['admin/products'])
        })
  }
}
onImageSelected(event: any) {
  // if (event.target.files && event.target.files.length > 0) {
  //   this.selectedImage = event.target.files[0];
  //   this.upload();
  // }
}

// upload() {
//   this.isUploading = true;
//   const formData = new FormData();
//   formData.append('file', this.selectedImage);
//   formData.append('upload_preset', 'your_upload_preset_here');
//   this.http.post('https://api.cloudinary.com/v1_1/your_cloud_name_here/image/upload', formData)
//     .pipe(
//       finalize(() => this.isUploading = false)
//     )
//     .subscribe(res => {
//       this.imageUrl = res['secure_url'];
//       this.productForm.patchValue({
//         image: this.imageUrl
//       });
//     });
// }
}
