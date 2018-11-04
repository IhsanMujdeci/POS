import { Action} from '@ngrx/store';
import {ProductService} from '../services/product-service';

export const ADD = '[Product List] Add';
export const CLEAR = '[Product List] Clear';

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: ProductService) {}
}

export class Clear implements Action {
  readonly type = CLEAR;
}

export type All
  = Add
  | Clear;
