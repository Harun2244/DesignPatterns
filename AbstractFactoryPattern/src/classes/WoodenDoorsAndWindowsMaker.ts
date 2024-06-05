import { Door } from "../interfaces/Door.js";
import { DoorAndWindow } from "../interfaces/DoorAndWindow.js";
import { WindowH } from "../interfaces/WindowH.js";
import { WoodenDoor } from "./WoodenDoor.js";
import { WoodenWindow } from "./WoodenWindow.js";

export class WoodenDoorsAndWindowsMaker implements DoorAndWindow {
  makeDoor(): Door {
    return new WoodenDoor();
  }
  makeWindow(): WindowH {
    return new WoodenWindow();
  }
}
