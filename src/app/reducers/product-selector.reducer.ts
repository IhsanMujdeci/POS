import * as ProductSelectorActions from '../actions/product-selector.action';
import {ProductService} from '../services/product-service';

export type Action = ProductSelectorActions.All;

const defaultState: ProductService[] = [new ProductService(11, 'hotdog', 'abc')];

export function productSelectorReducer(state: ProductService[] = defaultState, action: Action) {

  switch (action.type) {
    case ProductSelectorActions.ADD:
      return [...state, action.payload];
    default:
      return state;
  }

}



