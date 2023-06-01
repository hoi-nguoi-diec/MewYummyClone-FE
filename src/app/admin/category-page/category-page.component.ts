import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
  categories: ICategory[] = []
  p=1;
  constructor(private Categoryservice: CategoryService) {
    this.Categoryservice.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  removeItem(id: any) {
    if (confirm('Bạn có chắc muốn xóa danh mục này không?')) {
      this.Categoryservice.deleteCategories(id).subscribe(() => {
        this.categories = this.categories.filter(item => item._id !== id);
      }, (error) => {
        console.log(error.message);
      });
    }
  }

}
