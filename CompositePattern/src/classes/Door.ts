import { Product } from "../interfaces/Product.js";

export class Door implements Product {
  getPrice(): number {
    return 4;
  }
}
