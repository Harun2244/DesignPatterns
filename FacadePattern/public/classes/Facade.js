import { Door } from "./Door.js";
import { WindowH } from "./WindowH.js";
export class Facade {
    createDoor(width, length, type) {
        let door = new Door();
        door.makeDoor(width, length, type);
        return door.displayDoorCharacteristics();
    }
    createWindow(width, length, type) {
        let window = new WindowH();
        window.makeWindow(width, length, type);
        return window.displayDoorCharacteristics();
    }
}
