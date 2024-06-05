import { Door } from "../interfaces/Door.js";
import { DoorAndWindow } from "../interfaces/DoorAndWindow.js";
import { WindowH } from "../interfaces/WindowH.js";
import { PvcDoor } from "./PvcDoor.js";
import { PvcWindow } from "./PvcWindow.js";

export class PvcDoorsAndWindowsMaker implements DoorAndWindow {
  makeDoor(): Door {
    return new PvcDoor();
  }
  makeWindow(): WindowH {
    return new PvcWindow();
  }
}
