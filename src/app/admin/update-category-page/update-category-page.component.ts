import { Component } from '@angular/core';
import { FormBuilder ,Validator} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-update-category-page',
  templateUrl: './update-category-page.component.html',
  styleUrls: ['./update-category-page.component.scss']
})
export class UpdateCategoryPageComponent {
  category!:ICategory
  categoryForm = this.fb.group({
    name: ['']
  })
  constructor (
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private routers:Router
  ){
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id')
      this.categoryService.getCategory(id).subscribe(category =>{
        this.category =category
        this.categoryForm.patchValue({
          name: category.name,
        })
     })
    })
  }
  onHandleUpdate(){
   if(this.categoryForm.valid){
      const category:ICategory = {
        _id: this.category._id,
        name: this.categoryForm.value.name || ""
      }
      this.categoryService.updateCategories(category).subscribe(data =>{
        console.log(data);
        this.routers.navigate(["admin/categories"])
      })
    }
  }
}
