import { Products } from "./Product.js";

export interface StorageIterator {
  hasNext(): boolean;
  current(): Products;
  next(): void;
}
