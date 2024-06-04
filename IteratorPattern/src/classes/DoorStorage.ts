import { Storage } from "../Interfaces/Storage.js";
import { StorageIterator } from "../Interfaces/StorageIterator.js";
import { Door } from "./Door.js";
import { DoorStorageIterator } from "./DoorStorageIterator.js";

export class DoorStorage implements Storage {
  doors: Door[];

  constructor(doors: Door[]) {
    this.doors = doors;
  }

  getStorageIterator(): StorageIterator {
    return new DoorStorageIterator(this);
  }
}
