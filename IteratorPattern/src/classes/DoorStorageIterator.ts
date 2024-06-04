import { Products } from "../Interfaces/Product.js";
import { StorageIterator } from "../Interfaces/StorageIterator.js";
import { Door } from "./Door.js";
import { DoorStorage } from "./DoorStorage.js";

export class DoorStorageIterator implements StorageIterator {
  doorStorage: DoorStorage;
  index: number = 0;

  constructor(doorStorage: DoorStorage) {
    this.doorStorage = doorStorage;
  }

  hasNext(): boolean {
    return this.index < this.doorStorage.doors.length - 1;
  }

  current(): Products {
    return this.doorStorage.doors[this.index];
  }

  next(): void {
    if (this.hasNext() && this.doorStorage.doors.length > 0) {
      ++this.index;
    } else {
      alert("No next element!");
    }
  }
}
