import { Product } from "../interfaces/Product.js";
import { WindowDecorator } from "../interfaces/WindowDecorator.js";

export class ExtraPaintWindowDecorator implements WindowDecorator {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }

  getCost(): number {
    return this.product.getCost() + 1;
  }
}
