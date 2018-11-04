import { Action} from '@ngrx/store';
import {ProductService} from '../services/product-service';

export const ADD = '[Product Selector] Add';

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: ProductService) {

  }
}

export type All
  = Add;
