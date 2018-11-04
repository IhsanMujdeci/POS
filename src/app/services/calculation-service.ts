import {ProductService} from './product-service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  static calculate(lineItems: ProductService[]) {
    return lineItems.reduce((previousProduct, currentProduct) => previousProduct += currentProduct.price, 0);
  }
}
