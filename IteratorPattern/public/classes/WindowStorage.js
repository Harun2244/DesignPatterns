import { WindowStorageIterator } from "./WindowStorageIterator.js";
export class WindowStorage {
    constructor(windows) {
        this.windows = windows;
    }
    getStorageIterator() {
        return new WindowStorageIterator(this);
    }
}
