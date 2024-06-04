export class DoorStorageIterator {
    constructor(doorStorage) {
        this.index = 0;
        this.doorStorage = doorStorage;
    }
    hasNext() {
        return this.index < this.doorStorage.doors.length - 1;
    }
    current() {
        return this.doorStorage.doors[this.index];
    }
    next() {
        if (this.hasNext() && this.doorStorage.doors.length > 0) {
            ++this.index;
        }
        else {
            alert("No next element!");
        }
    }
}
