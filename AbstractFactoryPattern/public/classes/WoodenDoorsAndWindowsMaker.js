import { WoodenDoor } from "./WoodenDoor.js";
import { WoodenWindow } from "./WoodenWindow.js";
export class WoodenDoorsAndWindowsMaker {
    makeDoor() {
        return new WoodenDoor();
    }
    makeWindow() {
        return new WoodenWindow();
    }
}
