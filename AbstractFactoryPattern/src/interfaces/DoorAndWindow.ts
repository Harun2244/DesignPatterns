import { Door } from "./Door.js";
import { WindowH } from "./WindowH.js";

export interface DoorAndWindow {
  makeDoor(): Door;
  makeWindow(): WindowH;
}
