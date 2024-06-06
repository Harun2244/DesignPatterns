import { Door } from "./Door.js";
import { WindowH } from "./WindowH.js";

export class Facade {
  createDoor(width: number, length: number, type: string): string {
    let door: Door = new Door();
    door.makeDoor(width, length, type);
    return door.displayDoorCharacteristics();
  }

  createWindow(width: number, length: number, type: string): string {
    let window: WindowH = new WindowH();
    window.makeWindow(width, length, type);
    return window.displayDoorCharacteristics();
  }
}
