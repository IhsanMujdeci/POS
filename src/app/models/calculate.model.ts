import LineItemModel from './line-item.model';

export class CalculateModel {
  static calculate(lineItems: LineItemModel[]) {
    return lineItems.reduce((previousLineItem, currentLineItem) => previousLineItem += currentLineItem.price, 0);
  }
}
