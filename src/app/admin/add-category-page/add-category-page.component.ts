import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-add-category-page',
  templateUrl: './add-category-page.component.html',
  styleUrls: ['./add-category-page.component.scss']
})
export class AddCategoryPageComponent {
  category!:ICategory
  constructor (private formBuilder: FormBuilder, private categoryService:CategoryService,private router: Router){}
  categoryForm = this.formBuilder.group({
    name: ['']
  })
  onHandleAdd(){
    const category = {
      name: this.categoryForm.value.name || ""
    }
    this.categoryService.addCategories(category).subscribe(data =>{
      console.log(data);
      this.router.navigate(["admin/categories"])
      
    })
  }
}
