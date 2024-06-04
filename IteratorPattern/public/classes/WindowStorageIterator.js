export class WindowStorageIterator {
    constructor(windowStorage) {
        this.index = 0;
        this.windowStorage = windowStorage;
    }
    hasNext() {
        return this.index < this.windowStorage.windows.length - 1;
    }
    current() {
        return this.windowStorage.windows[this.index];
    }
    next() {
        if (this.hasNext() && this.windowStorage.windows.length > 0) {
            ++this.index;
            console.log(this.index);
        }
        else {
            alert("No next element!");
        }
    }
}
