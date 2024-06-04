import { StorageIterator } from "./StorageIterator.js";
export interface Storage {
  getStorageIterator(): StorageIterator;
}
