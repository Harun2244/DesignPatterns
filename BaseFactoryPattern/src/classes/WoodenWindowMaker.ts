import { Window } from "../interfaces/Window.js";
import { WindowFactory } from "../interfaces/WindowFactory.js";
import { WoodenWindow } from "./WoodenWindow.js";

export class WoodenWindowMaker implements WindowFactory{
    makeWindow(): Window {
        return new WoodenWindow();
    }
}