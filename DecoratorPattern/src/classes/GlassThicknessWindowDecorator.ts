import { Product } from "../interfaces/Product.js";
import { WindowDecorator } from "../interfaces/WindowDecorator.js";

export class GlassThicknessWindowDecorator implements WindowDecorator {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }

  getCost(): number {
    return this.product.getCost() + 3;
  }
}
