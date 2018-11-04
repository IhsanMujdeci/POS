import { Component } from '@angular/core';
import {ProductService} from './services/product-service';
import {ChargeService} from './services/charge-service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as ProductListActions from './actions/product-list.action';
import {CalculationService} from './services/calculation-service';

interface AppState {
  productSelector: ProductService[];
  productList: ProductService[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPopUp = false;
  disableCharge = false;
  sumAmount = 0;
  finalAmount = 0;
  productList: Observable<ProductService[]>;
  productSelector: Observable<ProductService[]>;

  constructor(
    private chargeService: ChargeService,
    private store: Store<AppState>,
   ) {
    this.productList = this.store.select('productList');
    this.productSelector = this.store.select('productSelector');

    this.productList.subscribe(products => {
      this.sumAmount = CalculationService.calculate(products);
    });

    this.chargeService.chargeSubject.subscribe(d => {
      this.finalAmount = JSON.parse(d).amount;
      this.showPopUp = true;
      this.disableCharge = false;
    });
  }

  printReceipt() {
    window.print();
  }

  closePopUp(){
    this.showPopUp = false;
    this.store.dispatch(new ProductListActions.Clear());
  }

  addProductToCart(product: ProductService) {
    this.store.dispatch(new ProductListActions.Add(product));
  }

  charge() {
    this.disableCharge = true;
    this.chargeService.submit({event: 'purchase', amount: this.sumAmount});
  }
}
