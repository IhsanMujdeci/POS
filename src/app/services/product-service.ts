import {Injectable} from '@angular/core';
import {ProductInterface} from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductInterface {

  private readonly _price: number;
  private readonly _label: string;
  private readonly _sku: string;

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
