import { DoorStorageIterator } from "./DoorStorageIterator.js";
export class DoorStorage {
    constructor(doors) {
        this.doors = doors;
    }
    getStorageIterator() {
        return new DoorStorageIterator(this);
    }
}
