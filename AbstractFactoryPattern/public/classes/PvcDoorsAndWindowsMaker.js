import { PvcDoor } from "./PvcDoor.js";
import { PvcWindow } from "./PvcWindow.js";
export class PvcDoorsAndWindowsMaker {
    makeDoor() {
        return new PvcDoor();
    }
    makeWindow() {
        return new PvcWindow();
    }
}
