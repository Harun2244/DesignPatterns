import { Product } from "../interfaces/Product.js";

export class Window implements Product {
  getCost(): number {
    return 7;
  }
}
