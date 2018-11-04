import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ChargeComponent } from './components/charge/charge.component';
import {ChargeService} from './services/charge-service';
import {StoreModule} from '@ngrx/store';
import {productSelectorReducer} from './reducers/product-selector.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {productListReducer} from './reducers/product-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductSelectorComponent,
    ProductListComponent,
    ChargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      productSelector: productSelectorReducer,
      productList: productListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private chargeService: ChargeService) {

  }
}
