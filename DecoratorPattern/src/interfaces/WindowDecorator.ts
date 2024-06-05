import { Product } from "./Product.js";

export interface WindowDecorator extends Product {
  getCost(): number;
}
