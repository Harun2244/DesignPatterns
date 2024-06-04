import { Products } from "../Interfaces/Product.js";
import { StorageIterator } from "../Interfaces/StorageIterator.js";
import { WindowStorage } from "./WindowStorage.js";

export class WindowStorageIterator implements StorageIterator {
  windowStorage: WindowStorage;
  index: number = 0;

  constructor(windowStorage: WindowStorage) {
    this.windowStorage = windowStorage;
  }

  hasNext(): boolean {
    return this.index < this.windowStorage.windows.length - 1;
  }

  current(): Products {
    return this.windowStorage.windows[this.index];
  }

  next(): void {
    if (this.hasNext() && this.windowStorage.windows.length > 0) {
      ++this.index;
      console.log(this.index);
    } else {
      alert("No next element!");
    }
  }
}
