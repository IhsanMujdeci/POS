import * as ProductSelectorActions from '../actions/product-selector.action';
import {ProductService} from '../services/product-service';

export type Action = ProductSelectorActions.All;

const defaultState: ProductService[] = [
  new ProductService(8.50, 'hot dog', 'abc'),
  new ProductService(4, 'fries', 'abc'),
  new ProductService(4, 'drink', 'abc'),
  new ProductService(6.99, 'hamburger', 'abc'),
  new ProductService(4.50, 'sushi', 'abc'),
  new ProductService(77, 'kobe beef', 'abc'),
  new ProductService(4.5, 'taco', 'abc'),
  new ProductService(1, 'kiwi', 'abc'),
  new ProductService(9.99, 'fried chicken', 'abc'),
];

export function productSelectorReducer(state: ProductService[] = defaultState, action: Action) {

  switch (action.type) {
    case ProductSelectorActions.ADD:
      return [...state, action.payload];
    default:
      return state;
  }

}



