export default class LineItemModel {
  label: string;
  price: number;

  constructor(label: string, price: number) {
    this.label = label;
    this.price = price;
  }

  get price() {
    return this.price;
  }

  get label() {
    return this.label
  }
}
