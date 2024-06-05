import { Product } from "../interfaces/Product.js";

export class WindowH implements Product {
  getPrice(): number {
    return 2;
  }
}
