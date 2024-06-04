import { Storage } from "../Interfaces/Storage.js";
import { StorageIterator } from "../Interfaces/StorageIterator.js";
import { Window } from "./Window.js";
import { WindowStorageIterator } from "./WindowStorageIterator.js";

export class WindowStorage implements Storage {
  windows: Window[];

  constructor(windows: Window[]) {
    this.windows = windows;
  }

  getStorageIterator(): StorageIterator {
    return new WindowStorageIterator(this);
  }
}
