import { Component,Input } from '@angular/core';

@Component({
  selector: 'div[app-product-item-index]',
  templateUrl: './product-item-index.component.html',
  styleUrls: ['./product-item-index.component.scss']
})
export class ProductItemIndexComponent {
  @Input() product:any
}
