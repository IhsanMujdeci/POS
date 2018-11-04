import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.html',
  styleUrls: ['./product-selector.scss']
})
export class ProductSelectorComponent {
  @Input() label: string;
}
