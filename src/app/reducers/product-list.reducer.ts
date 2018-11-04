import * as ProductListActions from '../actions/product-list.action';
import {ProductService} from '../services/product-service';

export type Action = ProductListActions.All;

const defaultState: ProductService[] = [];

export function productListReducer(state: ProductService[] = defaultState, action: Action) {

  switch (action.type) {
    case ProductListActions.ADD:
      return [...state, action.payload];
    case ProductListActions.CLEAR:
      return [];
    default:
      return state;
  }

}
