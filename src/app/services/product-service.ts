import {Injectable} from '@angular/core';
import {ProductInterface} from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductInterface {

  _price: number;
  _label: string;
  _sku: string;

  constructor(price: number, label: string, sku: string) {
    this._price = price;
    this._label = label;
    this._sku = sku;
  }

  get price(): number {
    return this._price;
  }

  get label(): string {
    return this._label;
  }

  get sku(): string {
    return this._sku;
  }
}
